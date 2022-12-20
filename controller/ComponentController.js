require('dotenv').config()
const { ComponentList } = require('../utils/ComponentList')

const FindComponent = _componentData => {
	const components = Array.isArray(_componentData)
		? _componentData.map(item => {
				let pageComponents = ComponentList.find(pageComponent => {
					if (pageComponent.name === item.name) {
						pageComponent.id = item?.id
						pageComponent.structure = item?.structure
						return pageComponent
					}
				})
				return pageComponents
		  })
		: []
	return components
}

const GenerateComponentStructure = (_page, _content, _condition) => {
	return `
import axios from 'axios'
import Layout from "components/common/Layout/Layout";
import componentGenerator from 'hooks/componentGenerator';

function Index${_page.id}({pim,data}) {
return (
	<Layout header={data?.widgets && data?.widgets[0]?.name === "Header"} title={data?.title} meta={${
		_condition === 'pages' ? _page.meta : JSON.stringify(_page.meta)
	}}>
      	<section>
				{data?.widgets ? data.widgets.map(block => componentGenerator(block, pim , block.name === 'Header' ? data.notifications : null )) : <>this page don't have any components</>}
		</section>
	</Layout>
    )
  }
${
	_page.model_id !== 0 &&
	(_page.model_type === 'product' || _page.model_type === 'support')
		? `  export async function getServerSideProps({req,res}) {		
			res.setHeader(
				'Cache-Control',
				'public, s-maxage=10, stale-while-revalidate=59'
			)
			console.log('send cxm request')
				let data = await axios
				   .get(
					   '${process.env.CXM_API_ROUTE}/getPageInfo/${_page.id}'
				   )
				   .then(response => {
					   console.log('get cxm data')
					   return response.data
				   })
				   .catch(error => {
					   console.error('Error:', error)
					   return null
				   })	
				console.log('send pim request')
				 let pim = await axios
						.get(
							'${process.env.PIM_API_ROUTE}/getProduct/${_page.model_id}'
						)
						.then(response => {
							console.log('get pim data')
							return response.data.data
						})
						.catch(error => {
							console.error('Error:', error)
							return null
						})
	return { props: { pim,data }} }`
		: `export async function getServerSideProps({req,res}) {		
			res.setHeader(
				'Cache-Control',
				'public, s-maxage=10, stale-while-revalidate=59'
			)
			console.log('send cxm request')
				let data = await axios
				   .get(
					   '${process.env.CXM_API_ROUTE}/getPageInfo/${_page.id}'
				   )
				   .then(response => {
					   console.log('get cxm data')
					   return response.data
				   })
				   .catch(error => {
					   console.error('Error:', error)
					   return null
				   })	
	return { props: { data }} }`
}
export default Index${_page.id}`
}

const GenerateAllComponentStructure = () => {
	return `
	import Layout from "components/common/Layout/Layout"
	  ${ComponentList.map(item => `import ${item.name} from '${item.path}';`).join(
			' '
		)}

	  function AllComponents() {
	    return (
			<Layout>
	      <section> ${ComponentList.map(item => `<${item.name} />`).join(
					' '
				)}</section>
		</Layout>
	    )
	  }

	  export default AllComponents`
}

module.exports = {
	FindComponent,
	GenerateComponentStructure,
	GenerateAllComponentStructure
}

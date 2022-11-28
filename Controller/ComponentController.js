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
	let uniqueImport = [...new Set(_content)]
	return `
	import { useEffect,useState } from 'react';
  	import dynamic from 'next/dynamic';
	import axios from 'axios'
	import Layout from "components/common/Layout/Layout";
	import { useRouter } from 'next/router'
	import MainData from "utils/urlData.json"

	${uniqueImport
		.map(
			item =>
				item && `const ${item.name} = dynamic(() => import('${item.path}'))`
		)
		.join(';')}

	function Index${_page.id}({pim}) {
		const data = MainData.find(item => item.id === ${_page.id})
		const router = useRouter()

		${
			_page?.redirect
				? `useEffect(() => {
			router.push('${_page.redirect}')
		}, [])`
				: ''
		}
    return (
			<Layout title={'${_page.title}'} meta={${
		_condition === 'pages' ? _page.meta : JSON.stringify(_page.meta)
	}}>
	      		<section>
		  		 ${_content
							.map(
								(item, index) =>
									item &&
									`{data && data.widgets.length > 0 && data.widgets[${index}].structure ? <${
										item.name
									} ${
										_page.model_type ? `pim={pim}` : ''
									} data={data.widgets[${index}]}/>  : null }`
							)
							.join(' ')}
				</section>
			</Layout>
	    )
	  }

	${
		_condition === 'pages' && _page.model_type
			? `  export async function getServerSideProps(context) {			
				console.log('send pim request')
				 let pim = await axios
						.get(
							'https://impim.dev-api.hisenseportal.com/api/cms/getProduct/${_page.model_id}'
						)
						.then(response => {
							console.log('get pim data')
							return response.data.data
						})
						.catch(error => {
							console.error('Error:', error)
							return null
						})
			return { props: { pim }} }`
			: ''
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

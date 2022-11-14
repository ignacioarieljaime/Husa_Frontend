const { ComponentList } = require('../utils/ComponentList')

const FindComponent = _componentData => {
	const components = Array.isArray(_componentData)
		? _componentData.map(item => {
				let pageComponents = ComponentList.find(pageComponent => {
					if (pageComponent.name === item.name) {
						pageComponent.structure = item?.structure
						return pageComponent
					}
				})
				return pageComponents
		  })
		: []
	return components
}

const GenerateComponentStructure = (_page, _content) => {
	let uniqueImport = [...new Set(_content)]
	return `
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState, useEffect } from "react";
	import dynamic from "next/dynamic";
	import { useRouter } from 'next/router'

	  ${uniqueImport
			.map(
				item =>
					item && `const ${item.name} = dynamic(() => import('${item.path}'))`
			)
			.join(';')}

		

	function Index${_page.id}({pim,data}) {
		const router = useRouter()

		${
			_page.redirect &&
			`useEffect(() => {
			router.push('${_page.redirect}')
		}, [])`
		}
	
	    return (
			<Layout title={'${_page.title}'} meta={${_page.meta}}>
	      		<section>
		  		 ${_content
							.map(
								(item, index) =>
									item &&
									`{data && data.length > 0 && data[${index}]?.structure ? <${
										item.name
									} ${
										_page.model_type ? `pim={pim}` : ''
									} data={data[${index}]}/>  : null }`
							)
							.join(' ')}
				</section>
			</Layout>
	    )
	  }

	${
		_page.model_type
			? `  export async function getServerSideProps(context) {
			console.log('send cxm request')
			let data = await axios
				.get(
					'https://imcxm.stage-api.hisenseportal.com/api/husa/getPageInfo/${_page.id}'
				)
				.then(response => {
					console.log('get cxm data')
					return response.data.widgets
				})
				.catch(error => {
					console.error('Error:', error)
					return null
				})			
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
	
		
			return { props: { data , pim }} }`
			: `  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.stage-api.hisenseportal.com/api/husa/getPageInfo/${_page.id}'
				)
				.then(response => {
					console.log('get ssr data')
					return response.data.widgets
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

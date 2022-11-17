require('dotenv').config()
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

const GenerateComponentStructure = (_page, _content, _condition) => {
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
			_page?.redirects?.redirect_to
				? `useEffect(() => {
			router.push('${_page.redirects.redirect_to}')
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
		_condition === 'pages'
			? _page.model_type
				? `  export async function getServerSideProps(context) {
			console.log('send cxm request')
			let data = await axios
				.get(
					'${process.env.CXM_API_ROUTE}/getPageInfo/${_page.id}'
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
					'${process.env.CXM_API_ROUTE}/getPageInfo/${_page.id}'
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
			: `  export async function getServerSideProps(context) {
				console.log('send cxm request')
				let data = await axios
					.get(
						'https://imcxm.dev-api.hisenseportal.com/api/post/${_page.id}' ,{
							headers: {
								Authorization:
									'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGUzZTI5YTI2MzU5MWY2YzBlZDkwOTA5YmQ1MWJjODM5YjM1ZjlhY2EwZmI1MjBlZGM1NzExZmFhMjFiMmYwYWYwMDlkYmJkODQwNzQ1MzEiLCJpYXQiOjE2Njg2MDYwNDMuMjQxMDg3LCJuYmYiOjE2Njg2MDYwNDMuMjQxMDg5LCJleHAiOjE3MDAxNDIwNDMuMjMxNjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.ToSRkg1Mtr6pubXb5BKyKQChU2OPH1PUL_B2hmfwXuEV7m93s-PlMEdUG1Yeb6bd_8yMigOoXYzijpZv4Vu5cV8rhHB71_34Q984l8G-Kiesp8EQOECH533YY2_4WqeHKnAl7OXDg_hTzE9zFm2gI1RwhZAOhXfTGa7DydF6RUKYGyQEMDu0sPUWYS2-ZZRtLuXAyJIN7MxH5qeaDFuVp74IWBSOpZ1dSarNhiaN6m_rlTZLvjTtvSwLR2Xe27YIvrWXMqgaKeLE89I23O_kMSszLbntLCsJVXWOmW1U0rGBRc4njqbCu49Y6ossumNcssRMU9TQUC8PGTy4oH85Qe5xhP_wZQFtraMucc682Dtq0xPBj1aubixk2wKB7nFXdjZiuQ8HC7KxgRAXWsCWxz8a33XS9xPnH4gxgLqx2L6SJeQCGyoPs_zoRUvR6l2PlYIL7NwchZoE85JKzUllOcAa1yKyrjnZhPGIp00-QOnql049gnPRzcsqCtumCDeWxmrw9DqNJ1Qdc2S_p1wbeM0NgBAjrlVjebUexL4TAzQV6aKi8ZROi4IamjHSQ2Bj8_13hzwkEASBN1EV4un6gt-z2qqufgB8a50PiIlSBTciqXre1bEQTTnkCTXGBZc_0KSYfIZQnjrAnHJV-68lf9zT0aXZB4Dimn4oUdgGlvo'
							}
						})
					.then(response => {
						console.log('get cxm blog data')
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

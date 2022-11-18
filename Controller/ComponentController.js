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
									'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMTM3NTJkNmJmNzE5OTRjNDRmYmU2OWY5OWIwZGE0ZGY2NDhlYjkxYTRiOWZlMDZkYmE5YmJlNzk3MGE4NGM0MTk0ZDNjYTEzYTgzNTVhYmQiLCJpYXQiOjE2NjY2NDAyNjEuODM4ODY1LCJuYmYiOjE2NjY2NDAyNjEuODM4ODY3LCJleHAiOjE2OTgxNzYyNjEuODI4ODk0LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.QlOepcxHTAs2uz_RC9DGixoRaoAcXdEFJ9PKHWob-KONfIWVoTlnkRpElmJfRzHbXuXIe40c6xvSvxEaraYCJjh5QwHeSrU-IrkfI_477Pb92SxdVeElGMiSKS33wEcHU0-DovkHn60EyOYQ3vpVqvUBsCPMrLbUYW-JB2nGyj19DDh0UR-uo8b2gWXq3KA34RnvTU0R6MQi7K38GuksKiTcj0thyDkQmA8PelxWMco4GOCq_f7zDniMuVmBxTWmlFWOKD-8ero-Q3h-NipTZGCGj6ER43euN7wMassyTrqu4GywNl3Cq2sdder0JPX-MBX3G3igL7GZzWEjwgxi54nmcmWiOgD-v7h0G0Jd17y2KRrJzZAt3rgpNfJB5PIqDJHWyEFrlVb6lT4jHaxmZEpSVdZV9pMTF1DX8isywiC2j8YmU4nKBgU07YMeU1xgESfmcpXrcZx_ISGRu4_haDy7vcPtznT45cto7Nughwj7S3Ef2Q_qCWB0ZekfIejNiUQy6Jy91v0HbAq7_mHsfhrjIo9uGRg_zr0aNpU1iK2ahKT-WPGJ8hDyriVsqRNxcYoUj7aOibus7xPm0zRHslf_uuY63K40jmcyrb8RvzEIJQDl_aRAXkyxMlcsWHKGaHyP3yw0E9SVm19yvshjEkH3stlK8NhBCAJWMkZCZWE'
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

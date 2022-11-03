
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState, useEffect } from "react";
	import dynamic from "next/dynamic";
	import { useRouter } from 'next/router'

	  

		

	function Index1146({pim,data}) {
		const router = useRouter()

		
	
	    return (
			<Layout title={'U9G Series'} meta={"[{\"rel\": \"property=\\\"og:site_name\\\"\", \"name\": \"property=\\\"og:title\\\"\", \"content\": \"Hisense USA\"}, {\"rel\": \"property=\\\"og:title\\\"\", \"name\": \"property=\\\"og:title\\\"\", \"content\": \"U9G Series\"}, {\"rel\": \"property=\\\"og:description\\\"\", \"name\": \"property=\\\"og:description\\\"\", \"content\": \"U9G Series\"}, {\"rel\": \"property=\\\"og:image\\\"\", \"name\": \"property=\\\"og:image\\\"\", \"content\": None}, {\"rel\": \"property=\\\"og:url\\\"\", \"name\": \"property=\\\"og:url\\\"\", \"content\": \"https://hisense-usa.com/Hisense-75U9DG-u9dg-dual-cell-android-tv\"}, {\"rel\": \"property=\\\"og:locale\\\"\", \"name\": \"property=\\\"og:locale\\\"\", \"content\": \"en_US\"}, {\"rel\": \"property=\\\"og:type\\\"\", \"name\": \"property=\\\"og:type\\\"\", \"content\": \"website\"}]"}>
	      		<section>
		  		 
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send cxm request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/1146'
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
							'https://impim.dev-api.hisenseportal.com/api/cms/getProduct/835'
						)
						.then(response => {
							console.log('get pim data')
							return response.data.data
						})
						.catch(error => {
							console.error('Error:', error)
							return null
						})
	
		
			return { props: { data , pim }} }
	

	  export default Index1146
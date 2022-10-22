
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  

	function Index176({pim,data}) {
	    return (
			<Layout meta={[{"rel": "property=\"og:site_name\"", "name": "property=\"og:title\"", "content": "Hisense USA"}, {"rel": "property=\"og:title\"", "name": "property=\"og:title\"", "content": "Toshiba 43” 4K UHD Smart Fire TV"}, {"rel": "property=\"og:description\"", "name": "property=\"og:description\"", "content": "Toshiba 43” 4K UHD Smart Fire TV"}, {"rel": "property=\"og:image\"", "name": "property=\"og:image\"", "content": "/assets/GalleryImages/Product/153/4efee4b437/C350-Front__ScaleMaxHeightWzc1MF0.png"}, {"rel": "property=\"og:url\"", "name": "property=\"og:url\"", "content": "/products/toshiba-43-4k-uhd-smart-fire-tv-43c350ku-hisense"}, {"rel": "property=\"og:locale\"", "name": "property=\"og:locale\"", "content": "en_US"}, {"rel": "property=\"og:type\"", "name": "property=\"og:type\"", "content": "website"}]}>
	      		<section>
		  		 
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send cxm request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/176'
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
							'https://impim.dev-api.hisenseportal.com/api/cms/getProduct/1182'
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
	

	  export default Index176
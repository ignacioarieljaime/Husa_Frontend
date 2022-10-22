
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  ;const ImageBox = dynamic(() => import('components/common/ImageBox'));const Subscribe = dynamic(() => import('components/common/Subscribe'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index36({pim,data}) {
	    return (
			<Layout meta={[{"rel": "blank", "name": "title", "content": null}, {"rel": "blank", "name": "description", "content": null}, {"rel": "property=\"og:site_name\"", "name": "property=\"og:site_name\"", "content": "Hisense USA"}, {"rel": "property=\"og:title\"", "name": "property=\"og:title\"", "content": null}, {"rel": "property=\"og:description\"", "name": "property=\"og:description\"", "content": null}, {"rel": "property=\"og:image\"", "name": "property=\"og:image\"", "content": null}, {"rel": "property=\"og:url\"", "name": "property=\"og:url\"", "content": null}, {"rel": "property=\"og:type\"", "name": "property=\"og:type\"", "content": "website"}, {"rel": "property=\"og:locale\"", "name": "property=\"og:locale\"", "content": "en_US"}]}>
	      		<section>
		  		    { data && <ImageBox  data={data[3]}/> }     { data && <Subscribe  data={data[8]}/> } { data && <Footer  data={data[9]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/36'
				)
				.then(response => {
					console.log('get ssr data')
					return response.data.widgets
				})
				.catch(error => {
					console.error('Error:', error)
					return null
				})			

			return { props: { data }} }
	

	  export default Index36
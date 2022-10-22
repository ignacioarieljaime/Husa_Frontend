
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const LandingSlider = dynamic(() => import('components/page/Landing/LandingSlider'));const LandingProductsBox = dynamic(() => import('components/page/Landing/LandingProductsBox'));const LandingVideoPlayer = dynamic(() => import('components/page/Landing/LandingVideoPlayer.js'));const Subscribe = dynamic(() => import('components/common/Subscribe'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index1({pim,data}) {
	    return (
			<Layout meta={[{"rel": "blank", "name": "title", "content": "Hisense Landing Page"}, {"rel": "blank", "name": "description", "content": null}, {"rel": "property=\"og:site_name\"", "name": "property=\"og:site_name\"", "content": "Hisense USA"}, {"rel": "property=\"og:title\"", "name": "property=\"og:title\"", "content": "Hisense Landing Page"}, {"rel": "property=\"og:description\"", "name": "property=\"og:description\"", "content": null}, {"rel": "property=\"og:image\"", "name": "property=\"og:image\"", "content": null}, {"rel": "property=\"og:url\"", "name": "property=\"og:url\"", "content": "https://hisense-usa.com/"}, {"rel": "property=\"og:type\"", "name": "property=\"og:type\"", "content": "website"}, {"rel": "property=\"og:locale\"", "name": "property=\"og:locale\"", "content": "en_US"}]}>
	      		<section>
		  		 { data && <Header  data={data[0]}/> } { data && <LandingSlider  data={data[1]}/> } { data && <LandingProductsBox  data={data[2]}/> } { data && <LandingVideoPlayer  data={data[3]}/> } { data && <Subscribe  data={data[4]}/> } { data && <Footer  data={data[5]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/1'
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
	

	  export default Index1
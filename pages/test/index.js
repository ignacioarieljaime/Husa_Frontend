
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const LandingSlider = dynamic(() => import('components/page/Landing/LandingSlider'));const LandingProductsBox = dynamic(() => import('components/page/Landing/LandingProductsBox'));const LandingVideoPlayer = dynamic(() => import('components/page/Landing/LandingVideoPlayer.js'));const Subscribe = dynamic(() => import('components/common/Subscribe'))

	function Index127({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		 { data && <LandingSlider  data={data[0]}/> } { data && <LandingProductsBox  data={data[1]}/> } { data && <LandingVideoPlayer  data={data[2]}/> } { data && <Subscribe  data={data[3]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/127'
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
	

	  export default Index127
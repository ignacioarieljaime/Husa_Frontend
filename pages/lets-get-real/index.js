
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const ImageBox = dynamic(() => import('components/common/ImageBox'));const LandingVideoPlayer = dynamic(() => import('components/page/Landing/LandingVideoPlayer.js'));const ULEDProducts = dynamic(() => import('components/page/ULED/ULEDProducts'));const ULEDGreatTvTextBox = dynamic(() => import('components/page/ULED/ULEDGreatTvTextBox'));const Subscribe = dynamic(() => import('components/common/Subscribe'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index50({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		 { data && <Header  data={data[0]}/> } { data && <ImageBox  data={data[1]}/> } { data && <LandingVideoPlayer  data={data[2]}/> } { data && <ULEDProducts  data={data[3]}/> } { data && <ULEDGreatTvTextBox  data={data[4]}/> } { data && <Subscribe  data={data[5]}/> } { data && <Footer  data={data[6]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/50'
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
	

	  export default Index50
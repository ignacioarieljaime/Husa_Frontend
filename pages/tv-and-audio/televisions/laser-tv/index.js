
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));;const ImageBox = dynamic(() => import('components/common/ImageBox'));const CommercialIntro = dynamic(() => import('components/page/Commercial/CommercialIntro'));const UHDNewsBox = dynamic(() => import('components/page/UHD/UHDNewsBox'));const Subscribe = dynamic(() => import('components/common/Subscribe'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index56({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		 { data && <Header  data={data[0]}/> }  { data && <ImageBox  data={data[2]}/> } { data && <CommercialIntro  data={data[3]}/> } { data && <ImageBox  data={data[4]}/> }  { data && <ImageBox  data={data[6]}/> }   { data && <UHDNewsBox  data={data[9]}/> }  { data && <ImageBox  data={data[11]}/> } { data && <Subscribe  data={data[12]}/> } { data && <Footer  data={data[13]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/56'
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
	

	  export default Index56
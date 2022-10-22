
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const UHDIntro = dynamic(() => import('components/page/UHD/UHDIntro'));const ImageBox = dynamic(() => import('components/common/ImageBox'));const UHDNewsBox = dynamic(() => import('components/page/UHD/UHDNewsBox'));const UHDAbilityBox = dynamic(() => import('components/page/UHD/UHDAbilityBox'));const ProductBigContent = dynamic(() => import('components/page/Product/ProductBigContent'));const Subscribe = dynamic(() => import('components/common/Subscribe'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index54({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		 { data && <Header  data={data[0]}/> } { data && <UHDIntro  data={data[1]}/> } { data && <ImageBox  data={data[2]}/> } { data && <UHDNewsBox  data={data[3]}/> } { data && <ImageBox  data={data[4]}/> } { data && <UHDNewsBox  data={data[5]}/> } { data && <UHDAbilityBox  data={data[6]}/> } { data && <ProductBigContent  data={data[7]}/> } { data && <Subscribe  data={data[8]}/> } { data && <Footer  data={data[9]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/54'
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
	

	  export default Index54
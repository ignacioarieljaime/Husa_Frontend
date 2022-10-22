
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const ULEDHead = dynamic(() => import('components/page/ULED/ULEDHead'));const ULEDProducts = dynamic(() => import('components/page/ULED/ULEDProducts'));const ULEDTextBox = dynamic(() => import('components/page/ULED/ULEDTextBox'));const ULEDImageBoxWithBtn = dynamic(() => import('components/page/ULED/ULEDImageBoxWithBtn'));const ULEDAllTech = dynamic(() => import('components/page/ULED/ULEDAllTech'));const ImageBox = dynamic(() => import('components/common/ImageBox'));const ULEDImageAndTextBox = dynamic(() => import('components/page/ULED/ULEDImageAndTextBox'));const ULEDGreatTvTextBox = dynamic(() => import('components/page/ULED/ULEDGreatTvTextBox'));const SmartInfoBetterNewOrOldBox = dynamic(() => import('components/page/SmartInfo/SmartInfoBetterNewOrOldBox'));const Subscribe = dynamic(() => import('components/common/Subscribe'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index55({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		 { data && <Header  data={data[0]}/> } { data && <ULEDHead  data={data[1]}/> } { data && <ULEDProducts  data={data[2]}/> } { data && <ULEDTextBox  data={data[3]}/> } { data && <ULEDImageBoxWithBtn  data={data[4]}/> } { data && <ULEDAllTech  data={data[5]}/> } { data && <ImageBox  data={data[6]}/> } { data && <ULEDImageAndTextBox  data={data[7]}/> } { data && <ULEDGreatTvTextBox  data={data[8]}/> } { data && <SmartInfoBetterNewOrOldBox  data={data[9]}/> } { data && <Subscribe  data={data[10]}/> } { data && <Footer  data={data[11]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/55'
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
	

	  export default Index55
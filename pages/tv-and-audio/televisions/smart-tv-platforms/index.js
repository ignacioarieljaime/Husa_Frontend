
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const SmartInfoHead = dynamic(() => import('components/page/SmartInfo/SmartInfoHead'));const SmartInfoTvsBox = dynamic(() => import('components/page/SmartInfo/SmartInfoTvsBox'));const SmartInfoTextBox = dynamic(() => import('components/page/SmartInfo/SmartInfoTextBox'));const ImageBox = dynamic(() => import('components/common/ImageBox'));const SmartInfoTextAndImageBox = dynamic(() => import('components/page/SmartInfo/SmartInfoTextAndImageBox'));const SmartInfoFindHisense = dynamic(() => import('components/page/SmartInfo/SmartInfoFindHisense'));const SmartInfoBetterNewOrOldBox = dynamic(() => import('components/page/SmartInfo/SmartInfoBetterNewOrOldBox'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index57({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		 { data && <Header  data={data[0]}/> } { data && <SmartInfoHead  data={data[1]}/> } { data && <SmartInfoTvsBox  data={data[2]}/> } { data && <SmartInfoTextBox  data={data[3]}/> } { data && <ImageBox  data={data[4]}/> } { data && <SmartInfoTextAndImageBox  data={data[5]}/> } { data && <SmartInfoFindHisense  data={data[6]}/> } { data && <SmartInfoBetterNewOrOldBox  data={data[7]}/> } { data && <Footer  data={data[8]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/57'
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
	

	  export default Index57
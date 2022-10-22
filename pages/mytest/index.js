
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  ;const ProductTextWithImageBox = dynamic(() => import('components/page/Product/ProductTextWithImageBox'));const ProductTextWithIcon = dynamic(() => import('components/page/Product/ProductTextWithIcon'));const UHDNewsBox = dynamic(() => import('components/page/UHD/UHDNewsBox'));const ULEDTextBox = dynamic(() => import('components/page/ULED/ULEDTextBox'));const ULEDImageBoxWithBtn = dynamic(() => import('components/page/ULED/ULEDImageBoxWithBtn'));const ULEDAllTech = dynamic(() => import('components/page/ULED/ULEDAllTech'));const ULEDImageAndTextBox = dynamic(() => import('components/page/ULED/ULEDImageAndTextBox'))

	function Index115({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		    { data && <ProductTextWithImageBox  data={data[3]}/> } { data && <ProductTextWithIcon  data={data[4]}/> }  { data && <UHDNewsBox  data={data[6]}/> } { data && <ULEDTextBox  data={data[7]}/> } { data && <ULEDImageBoxWithBtn  data={data[8]}/> } { data && <ULEDAllTech  data={data[9]}/> } { data && <ULEDImageAndTextBox  data={data[10]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/115'
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
	

	  export default Index115

	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const ULEDTextBox = dynamic(() => import('components/page/ULED/ULEDTextBox'));;const ProductTextWithIcon = dynamic(() => import('components/page/Product/ProductTextWithIcon'))

	function Index64({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		 { data && <ULEDTextBox  data={data[0]}/> }  { data && <ProductTextWithIcon  data={data[2]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/64'
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
	

	  export default Index64
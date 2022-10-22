
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const ProductsBanner = dynamic(() => import('components/page/Products/ProductsBanner'));const ProductsGrid = dynamic(() => import('components/page/Products/ProductsGrid'))

	function Index4({pim,data}) {
	    return (
			<Layout meta={[{"rel": null, "name": "test", "content": "test"}]}>
	      		<section>
		  		 { data && <ProductsBanner  data={data[0]}/> } { data && <ProductsGrid  data={data[1]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/4'
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
	

	  export default Index4
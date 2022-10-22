
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const ProductsBanner = dynamic(() => import('components/page/Products/ProductsBanner'));const ProductsGrid = dynamic(() => import('components/page/Products/ProductsGrid'));const Subscribe = dynamic(() => import('components/common/Subscribe'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index32({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		 { data && <Header  data={data[0]}/> } { data && <ProductsBanner  data={data[1]}/> } { data && <ProductsGrid  data={data[2]}/> } { data && <Subscribe  data={data[3]}/> } { data && <Footer  data={data[4]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/32'
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
	

	  export default Index32
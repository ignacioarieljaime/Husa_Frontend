
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const ProductInfoAndSliderBox = dynamic(() => import('components/page/Product/ProductInfoAndSliderBox'));const ProductSupportInfo = dynamic(() => import('components/page/ProductSupport/ProductSupportInfo'));const ProductSupportLinks = dynamic(() => import('components/page/ProductSupport/ProductSupportLinks'));const NeedHelpBox = dynamic(() => import('components/common/NeedHelpBox'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index109({pim,data}) {
	    return (
			<Layout meta={[]}>
	      		<section>
		  		 { data && <Header  data={data[0]}/> } { data && <ProductInfoAndSliderBox  data={data[1]}/> } { data && <ProductSupportInfo  data={data[2]}/> } { data && <ProductSupportLinks  data={data[3]}/> } { data && <NeedHelpBox  data={data[4]}/> } { data && <Footer  data={data[5]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/109'
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
	

	  export default Index109
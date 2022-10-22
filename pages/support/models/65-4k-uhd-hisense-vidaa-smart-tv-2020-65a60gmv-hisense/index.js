
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const ProductInfoAndSliderBox = dynamic(() => import('components/page/Product/ProductInfoAndSliderBox'));const ProductSupportInfo = dynamic(() => import('components/page/ProductSupport/ProductSupportInfo'));const ProductSupportLinks = dynamic(() => import('components/page/ProductSupport/ProductSupportLinks'));const NeedHelpBox = dynamic(() => import('components/common/NeedHelpBox'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index167({pim,data}) {
	    return (
			<Layout meta={null}>
	      		<section>
		  		 { data && <Header pim={pim} data={data[0]}/> } { data && <ProductInfoAndSliderBox pim={pim} data={data[1]}/> } { data && <ProductSupportInfo pim={pim} data={data[2]}/> } { data && <ProductSupportLinks pim={pim} data={data[3]}/> } { data && <NeedHelpBox pim={pim} data={data[4]}/> } { data && <Footer pim={pim} data={data[5]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send cxm request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/167'
				)
				.then(response => {
					console.log('get cxm data')
					return response.data.widgets
				})
				.catch(error => {
					console.error('Error:', error)
					return null
				})			
				console.log('send pim request')
				 let pim = await axios
						.get(
							'https://impim.dev-api.hisenseportal.com/api/cms/getProduct/895'
						)
						.then(response => {
							console.log('get pim data')
							return response.data.data
						})
						.catch(error => {
							console.error('Error:', error)
							return null
						})
	
		
			return { props: { data , pim }} }
	

	  export default Index167

	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const ProductInfoAndSliderBox = dynamic(() => import('components/page/Product/ProductInfoAndSliderBox'));const ProductCategoryBox = dynamic(() => import('components/page/Product/ProductCategoryBox'));const ProductBigContent = dynamic(() => import('components/page/Product/ProductBigContent'));const ImageBox = dynamic(() => import('components/common/ImageBox'))

	function Index168({pim,data}) {
	    return (
			<Layout meta={[{"rel": "property=\"og:site_name\"", "name": "property=\"og:title\"", "content": "Hisense USA"}, {"rel": "property=\"og:title\"", "name": "property=\"og:title\"", "content": "47-Decibel Top Control 24\" Built-In Dishwasher"}, {"rel": "property=\"og:description\"", "name": "property=\"og:description\"", "content": "47-Decibel Top Control 24\" Built-In Dishwasher"}, {"rel": "property=\"og:image\"", "name": "property=\"og:image\"", "content": "https://assets.hisense-usa.com/assets/GalleryImages/Product/278/e7a660ef50/Artboard-1__ScaleMaxHeightWzc1MF0.png"}, {"rel": "property=\"og:url\"", "name": "property=\"og:url\"", "content": "/products/47-decibel-top-control-24-built-in-dishwasher-hui6220xcus-hisense"}, {"rel": "property=\"og:locale\"", "name": "property=\"og:locale\"", "content": "en_US"}, {"rel": "property=\"og:type\"", "name": "property=\"og:type\"", "content": "website"}]}>
	      		<section>
		  		 { data && <Header pim={pim} data={data[0]}/> } { data && <ProductInfoAndSliderBox pim={pim} data={data[1]}/> } { data && <ProductCategoryBox pim={pim} data={data[2]}/> } { data && <ProductBigContent pim={pim} data={data[3]}/> } { data && <ImageBox pim={pim} data={data[4]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send cxm request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/168'
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
							'https://impim.dev-api.hisenseportal.com/api/cms/getProduct/1102'
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
	

	  export default Index168
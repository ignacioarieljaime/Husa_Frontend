
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const ProductInfoAndSliderBox = dynamic(() => import('components/page/Product/ProductInfoAndSliderBox'));const ProductCategoryBox = dynamic(() => import('components/page/Product/ProductCategoryBox'));const ProductImageBox = dynamic(() => import('components/page/Product/ProductImageBox'));const ProductBigContent = dynamic(() => import('components/page/Product/ProductBigContent'));const ProductNewsBox = dynamic(() => import('components/page/Product/ProductNewsBox'));const ProductDetailsBox = dynamic(() => import('components/page/Product/ProductDetailsBox'));const ProductReviewBox = dynamic(() => import('components/page/Product/ProductReviewBox'));const ProductFineMeInStore = dynamic(() => import('components/page/Product/ProductFineMeInStore'));const ProductResourceBox = dynamic(() => import('components/page/Product/ProductResourceBox'));const Subscribe = dynamic(() => import('components/common/Subscribe'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index152({pim,data}) {
	    return (
			<Layout meta={[{"rel": "blank", "name": "generator", "content": "\"SilverStripe"}, {"rel": "http-equiv", "name": "Content-Type", "content": "\"text/html;"}, {"rel": "blank", "name": "description", "content": "'U6H,"}, {"rel": "property=\"og:site_name\"", "name": "property=\"og:site_name\"", "content": "\"Hisense"}, {"rel": "property=\"og:title\"", "name": "property=\"og:title\"", "content": "'Hisense"}, {"rel": "property=\"og:locale\"", "name": "property=\"og:locale\"", "content": "\"en_US\""}, {"rel": "property=\"og:type\"", "name": "property=\"og:type\"", "content": "\"website\""}, {"rel": "property=\"og:url\"", "name": "property=\"og:url\"", "content": "\"https://www.hisense-usa.com/tv-and-audio/televisions/all-tvs/58U6HF_hisense-58-4k-uled-smart-fire-tv\""}, {"rel": "property=\"og:image\"", "name": "property=\"og:image\"", "content": "\"https://assets.hisense-usa.com/assets/GalleryImages/Product/429/a45b0c0c40/u6hf-v4_ScaleMaxWidthWzY0MF0.png\""}, {"rel": "property=\"og:description\"", "name": "property=\"og:description\"", "content": "'U6H,"}, {"rel": "http-equiv", "name": "X-UA-Compatible", "content": "\"IE=edge\""}, {"rel": "blank", "name": "viewport", "content": "\"width=device-width,"}, {"rel": "blank", "name": "apple-touch-fullscreen", "content": "\"yes\""}, {"rel": "blank", "name": "apple-mobile-web-app-capable", "content": "\"yes\""}]}>
	      		<section>
		  		 { data && <Header pim={pim} data={data[0]}/> } { data && <ProductInfoAndSliderBox pim={pim} data={data[1]}/> } { data && <ProductCategoryBox pim={pim} data={data[2]}/> } { data && <ProductImageBox pim={pim} data={data[3]}/> } { data && <ProductBigContent pim={pim} data={data[4]}/> } { data && <ProductImageBox pim={pim} data={data[5]}/> } { data && <ProductImageBox pim={pim} data={data[6]}/> } { data && <ProductNewsBox pim={pim} data={data[7]}/> } { data && <ProductNewsBox pim={pim} data={data[8]}/> } { data && <ProductImageBox pim={pim} data={data[9]}/> } { data && <ProductDetailsBox pim={pim} data={data[10]}/> } { data && <ProductReviewBox pim={pim} data={data[11]}/> } { data && <ProductFineMeInStore pim={pim} data={data[12]}/> } { data && <ProductResourceBox pim={pim} data={data[13]}/> } { data && <Subscribe pim={pim} data={data[14]}/> } { data && <Footer pim={pim} data={data[15]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send cxm request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/152'
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
							'https://impim.dev-api.hisenseportal.com/api/cms/getProduct/804'
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
	

	  export default Index152
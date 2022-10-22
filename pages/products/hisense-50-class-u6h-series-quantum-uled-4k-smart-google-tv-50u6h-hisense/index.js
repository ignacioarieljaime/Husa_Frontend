
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const ProductInfoAndSliderBox = dynamic(() => import('components/page/Product/ProductInfoAndSliderBox'));const ProductCategoryBox = dynamic(() => import('components/page/Product/ProductCategoryBox'));const ProductBigContent = dynamic(() => import('components/page/Product/ProductBigContent'));const ProductFineMeInStore = dynamic(() => import('components/page/Product/ProductFineMeInStore'));const ProductImageBox = dynamic(() => import('components/page/Product/ProductImageBox'));const ProductNewsBox = dynamic(() => import('components/page/Product/ProductNewsBox'));const ProductDetailsBox = dynamic(() => import('components/page/Product/ProductDetailsBox'));const ProductResourceBox = dynamic(() => import('components/page/Product/ProductResourceBox'));const ProductReviewBox = dynamic(() => import('components/page/Product/ProductReviewBox'));;const ProductTextWithImageBox = dynamic(() => import('components/page/Product/ProductTextWithImageBox'));const ProductTextWithIcon = dynamic(() => import('components/page/Product/ProductTextWithIcon'))

	function Index116({pim,data}) {
	    return (
			<Layout meta={[{"rel": "property=\"og:site_name\"", "name": "property=\"og:title\"", "content": "Hisense USA"}, {"rel": "property=\"og:title\"", "name": "property=\"og:title\"", "content": "Hisense 50\" Class U6H Series Quantum ULED 4K Smart Google TV"}, {"rel": "property=\"og:description\"", "name": "property=\"og:description\"", "content": "Hisense 50\" Class U6H Series Quantum ULED 4K Smart Google TV"}, {"rel": "property=\"og:image\"", "name": "property=\"og:image\"", "content": "https://assets.hisense-usa.com/assets/GalleryImages/Product/427/ccc5d70642/u6h__ScaleMaxHeightWzc1MF0.png"}, {"rel": "property=\"og:url\"", "name": "property=\"og:url\"", "content": "/products/hisense-50-class-u6h-series-quantum-uled-4k-smart-google-tv-50u6h-hisense"}, {"rel": "property=\"og:locale\"", "name": "property=\"og:locale\"", "content": "en_US"}, {"rel": "property=\"og:type\"", "name": "property=\"og:type\"", "content": "website"}]}>
	      		<section>
		  		 { data && <Header pim={pim} data={data[0]}/> } { data && <ProductInfoAndSliderBox pim={pim} data={data[1]}/> } { data && <ProductCategoryBox pim={pim} data={data[2]}/> } { data && <ProductBigContent pim={pim} data={data[3]}/> } { data && <ProductFineMeInStore pim={pim} data={data[4]}/> } { data && <ProductImageBox pim={pim} data={data[5]}/> } { data && <ProductNewsBox pim={pim} data={data[6]}/> } { data && <ProductDetailsBox pim={pim} data={data[7]}/> } { data && <ProductResourceBox pim={pim} data={data[8]}/> } { data && <ProductReviewBox pim={pim} data={data[9]}/> }     { data && <ProductTextWithImageBox pim={pim} data={data[14]}/> } { data && <ProductTextWithIcon pim={pim} data={data[15]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send cxm request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/116'
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
							'https://impim.dev-api.hisenseportal.com/api/cms/getProduct/810'
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
	

	  export default Index116
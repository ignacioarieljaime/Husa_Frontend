
	import Layout from "components/common/Layout/Layout";
	import axios from "axios";
	import { useState } from "react";
	import dynamic from "next/dynamic";

	  const Header = dynamic(() => import('components/common/Header/Header'));const ProductInfoAndSliderBox = dynamic(() => import('components/page/Product/ProductInfoAndSliderBox'));const ProductCategoryBox = dynamic(() => import('components/page/Product/ProductCategoryBox'));const ProductImageBox = dynamic(() => import('components/page/Product/ProductImageBox'));const ProductBigContent = dynamic(() => import('components/page/Product/ProductBigContent'));const ProductNewsBox = dynamic(() => import('components/page/Product/ProductNewsBox'));const ProductDetailsBox = dynamic(() => import('components/page/Product/ProductDetailsBox'));const ProductFineMeInStore = dynamic(() => import('components/page/Product/ProductFineMeInStore'));;const Subscribe = dynamic(() => import('components/common/Subscribe'));const Footer = dynamic(() => import('components/common/Footer'))

	function Index66({pim,data}) {
	    return (
			<Layout meta={[{"rel": null, "name": "test1", "content": "test1"}, {"rel": null, "name": "test2", "content": "test2"}]}>
	      		<section>
		  		 { data && <Header  data={data[0]}/> } { data && <ProductInfoAndSliderBox  data={data[1]}/> } { data && <ProductCategoryBox  data={data[2]}/> } { data && <ProductImageBox  data={data[3]}/> } { data && <ProductBigContent  data={data[4]}/> } { data && <ProductNewsBox  data={data[5]}/> } { data && <ProductDetailsBox  data={data[6]}/> } { data && <ProductFineMeInStore  data={data[7]}/> }  { data && <Subscribe  data={data[9]}/> } { data && <Footer  data={data[10]}/> }
				</section>
			</Layout>
	    )
	  }

	  export async function getServerSideProps(context) {
			console.log('send ssr request')
			let data = await axios
				.get(
					'https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/66'
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
	

	  export default Index66
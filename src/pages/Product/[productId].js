
	import Layout from "components/common/Layout/Layout" 
	  import ProductInfoAndSliderBox from 'components/Page/Product/ProductInfoAndSliderBox'; import ProductCategoryBox from 'components/Page/Product/ProductCategoryBox'; import ProductImageBox from 'components/Page/Product/ProductImageBox'; import ProductBigContent from 'components/Page/Product/ProductBigContent'; import ProductNewsBox from 'components/Page/Product/ProductNewsBox'; import ProductDetailsBox from 'components/Page/Product/ProductDetailsBox'; import ProductBottomImageBox from 'components/Page/Product/ProductBottomImageBox'; import ProductFineMeInStore from 'components/Page/Product/ProductFineMeInStore'; import ProductRecrossesBox from 'components/Page/Product/ProductRecrossesBox';

	  function Product() {
	    return (
			<Layout>
	      <section className={'tv-page'}> <ProductInfoAndSliderBox /> <ProductCategoryBox /> <ProductImageBox /> <ProductBigContent /> <ProductNewsBox /> <ProductDetailsBox /> <ProductBottomImageBox /> <ProductFineMeInStore /> <ProductRecrossesBox /></section>
		</Layout>
	    )
	  }

	  export default Product
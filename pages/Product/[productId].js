
	import Layout from "components/common/Layout/Layout"
	  import ProductInfoAndSliderBox from 'components/page/Product/ProductInfoAndSliderBox'; import ProductCategoryBox from 'components/page/Product/ProductCategoryBox'; import ProductImageBox from 'components/page/Product/ProductImageBox'; import ProductBigContent from 'components/page/Product/ProductBigContent'; import ProductNewsBox from 'components/page/Product/ProductNewsBox'; import ProductDetailsBox from 'components/page/Product/ProductDetailsBox'; import ProductBottomImageBox from 'components/page/Product/ProductBottomImageBox'; import ProductFineMeInStore from 'components/page/Product/ProductFineMeInStore'; import ProductRecrossesBox from 'components/page/Product/ProductRecrossesBox';

	  function Product() {
	    return (
			<Layout>
	      <section className={'tv-page'}> <ProductInfoAndSliderBox /> <ProductCategoryBox /> <ProductImageBox /> <ProductBigContent /> <ProductNewsBox /> <ProductDetailsBox /> <ProductBottomImageBox /> <ProductFineMeInStore /> <ProductRecrossesBox /></section>
		</Layout>
	    )
	  }

	  export default Product
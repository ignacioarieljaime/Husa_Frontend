
	import Layout from "components/common/Layout/Layout"
	  import ProductInfoAndSliderBox from 'components/page/Product/ProductInfoAndSliderBox'; import ProductSupportInfo from 'components/page/ProductSupport/ProductSupportInfo'; import NeedHelpBox from 'components/common/NeedHelpBox';

	  function ProductSupport() {
	    return (
			<Layout>
	      <section className={'product-support'}> <ProductInfoAndSliderBox /> <ProductSupportInfo /> <NeedHelpBox /></section>
		</Layout>
	    )
	  }

	  export default ProductSupport
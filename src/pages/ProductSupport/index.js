
	import Layout from "components/common/Layout/Layout"
	  import ProductInfoAndSliderBox from '@/components/Page/Product/ProductInfoAndSliderBox'; import ProductSupportInfo from '@/components/Page/ProductSupport/ProductSupportInfo'; import NeedHelpBox from '@/components/common/NeedHelpBox';

	  function ProductSupport() {
	    return (
			<Layout>
	      <section className={'product-support'}> <ProductInfoAndSliderBox /> <ProductSupportInfo /> <NeedHelpBox /></section>
		</Layout>
	    )
	  }

	  export default ProductSupport

	import Layout from "components/common/Layout/Layout"
	  import ProductSupportNewHead from 'components/page/ProductSupport/ProductSupportNewHead'; import ProductSupportNavBar from 'components/page/ProductSupport/ProductSupportNavBar'; import ProductSupportVideoBox from 'components/page/ProductSupport/ProductSupportVideoBox'; import ProductSupportFAQ from 'components/page/ProductSupport/ProductSupportFAQ'; import ProductSupportRegister from 'components/page/ProductSupport/ProductSupportRegister'; import ProductSupportReplacement from 'components/page/ProductSupport/ProductSupportReplacement'; import SupportNeedAssistance from 'components/page/Support/SupportNeedAssistance';

	  function ProductSupportNew() {
	    return (
			<Layout>
	      <section className={'product-support'}> <ProductSupportNewHead /> <ProductSupportNavBar /> <ProductSupportVideoBox /> <ProductSupportFAQ /> <ProductSupportRegister /> <ProductSupportReplacement /> <SupportNeedAssistance /></section>
		</Layout>
	    )
	  }

	  export default ProductSupportNew
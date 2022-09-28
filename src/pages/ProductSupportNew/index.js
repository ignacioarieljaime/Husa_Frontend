
	import Layout from "components/common/Layout/Layout"
	  import ProductSupportNewHead from 'components/Page/ProductSupport/ProductSupportNewHead'; import ProductSupportNavBar from 'components/Page/ProductSupport/ProductSupportNavBar'; import ProductSupportVideoBox from 'components/Page/ProductSupport/ProductSupportVideoBox'; import ProductSupportFAQ from 'components/Page/ProductSupport/ProductSupportFAQ'; import ProductSupportRegister from 'components/Page/ProductSupport/ProductSupportRegister'; import ProductSupportReplacement from 'components/Page/ProductSupport/ProductSupportReplacement'; import SupportNeedAssistance from 'components/Page/Support/SupportNeedAssistance';

	  function ProductSupportNew() {
	    return (
			<Layout>
	      <section className={'product-support'}> <ProductSupportNewHead /> <ProductSupportNavBar /> <ProductSupportVideoBox /> <ProductSupportFAQ /> <ProductSupportRegister /> <ProductSupportReplacement /> <SupportNeedAssistance /></section>
		</Layout>
	    )
	  }

	  export default ProductSupportNew
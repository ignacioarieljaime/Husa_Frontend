
	import Layout from "./../../components/common/Layout/Layout"
	  import SupportNewHead from './../../components/Page/Support/SupportNewHead'; import SupportNewCategoryBox from './../../components/Page/Support/SupportNewCategoryBox'; import SupportOurSupport from './../../components/Page/Support/SupportOurSupport'; import SupportNeedAssistance from './../../components/Page/Support/SupportNeedAssistance';

	  function SupportNew() {
	    return (
			<Layout>
	      <section className={'support new'}> <SupportNewHead /> <SupportNewCategoryBox /> <SupportOurSupport /> <SupportNeedAssistance /></section>
		</Layout>
	    )
	  }

	  export default SupportNew
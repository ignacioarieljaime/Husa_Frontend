
	import Layout from "./../../components/common/Layout/Layout"
	  import SupportNewHead from './../../components/page/Support/SupportNewHead'; import SupportNewCategoryBox from './../../components/page/Support/SupportNewCategoryBox'; import SupportOurSupport from './../../components/page/Support/SupportOurSupport'; import SupportNeedAssistance from './../../components/page/Support/SupportNeedAssistance';

	  function SupportNew() {
	    return (
			<Layout>
	      <section className={'support new'}> <SupportNewHead /> <SupportNewCategoryBox /> <SupportOurSupport /> <SupportNeedAssistance /></section>
		</Layout>
	    )
	  }

	  export default SupportNew
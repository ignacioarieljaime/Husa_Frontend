
	import Layout from "./../../components/common/Layout/Layout"
	  import SupportHeadIntro from './../../components/page/Support/SupportHeadIntro'; import SupportCovidBox from './../../components/page/Support/SupportCovidBox'; import SupportCategoryBox from './../../components/page/Support/SupportCategoryBox'; import NeedHelpBox from './../../components/common/NeedHelpBox';

	  function Support() {
	    return (
			<Layout>
	      <section className={'support'}> <SupportHeadIntro /> <SupportCovidBox /> <SupportCategoryBox /> <NeedHelpBox /></section>
		</Layout>
	    )
	  }

	  export default Support
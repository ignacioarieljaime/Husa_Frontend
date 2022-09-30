
	import Layout from "components/common/Layout/Layout"
	  import SupportHeadIntro from 'components/Page/Support/SupportHeadIntro'; import SupportCovidBox from 'components/Page/Support/SupportCovidBox'; import SupportCategoryBox from 'components/Page/Support/SupportCategoryBox'; import NeedHelpBox from 'components/common/NeedHelpBox';

	  function Support() {
	    return (
			<Layout>
	      <section className={'support'}> <SupportHeadIntro /> <SupportCovidBox /> <SupportCategoryBox /> <NeedHelpBox /></section>
		</Layout>
	    )
	  }

	  export default Support
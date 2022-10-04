
	import Layout from "components/common/Layout/Layout"
	  import SmartInfoHead from '@/components/Page/SmartInfo/SmartInfoHead'; import SmartInfoTvsBox from '@/components/Page/SmartInfo/SmartInfoTvsBox'; import SmartInfoTextBox from '@/components/Page/SmartInfo/SmartInfoTextBox'; import ImageBox from '@/components/common/ImageBox'; import SmartInfoTextAndImageBox from '@/components/Page/SmartInfo/SmartInfoTextAndImageBox'; import SmartInfoInteractBox from '@/components/Page/SmartInfo/SmartInfoInteractBox'; import SmartInfoFindHisense from '@/components/Page/SmartInfo/SmartInfoFindHisense'; import SmartInfoBetterNewOrOldBox from '@/components/Page/SmartInfo/SmartInfoBetterNewOrOldBox';

	  function SmartInfo() {
	    return (
			<Layout>
	      <section className={'smart-tv-platforms'}> <SmartInfoHead /> <SmartInfoTvsBox /> <SmartInfoTextBox /> <ImageBox /> <SmartInfoTextAndImageBox /> <SmartInfoInteractBox /> <SmartInfoFindHisense /> <SmartInfoBetterNewOrOldBox /></section>
		</Layout>
	    )
	  }

	  export default SmartInfo
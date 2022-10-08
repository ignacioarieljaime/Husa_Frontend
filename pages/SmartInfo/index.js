
	import Layout from "components/common/Layout/Layout"
	  import SmartInfoHead from 'components/page/SmartInfo/SmartInfoHead'; import SmartInfoTvsBox from 'components/page/SmartInfo/SmartInfoTvsBox'; import SmartInfoTextBox from 'components/page/SmartInfo/SmartInfoTextBox'; import ImageBox from 'components/common/ImageBox'; import SmartInfoTextAndImageBox from 'components/page/SmartInfo/SmartInfoTextAndImageBox'; import SmartInfoInteractBox from 'components/page/SmartInfo/SmartInfoInteractBox'; import SmartInfoFindHisense from 'components/page/SmartInfo/SmartInfoFindHisense'; import SmartInfoBetterNewOrOldBox from 'components/page/SmartInfo/SmartInfoBetterNewOrOldBox';

	  function SmartInfo() {
	    return (
			<Layout>
	      <section className={'smart-tv-platforms'}> <SmartInfoHead /> <SmartInfoTvsBox /> <SmartInfoTextBox /> <ImageBox /> <SmartInfoTextAndImageBox /> <SmartInfoInteractBox /> <SmartInfoFindHisense /> <SmartInfoBetterNewOrOldBox /></section>
		</Layout>
	    )
	  }

	  export default SmartInfo
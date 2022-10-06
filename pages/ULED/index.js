
	import Layout from "./../../components/common/Layout/Layout"
	  import ULEDHead from './../../components/page/ULED/ULEDHead'; import ULEDProducts from './../../components/page/ULED/ULEDProducts'; import ULEDTextBox from './../../components/page/ULED/ULEDTextBox'; import ULEDImageBoxWithBtn from './../../components/page/ULED/ULEDImageBoxWithBtn'; import ULEDAllTech from './../../components/page/ULED/ULEDAllTech'; import ImageBox from './../../components/common/ImageBox'; import ULEDImageAndTextBox from './../../components/page/ULED/ULEDImageAndTextBox'; import ULEDGreatTvTextBox from './../../components/page/ULED/ULEDGreatTvTextBox'; import SmartInfoBetterNewOrOldBox from './../../components/page/SmartInfo/SmartInfoBetterNewOrOldBox';

	  function ULED() {
	    return (
			<Layout>
	      <section className={'uled-4k'}> <ULEDHead /> <ULEDProducts /> <ULEDTextBox /> <ULEDImageBoxWithBtn /> <ULEDAllTech /> <ImageBox /> <ULEDImageAndTextBox /> <ULEDGreatTvTextBox /> <SmartInfoBetterNewOrOldBox /></section>
		</Layout>
	    )
	  }

	  export default ULED
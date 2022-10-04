
	import Layout from "components/common/Layout/Layout"
	  import ULEDHead from '@/components/Page/ULED/ULEDHead'; import ULEDProducts from '@/components/Page/ULED/ULEDProducts'; import ULEDTextBox from '@/components/Page/ULED/ULEDTextBox'; import ULEDImageBoxWithBtn from '@/components/Page/ULED/ULEDImageBoxWithBtn'; import ULEDAllTech from '@/components/Page/ULED/ULEDAllTech'; import ImageBox from '@/components/common/ImageBox'; import ULEDImageAndTextBox from '@/components/Page/ULED/ULEDImageAndTextBox'; import ULEDGreatTvTextBox from '@/components/Page/ULED/ULEDGreatTvTextBox'; import SmartInfoBetterNewOrOldBox from '@/components/Page/SmartInfo/SmartInfoBetterNewOrOldBox';

	  function ULED() {
	    return (
			<Layout>
	      <section className={'uled-4k'}> <ULEDHead /> <ULEDProducts /> <ULEDTextBox /> <ULEDImageBoxWithBtn /> <ULEDAllTech /> <ImageBox /> <ULEDImageAndTextBox /> <ULEDGreatTvTextBox /> <SmartInfoBetterNewOrOldBox /></section>
		</Layout>
	    )
	  }

	  export default ULED
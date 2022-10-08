
	import Layout from "components/common/Layout/Layout"
	  import CESHomeNavBar from 'components/page/CES/HomeApplication/CESHomeNavBar'; import ImageBox from 'components/common/ImageBox'; import CESLasterLearnMore from 'components/page/CES/Laster/CESLasterLearnMore'; import CESHomeImageAndText from 'components/page/CES/HomeApplication/CESHomeImageAndText'; import ImageBoxWithPaddingAndBgBlack from 'components/page/CES/Laster/ImageBoxWithPaddingAndBgBlack'; import CEOLasterLikeBox from 'components/page/CES/Laster/CEOLasterLikeBox';

	  function CESLaster() {
	    return (
			<Layout>
	      <section className={'ces smart-tv'}> <CESHomeNavBar /> <ImageBox /> <CESLasterLearnMore /> <CESHomeImageAndText /> <ImageBoxWithPaddingAndBgBlack /> <CEOLasterLikeBox /></section>
		</Layout>
	    )
	  }

	  export default CESLaster
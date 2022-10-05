
	import Layout from "./../../components/common/Layout/Layout"
	  import CESHomeNavBar from './../../components/Page/CES/HomeApplication/CESHomeNavBar'; import ImageBox from './../../components/common/ImageBox'; import CESLasterLearnMore from './../../components/Page/CES/Laster/CESLasterLearnMore'; import CESHomeImageAndText from './../../components/Page/CES/HomeApplication/CESHomeImageAndText'; import ImageBoxWithPaddingAndBgBlack from './../../components/Page/CES/Laster/ImageBoxWithPaddingAndBgBlack'; import CEOLasterLikeBox from './../../components/Page/CES/Laster/CEOLasterLikeBox';

	  function CESLaster() {
	    return (
			<Layout>
	      <section className={'ces smart-tv'}> <CESHomeNavBar /> <ImageBox /> <CESLasterLearnMore /> <CESHomeImageAndText /> <ImageBoxWithPaddingAndBgBlack /> <CEOLasterLikeBox /></section>
		</Layout>
	    )
	  }

	  export default CESLaster
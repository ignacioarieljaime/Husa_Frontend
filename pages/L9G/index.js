
	import Layout from "./../../components/common/Layout/Layout"
	  import HeroBanner from './../../components/Page/L9G/HeroBanner'; import ScrollableVideo from './../../components/Page/L9G/ScrollableVideo'; import PureColor from './../../components/Page/L9G/PureColor'; import ColorFeature from './../../components/Page/L9G/ColorFeature'; import LumensOfBrightness from './../../components/Page/L9G/LumensOfBrightness'; import SmoothMotion from './../../components/Page/L9G/SmoothMotion'; import ScreenSize from './../../components/Page/L9G/ScreenSize'; import LightRejection from './../../components/Page/L9G/LightRejection'; import DolbyVision from './../../components/Page/L9G/DolbyVision'; import DolbyAtmos from './../../components/Page/L9G/DolbyAtmos'; import FineTouches from './../../components/Page/L9G/FineTouches'; import AndroidTv from './../../components/Page/L9G/AndroidTv'; import FeatureBlocks from './../../components/Page/L9G/FeatureBlocks'; import Awards from './../../components/Page/L9G/Awards'; import Comments from './../../components/Page/L9G/Comments'; import FAQs from './../../components/Page/L9G/FAQs'; import Specs from './../../components/Page/L9G/Specs'; import Resources from './../../components/Page/L9G/Resources';

	  function L9G() {
	    return (
			<Layout>
	      <section className={'l9g'}> <HeroBanner /> <ScrollableVideo /> <PureColor /> <ColorFeature /> <LumensOfBrightness /> <SmoothMotion /> <ScreenSize /> <LightRejection /> <DolbyVision /> <DolbyAtmos /> <FineTouches /> <AndroidTv /> <FeatureBlocks /> <Awards /> <Comments /> <FAQs /> <Specs /> <Resources /></section>
		</Layout>
	    )
	  }

	  export default L9G
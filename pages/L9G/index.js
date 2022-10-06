
	import Layout from "./../../components/common/Layout/Layout"
	  import HeroBanner from './../../components/page/L9G/HeroBanner'; import ScrollableVideo from './../../components/page/L9G/ScrollableVideo'; import PureColor from './../../components/page/L9G/PureColor'; import ColorFeature from './../../components/page/L9G/ColorFeature'; import LumensOfBrightness from './../../components/page/L9G/LumensOfBrightness'; import SmoothMotion from './../../components/page/L9G/SmoothMotion'; import ScreenSize from './../../components/page/L9G/ScreenSize'; import LightRejection from './../../components/page/L9G/LightRejection'; import DolbyVision from './../../components/page/L9G/DolbyVision'; import DolbyAtmos from './../../components/page/L9G/DolbyAtmos'; import FineTouches from './../../components/page/L9G/FineTouches'; import AndroidTv from './../../components/page/L9G/AndroidTv'; import FeatureBlocks from './../../components/page/L9G/FeatureBlocks'; import Awards from './../../components/page/L9G/Awards'; import Comments from './../../components/page/L9G/Comments'; import FAQs from './../../components/page/L9G/FAQs'; import Specs from './../../components/page/L9G/Specs'; import Resources from './../../components/page/L9G/Resources';

	  function L9G() {
	    return (
			<Layout>
	      <section className={'l9g'}> <HeroBanner /> <ScrollableVideo /> <PureColor /> <ColorFeature /> <LumensOfBrightness /> <SmoothMotion /> <ScreenSize /> <LightRejection /> <DolbyVision /> <DolbyAtmos /> <FineTouches /> <AndroidTv /> <FeatureBlocks /> <Awards /> <Comments /> <FAQs /> <Specs /> <Resources /></section>
		</Layout>
	    )
	  }

	  export default L9G
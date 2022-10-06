
	import Layout from "./../../components/common/Layout/Layout"
	  import PDPProductInfoSliderAndText from './../../components/page/PDP/PDPProductInfoSliderAndText'; import PDPNavBar from './../../components/page/PDP/PDPNavBar'; import PDPImageAndInfoGrayBg from './../../components/page/PDP/PDPImageAndInfoGrayBg'; import PDPVideoBox from './../../components/page/PDP/PDPVideoBox'; import PDPImageAndInfoLightGrayBg from './../../components/page/PDP/PDPImageAndInfoLightGrayBg'; import PDPImageAndInfoDarkBg from './../../components/page/PDP/PDPImageAndInfoDarkBg'; import PDMImageAndInfoSilverBg from './../../components/page/PDP/PDMImageAndInfoSilverBg'; import PDPTopFeatures from './../../components/page/PDP/PDPTopFeatures'; import PDPDescriptionSliderWithDarkGray from './../../components/page/PDP/PDPDescriptionSliderWithDarkGray'; import PDPTextAndLongImageBox from './../../components/page/PDP/PDPTextAndLongImageBox'; import PDPReviewsAndAwards from './../../components/page/PDP/PDPReviewsAndAwards'; import PDPReadyToBuyBox from './../../components/page/PDP/PDPReadyToBuyBox'; import PDPChooseULEDTvBox from './../../components/page/PDP/PDPChooseULEDTvBox';

	  function PDP() {
	    return (
			<Layout>
	      <section className={'pdp'}> <PDPProductInfoSliderAndText /> <PDPNavBar /> <PDPImageAndInfoGrayBg /> <PDPVideoBox /> <PDPImageAndInfoLightGrayBg /> <PDPImageAndInfoDarkBg /> <PDPImageAndInfoLightGrayBg /> <PDPVideoBox /> <PDPImageAndInfoLightGrayBg /> <PDMImageAndInfoSilverBg /> <PDPTopFeatures /> <PDPDescriptionSliderWithDarkGray /> <PDPTextAndLongImageBox /> <PDPReviewsAndAwards /> <PDPReadyToBuyBox /> <PDPChooseULEDTvBox /></section>
		</Layout>
	    )
	  }

	  export default PDP
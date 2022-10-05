
	import Layout from "./../../components/common/Layout/Layout"
	  import PDPProductInfoSliderAndText from './../../components/Page/PDP/PDPProductInfoSliderAndText'; import PDPNavBar from './../../components/Page/PDP/PDPNavBar'; import PDPImageAndInfoGrayBg from './../../components/Page/PDP/PDPImageAndInfoGrayBg'; import PDPVideoBox from './../../components/Page/PDP/PDPVideoBox'; import PDPImageAndInfoLightGrayBg from './../../components/Page/PDP/PDPImageAndInfoLightGrayBg'; import PDPImageAndInfoDarkBg from './../../components/Page/PDP/PDPImageAndInfoDarkBg'; import PDMImageAndInfoSilverBg from './../../components/Page/PDP/PDMImageAndInfoSilverBg'; import PDPTopFeatures from './../../components/Page/PDP/PDPTopFeatures'; import PDPDescriptionSliderWithDarkGray from './../../components/Page/PDP/PDPDescriptionSliderWithDarkGray'; import PDPTextAndLongImageBox from './../../components/Page/PDP/PDPTextAndLongImageBox'; import PDPReviewsAndAwards from './../../components/Page/PDP/PDPReviewsAndAwards'; import PDPReadyToBuyBox from './../../components/Page/PDP/PDPReadyToBuyBox'; import PDPChooseULEDTvBox from './../../components/Page/PDP/PDPChooseULEDTvBox';

	  function PDP() {
	    return (
			<Layout>
	      <section className={'pdp'}> <PDPProductInfoSliderAndText /> <PDPNavBar /> <PDPImageAndInfoGrayBg /> <PDPVideoBox /> <PDPImageAndInfoLightGrayBg /> <PDPImageAndInfoDarkBg /> <PDPImageAndInfoLightGrayBg /> <PDPVideoBox /> <PDPImageAndInfoLightGrayBg /> <PDMImageAndInfoSilverBg /> <PDPTopFeatures /> <PDPDescriptionSliderWithDarkGray /> <PDPTextAndLongImageBox /> <PDPReviewsAndAwards /> <PDPReadyToBuyBox /> <PDPChooseULEDTvBox /></section>
		</Layout>
	    )
	  }

	  export default PDP
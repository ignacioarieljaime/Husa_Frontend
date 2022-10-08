
	import Layout from "components/common/Layout/Layout"
	  import HeaderGoogleTv from 'components/page/Day100/HeaderGoogleTv'; import HeaderBanner from 'components/page/Day100/HeaderBanner'; import ClaimPrize from 'components/page/Day100/ClaimPrize'; import DoubleWarranty from 'components/page/Day100/DoubleWarranty'; import EligibleModels from 'components/page/Day100/EligibleModels'; import ExpertsAdv from 'components/page/Day100/ExpertsAdv'; import DigitalTrends from 'components/page/Day100/DigitalTrends'; import FeatureBadges from 'components/page/Day100/FeatureBadges'; import Guarantee from 'components/page/Day100/Guarantee';

	  function Day100() {
	    return (
			<Layout>
	      <section className={'day-100'}> <HeaderGoogleTv /> <HeaderBanner /> <ClaimPrize /> <DoubleWarranty /> <EligibleModels /> <ExpertsAdv /> <DigitalTrends /> <FeatureBadges /> <Guarantee /></section>
		</Layout>
	    )
	  }

	  export default Day100
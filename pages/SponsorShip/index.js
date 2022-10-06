
	import Layout from "./../../components/common/Layout/Layout"
	  import ImageBox from './../../components/common/ImageBox'; import SponsorshipDescriptionGrayBg from './../../components/page/Sponsorship/SponsorshipDescriptionGrayBg'; import SponsorshipTextGradient from './../../components/page/Sponsorship/SponsorshipTextGradient'; import SponsorshipTitleBox from './../../components/page/Sponsorship/SponsorshipTitleBox'; import SponsorshipVideoAndTextBox from './../../components/page/Sponsorship/SponsorshipVideoAndTextBox'; import SponsorshipBigImageAndText from './../../components/page/Sponsorship/SponsorshipBigImageAndText'; import SponsorshipImagesWithButton from './../../components/page/Sponsorship/SponsorshipImagesWithButton'; import SponsorImageAndText from './../../components/page/Sponsorship/SponsorImageAndText'; import SponsorImageAndLogo from './../../components/page/Sponsorship/SponsorImageAndLogo';

	  function SponsorShip() {
	    return (
			<Layout>
	      <section className={'sponsership'}> <ImageBox /> <SponsorshipDescriptionGrayBg /> <SponsorshipTextGradient /> <SponsorshipTitleBox /> <SponsorshipVideoAndTextBox /> <SponsorshipBigImageAndText /> <SponsorshipImagesWithButton /> <SponsorshipTextGradient /> <SponsorshipTitleBox /> <SponsorImageAndText /> <SponsorImageAndLogo /></section>
		</Layout>
	    )
	  }

	  export default SponsorShip
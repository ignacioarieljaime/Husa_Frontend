
	import Layout from "components/common/Layout/Layout"
	  import ImageBox from 'components/common/ImageBox'; import SponsorshipDescriptionGrayBg from 'components/Page/Sponsorship/SponsorshipDescriptionGrayBg'; import SponsorshipTextGradient from 'components/Page/Sponsorship/SponsorshipTextGradient'; import SponsorshipTitleBox from 'components/Page/Sponsorship/SponsorshipTitleBox'; import SponsorshipVideoAndTextBox from 'components/Page/Sponsorship/SponsorshipVideoAndTextBox'; import SponsorshipBigImageAndText from 'components/Page/Sponsorship/SponsorshipBigImageAndText'; import SponsorshipImagesWithButton from 'components/Page/Sponsorship/SponsorshipImagesWithButton'; import SponsorImageAndText from 'components/Page/Sponsorship/SponsorImageAndText'; import SponsorImageAndLogo from 'components/Page/Sponsorship/SponsorImageAndLogo';

	  function SponsorShip() {
	    return (
			<Layout>
	      <section className={'sponsership'}> <ImageBox /> <SponsorshipDescriptionGrayBg /> <SponsorshipTextGradient /> <SponsorshipTitleBox /> <SponsorshipVideoAndTextBox /> <SponsorshipBigImageAndText /> <SponsorshipImagesWithButton /> <SponsorshipTextGradient /> <SponsorshipTitleBox /> <SponsorImageAndText /> <SponsorImageAndLogo /></section>
		</Layout>
	    )
	  }

	  export default SponsorShip
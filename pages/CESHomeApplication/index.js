
	import Layout from "components/common/Layout/Layout"
	  import CESHomeNavBar from 'components/page/CES/HomeApplication/CESHomeNavBar'; import CESHomeIntro from 'components/page/CES/HomeApplication/CESHomeIntro'; import CESHomeImageAndText from 'components/page/CES/HomeApplication/CESHomeImageAndText'; import ImageBox from 'components/common/ImageBox';

	  function CESHomeApplication() {
	    return (
			<Layout>
	      <section className={'ces home-appliances'}> <CESHomeNavBar /> <CESHomeIntro /> <CESHomeImageAndText /> <CESHomeImageAndText /> <CESHomeImageAndText /> <CESHomeImageAndText /> <ImageBox /> <CESHomeImageAndText /></section>
		</Layout>
	    )
	  }

	  export default CESHomeApplication
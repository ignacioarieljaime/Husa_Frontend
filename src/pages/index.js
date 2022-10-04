
	import Layout from "components/common/Layout/Layout"
	  import LandingSlider from 'components/page/Landing/LandingSlider'; import LandingProductsBox from 'components/page/Landing/LandingProductsBox'; import LandingVideoPlayer from 'components/Page/Landing/LandingVideoPlayer.js';

	  function Home() {
	    return (
			<Layout>
	      <section className={'home'}> <LandingSlider /> <LandingProductsBox /> <LandingVideoPlayer /></section>
		</Layout>
	    )
	  }

	  export default Home
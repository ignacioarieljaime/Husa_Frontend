
	  import Header from 'components/common/Header/Header'; import LandingSlider from 'components/page/Landing/LandingSlider'; import LandingProductsBox from 'components/page/Landing/LandingProductsBox'; import LandingVideoPlayer from 'components/Page/Landing/LandingVideoPlayer.js'; import SendNewsToEmailBox from 'components/common/SendNewsToEmailBox'; import Footer from 'components/common/Footer';

	  function Home() {
	    return (
	      <section className={'home'}> <Header /> <LandingSlider /> <LandingProductsBox /> <LandingVideoPlayer /> <SendNewsToEmailBox /> <Footer /></section>
	    )
	  }

	  export default Home
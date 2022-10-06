
	import Layout from "./../../components/common/Layout/Layout"
	  import TvAndAudioHead from './../../components/page/TvAndAudio/TvAndAudioHead'; import TvAndAudioTvShopBox from './../../components/page/TvAndAudio/TvAndAudioTvShopBox'; import TvAndAudioIntro from './../../components/page/TvAndAudio/TvAndAudioIntro'; import ImageBox from './../../components/common/ImageBox'; import TvAndAudioLasterIntro from './../../components/page/TvAndAudio/TvAndAudioLasterIntro'; import TvAndAudioSmartChoice from './../../components/page/TvAndAudio/TvAndAudioSmartChoice'; import TvAndAudioFineHisense from './../../components/page/TvAndAudio/TvAndAudioFineHisense'; import TvAndAudioFindProduct from './../../components/page/TvAndAudio/TvAndAudioFindProduct';

	  function TvAndAudio() {
	    return (
			<Layout>
	      <section className={'tv-and-audio'}> <TvAndAudioHead /> <TvAndAudioTvShopBox /> <TvAndAudioIntro /> <ImageBox /> <TvAndAudioLasterIntro /> <ImageBox /> <TvAndAudioSmartChoice /> <TvAndAudioFineHisense /> <TvAndAudioFindProduct /></section>
		</Layout>
	    )
	  }

	  export default TvAndAudio
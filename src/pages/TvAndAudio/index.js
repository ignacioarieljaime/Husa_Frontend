
	import Layout from "components/common/Layout/Layout"
	  import TvAndAudioHead from '@/components/Page/TvAndAudio/TvAndAudioHead'; import TvAndAudioTvShopBox from '@/components/Page/TvAndAudio/TvAndAudioTvShopBox'; import TvAndAudioIntro from '@/components/Page/TvAndAudio/TvAndAudioIntro'; import ImageBox from '@/components/common/ImageBox'; import TvAndAudioLasterIntro from '@/components/Page/TvAndAudio/TvAndAudioLasterIntro'; import TvAndAudioSmartChoice from '@/components/Page/TvAndAudio/TvAndAudioSmartChoice'; import TvAndAudioFineHisense from '@/components/Page/TvAndAudio/TvAndAudioFineHisense'; import TvAndAudioFindProduct from '@/components/Page/TvAndAudio/TvAndAudioFindProduct';

	  function TvAndAudio() {
	    return (
			<Layout>
	      <section className={'tv-and-audio'}> <TvAndAudioHead /> <TvAndAudioTvShopBox /> <TvAndAudioIntro /> <ImageBox /> <TvAndAudioLasterIntro /> <ImageBox /> <TvAndAudioSmartChoice /> <TvAndAudioFineHisense /> <TvAndAudioFindProduct /></section>
		</Layout>
	    )
	  }

	  export default TvAndAudio
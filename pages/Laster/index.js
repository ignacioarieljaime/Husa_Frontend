
	import Layout from "./../../components/common/Layout/Layout"
	  import LasterHead from './../../components/Page/Laster/LasterHead'; import ImageBox from './../../components/common/ImageBox'; import CommercialIntro from './../../components/Page/Commercial/CommercialIntro'; import LasterImageAndTextBox from './../../components/Page/Laster/LasterImageAndTextBox'; import LasterTitleAndSubTitleBox from './../../components/Page/Laster/LasterTitleAndSubTitleBox'; import UHDNewsBox from './../../components/Page/UHD/UHDNewsBox'; import LasterFinedWithImage from './../../components/Page/Laster/LasterFinedWithImage';

	  function Laster() {
	    return (
			<Layout>
	      <section className={'laser-tv'}> <LasterHead /> <ImageBox /> <CommercialIntro /> <ImageBox /> <LasterImageAndTextBox /> <ImageBox /> <LasterTitleAndSubTitleBox /> <LasterImageAndTextBox /> <UHDNewsBox /> <LasterFinedWithImage /> <ImageBox /></section>
		</Layout>
	    )
	  }

	  export default Laster
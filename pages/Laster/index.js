
	import Layout from "./../../components/common/Layout/Layout"
	  import LasterHead from './../../components/page/Laster/LasterHead'; import ImageBox from './../../components/common/ImageBox'; import CommercialIntro from './../../components/page/Commercial/CommercialIntro'; import LasterImageAndTextBox from './../../components/page/Laster/LasterImageAndTextBox'; import LasterTitleAndSubTitleBox from './../../components/page/Laster/LasterTitleAndSubTitleBox'; import UHDNewsBox from './../../components/page/UHD/UHDNewsBox'; import LasterFinedWithImage from './../../components/page/Laster/LasterFinedWithImage';

	  function Laster() {
	    return (
			<Layout>
	      <section className={'laser-tv'}> <LasterHead /> <ImageBox /> <CommercialIntro /> <ImageBox /> <LasterImageAndTextBox /> <ImageBox /> <LasterTitleAndSubTitleBox /> <LasterImageAndTextBox /> <UHDNewsBox /> <LasterFinedWithImage /> <ImageBox /></section>
		</Layout>
	    )
	  }

	  export default Laster
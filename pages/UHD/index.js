
	import Layout from "components/common/Layout/Layout"
	  import UHDIntro from 'components/page/UHD/UHDIntro'; import ImageBox from 'components/common/ImageBox'; import UHDNewsBox from 'components/page/UHD/UHDNewsBox'; import UHDAbilityBox from 'components/page/UHD/UHDAbilityBox'; import UHDFindTv from 'components/page/UHD/UHDFindTv';

	  function UHD() {
	    return (
			<Layout>
	      <section className={'uhd-4k'}> <UHDIntro /> <ImageBox /> <UHDNewsBox /> <ImageBox /> <UHDAbilityBox /> <UHDFindTv /></section>
		</Layout>
	    )
	  }

	  export default UHD
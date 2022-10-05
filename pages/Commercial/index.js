
	import Layout from "./../../components/common/Layout/Layout"
	  import CommercialIntro from './../../components/Page/Commercial/CommercialIntro'; import ImageBox from './../../components/common/ImageBox'; import CommercialTowImageBox from './../../components/Page/Commercial/CommercialTowImageBox'; import CommercialBecomeAPartner from './../../components/Page/Commercial/CommercialBecomeAPartner';

	  function Commercial() {
	    return (
			<Layout>
	      <section className={'commercial'}> <CommercialIntro /> <ImageBox /> <CommercialIntro /> <CommercialTowImageBox /> <ImageBox /> <CommercialBecomeAPartner /></section>
		</Layout>
	    )
	  }

	  export default Commercial
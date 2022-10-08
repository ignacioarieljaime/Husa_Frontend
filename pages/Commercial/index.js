
	import Layout from "components/common/Layout/Layout"
	  import CommercialIntro from 'components/page/Commercial/CommercialIntro'; import ImageBox from 'components/common/ImageBox'; import CommercialTowImageBox from 'components/page/Commercial/CommercialTowImageBox'; import CommercialBecomeAPartner from 'components/page/Commercial/CommercialBecomeAPartner';

	  function Commercial() {
	    return (
			<Layout>
	      <section className={'commercial'}> <CommercialIntro /> <ImageBox /> <CommercialIntro /> <CommercialTowImageBox /> <ImageBox /> <CommercialBecomeAPartner /></section>
		</Layout>
	    )
	  }

	  export default Commercial
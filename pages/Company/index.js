
	import Layout from "components/common/Layout/Layout"
	  import CompanyHeaderIntro from 'components/page/Company/CompanyHeaderIntro'; import CompanyNavBar from 'components/page/Company/CompanyNavBar'; import CompanyInfo from 'components/page/Company/CompanyInfo';

	  function Company() {
	    return (
			<Layout>
	      <section className={'company'}> <CompanyHeaderIntro /> <CompanyNavBar /> <CompanyInfo /></section>
		</Layout>
	    )
	  }

	  export default Company
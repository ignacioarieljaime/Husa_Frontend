
	import Layout from "components/common/Layout/Layout"
	  import CompanyHeaderIntro from 'components/Page/Company/CompanyHeaderIntro'; import CompanyNavBar from 'components/Page/Company/CompanyNavBar'; import CompanyInfo from 'components/Page/Company/CompanyInfo';

	  function Company() {
	    return (
			<Layout>
	      <section className={'company'}> <CompanyHeaderIntro /> <CompanyNavBar /> <CompanyInfo /></section>
		</Layout>
	    )
	  }

	  export default Company
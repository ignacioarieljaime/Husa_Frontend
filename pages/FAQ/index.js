
	import Layout from "./../../components/common/Layout/Layout"
	  import FAQHead from './../../components/page/FAQ/FAQHead'; import FAQContentBox from './../../components/page/FAQ/FAQContentBox';

	  function FAQ() {
	    return (
			<Layout>
	      <section className={'faq'}> <FAQHead /> <FAQContentBox /></section>
		</Layout>
	    )
	  }

	  export default FAQ
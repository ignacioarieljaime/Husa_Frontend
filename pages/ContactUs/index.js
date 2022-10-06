
	import Layout from "./../../components/common/Layout/Layout"
	  import ContactUsHead from './../../components/page/ContactUs/ContactUsHead'; import ContactUsForm from './../../components/page/ContactUs/ContactUsForm';

	  function ContactUs() {
	    return (
			<Layout>
	      <section className={'contact'}> <ContactUsHead /> <ContactUsForm /></section>
		</Layout>
	    )
	  }

	  export default ContactUs
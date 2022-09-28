
	import Layout from "components/common/Layout/Layout"
	  import ContactUsHead from 'components/Page/ContactUs/ContactUsHead'; import ContactUsForm from 'components/Page/ContactUs/ContactUsForm';

	  function ContactUs() {
	    return (
			<Layout>
	      <section className={'contact'}> <ContactUsHead /> <ContactUsForm /></section>
		</Layout>
	    )
	  }

	  export default ContactUs
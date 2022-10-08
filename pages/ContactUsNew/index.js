
	import Layout from "components/common/Layout/Layout"
	  import ContactUsNewHead from 'components/page/ContactUs/ContactUsNewHead'; import ContactUsNewForm from 'components/page/ContactUs/ContactUsNewForm'; import ContactUsPhoneUs from 'components/page/ContactUs/ContactUsPhoneUs';

	  function ContactUsNew() {
	    return (
			<Layout>
	      <section className={'new contact'}> <ContactUsNewHead /> <ContactUsNewForm /> <ContactUsPhoneUs /></section>
		</Layout>
	    )
	  }

	  export default ContactUsNew
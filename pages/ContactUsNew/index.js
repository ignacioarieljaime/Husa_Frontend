
	import Layout from "./../../components/common/Layout/Layout"
	  import ContactUsNewHead from './../../components/Page/ContactUs/ContactUsNewHead'; import ContactUsNewForm from './../../components/Page/ContactUs/ContactUsNewForm'; import ContactUsPhoneUs from './../../components/Page/ContactUs/ContactUsPhoneUs';

	  function ContactUsNew() {
	    return (
			<Layout>
	      <section className={'new contact'}> <ContactUsNewHead /> <ContactUsNewForm /> <ContactUsPhoneUs /></section>
		</Layout>
	    )
	  }

	  export default ContactUsNew
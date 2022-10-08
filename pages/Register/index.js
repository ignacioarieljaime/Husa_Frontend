
	import Layout from "components/common/Layout/Layout"
	  import SupportNewHead from 'components/page/Support/SupportNewHead'; import RegisterForm from 'components/page/Register/RegisterForm';

	  function Register() {
	    return (
			<Layout>
	      <section className={'register'}> <SupportNewHead /> <RegisterForm /></section>
		</Layout>
	    )
	  }

	  export default Register
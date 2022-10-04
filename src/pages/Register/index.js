
	import Layout from "components/common/Layout/Layout"
	  import SupportNewHead from '@/components/Page/Support/SupportNewHead'; import RegisterForm from '@/components/Page/Register/RegisterForm';

	  function Register() {
	    return (
			<Layout>
	      <section className={'register'}> <SupportNewHead /> <RegisterForm /></section>
		</Layout>
	    )
	  }

	  export default Register
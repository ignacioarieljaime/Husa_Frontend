const GenerateRedirectPage = _page => {
	return `
	import {  useEffect } from "react";
	import { useRouter } from 'next/router'

	function Redirect${_page.id}() {
		const router = useRouter()

		router.push('${_page.page_route}')
	    return (
	      		<section>

				</section>
	    )
	  }

	  export default Redirect${_page.id}`
}

module.exports = {
	GenerateRedirectPage
}

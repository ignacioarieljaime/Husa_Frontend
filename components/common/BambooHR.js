import Script from 'next/script'
import React from 'react'
import { useRouter } from 'next/router'

const BambooHR = () => {

	const router = useRouter()
	const pathName = router?.pathname

	if (pathName === '/careers/job-postings') {
		return (
			<>
				<div
					id='BambooHR'
					data-domain='hisenseusacorporation.bamboohr.com'
					data-version='1.0.0'
					data-departmentId=''></div>
				<Script
					src='https://hisenseusacorporation.bamboohr.com/js/embed.js'
					type='text/javascript'
					async
					defer></Script>
			</>
		)
	}
	return (
		<>
			<div
				id='fancompass-iframe-container'
				data-domain='fancompass.hisense-usa.com'
				data-version='1.0.0'></div>
			<Script
				src='https://fancompass.hisense-usa.com/embed-script'
				type='text/javascript'
				async
				defer></Script>
		</>
	)

}

export default BambooHR
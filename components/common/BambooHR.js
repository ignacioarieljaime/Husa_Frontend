import Script from 'next/script'
import React from 'react'

const BambooHR = () => {
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

export default BambooHR

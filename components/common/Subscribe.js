import axios from 'axios'
import React, { useState } from 'react'

function Subscribe() {
	const [emailName, setEmailName] = useState()

	const sendEmail = async e => {
		e.preventDefault();
		try {
			let response = await axios.post(
				'https://imcrm.dev-api.hisenseportal.com/api/hisense/lead',
				{ email: emailName }
			)
		} catch (error) {
			console.log(error)
		}
	}
	
	return (
		<div className='container-fluid email-form px-8 py-14 px-md-12 p-md-20'>
			<article className='row p-lg-8'>
				<h2 className='col-12 col-md-6 mb-8 my-md-auto'>
					Stay up to date with emails
					<br />
					about new products & other news
				</h2>
				<form
					onSubmit={sendEmail}
					className='col-12 col-md-6 mx-0 my-0 my-md-auto'>
					<input
						className='form-control'
						onChange={e => setEmailName(e.target.value)}
						type='email'
						placeholder='Enter your email here'
					/>
					<button type='submit'>Subscribe</button>
				</form>
			</article>
		</div>
	)
}

export default Subscribe

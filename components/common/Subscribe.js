import axios from 'axios'
import React, { useState } from 'react'
import Spinner from './Spinner'

function Subscribe() {
	const [emailName, setEmailName] = useState()
	const [emailCondition, setEmailCondition] = useState({
		active: false,
		error: false,
		message: null
	})
	const [loading, setLoading] = useState(false)
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
	const sendEmail = async e => {
		e.preventDefault()

		if (emailReg.test(emailName)) {
			setLoading(true)
			try {
				let response = await axios.post(
					'https://imcrm.dev-api.hisenseportal.com/api/hisense/lead',
					{ email: emailName }
				)
				if (response.status === 200) {
					setEmailName()
					e.target.reset()
					setLoading(false)
					setEmailCondition({
						active: true,
						error: false,
						message: 'Your email has been successfully registered.'
					})
				}
			} catch (error) {
				setEmailCondition({
					active: true,
					error: true,
					message: 'Please enter a valid email address.'
				})
				setLoading(false)
				console.log(error)
			}
		} else {
			setEmailCondition({
				active: true,
				error: true,
				message: 'Please enter a valid email address.'
			})
		}

		setTimeout(() => {
			setEmailCondition({ ...emailCondition, active: false })
		}, 2000)
	}

	return (
		<div className='container-fluid email-form px-8 py-14 px-md-12 p-md-20'>
			<article className='row p-lg-8'>
				<h2 className='col-12 col-md-6 mb-8 my-md-auto'>
					Stay up to date with emails
					<br />
					about new products & other news
				</h2>
				<div className='col-12 col-md-6 mx-0 my-0 my-md-auto'>
					<form onSubmit={sendEmail}>
						<input
							className='form-control  '
							onChange={e => setEmailName(e.target.value)}
							type='email'
							placeholder='Enter your email here'
						/>
						<button type='submit' className='d-flex align-items-center'>
							<span className='me-2'>Subscribe</span>
							{loading && <Spinner size={25} />}
						</button>
					</form>
					{emailCondition.active && (
						<span
							className={
								emailCondition.error ? ' text-danger' : 'text-success'
							}>
							{emailCondition.message}
						</span>
					)}
				</div>
			</article>
		</div>
	)
}

export default Subscribe

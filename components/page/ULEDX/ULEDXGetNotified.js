import React, { useState } from 'react'

const ULEDXGetNotified = ({ data: { structure } }) => {
	const [email, setEmail] = useState('')

	const submitForm = () => {
		console.log(email)
	}

	return (
		<section>
			<div className='uledx_get_notified'>
				<div className='content'>
					<h2 className='title'>{structure?.title?.value}</h2>
					<h6 className='subtitle'>{structure?.subtitle?.value}</h6>
					<form onSubmit={submitForm}>
						<div className='form_inp'>
							<input
								type='email'
								name='email'
								placeholder='Email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<button type='button' className='n-btn medium white'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ULEDXGetNotified

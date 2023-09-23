import React, { useState } from 'react'

const ULEDXWaitlistForm = ({ data }) => {
	const [form, setForm] = useState({
		firstName: '',
		surName: '',
		email: ''
	})
	const [notify, setNotify] = useState(false)

	const submitForm = () => {
		console.log(form)
	}

	return (
		<div className='uledx_waitlist_form'>
			<div className='content'>
				<h4 className='title'>{data?.title?.value}</h4>
				<form onSubmit={submitForm}>
					<div className='form_inp'>
						<input
							type='text'
							placeHolder='First Name'
							name='firstName'
							value={form.firstName}
							onChange={e =>
								setForm(prevState => ({
									...prevState,
									firstName: e.target.value
								}))
							}
						/>
					</div>
					<div className='form_inp'>
						<input
							type='text'
							placeHolder='Surname'
							name='surName'
							value={form.surName}
							onChange={e =>
								setForm(prevState => ({
									...prevState,
									surName: e.target.value
								}))
							}
						/>
					</div>
					<div className='form_inp'>
						<input
							type='text'
							placeHolder='Email'
							name='email'
							value={form.email}
							onChange={e =>
								setForm(prevState => ({ ...prevState, email: e.target.value }))
							}
						/>
					</div>
					<div className='checkbox'>
						<button
							type='button'
							className={notify ? 'checked' : ''}
							onClick={() => setNotify(prevState => !prevState)}></button>
						<p className='mb-0'>{data?.text?.value}</p>
					</div>
					<button type='button' className='n-btn medium black'>
						Get Notified
					</button>
				</form>
			</div>
		</div>
	)
}

export default ULEDXWaitlistForm

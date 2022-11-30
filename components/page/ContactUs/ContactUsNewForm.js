import React, { useState } from 'react'
import GeneralInquiriesForm from './GeneralInquiriesForm1'
import ServiceSupportFormNew from './ServiceSupportFormNew'

function ContactUsNewForm({ data }) {
	let { structure } = data
	const [generalInquiriesForm, setGeneralInquiriesForm] = useState(true)
	return (
		<section className='border-bottom border-dark'>
			<div className='px-8 px-md-20 mt-20'>
				<div className='container contact-us-new-form form-container'>
					<div className='d-flex justify-content-center align-items-end flex-nowrap mb-17'>
						<div className='pe-5 pe-sm-15 pb-5 border-bottom border-dark'>
							<button
								className={`tab-btn tab-btn-contact-us fw-light fs-3 ${
									generalInquiriesForm && 'active'
								}`}
								onClick={() => setGeneralInquiriesForm(true)}>
							{structure?.form?.value?.title?.value}
							</button>
						</div>
						<div className='ps-5 ps-sm-15 pb-5 border-bottom border-dark'>
							<button
								className={`tab-btn tab-btn-contact-us fw-light fs-3 ${
									!generalInquiriesForm && 'active'
								}`}
								onClick={() => setGeneralInquiriesForm(false)}>
								{structure?.connection?.value?.title?.value}
							</button>
						</div>
					</div>
				</div>

				{generalInquiriesForm ? (
					<div className='container form-container'>
						<h2 className='fs-1 mb-18 text-center'>{structure?.form?.value?.title?.value}</h2>
						<GeneralInquiriesForm
							btnClass={
								'btn btn-outline-dark fw-bold rounded-5 mb-20 py-3 px-4'
							}
						/>
						{/* <form
						action=''
						className='form-container-inner-group justify-content-center row active'
						id='form-tab-2'>
						<h2 className='fs-1 mb-18'>General Inquiries</h2>
						<div className='col-12 mb-10 custom-select-box'>
							<div
								className='form-container-inner-input select-container'
								tabIndex='1'>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='inquiry'
										value=''
										name='inquiry'
										checked='checked'
										disabled
									/>
									<p className='input-text'>
										What is your inquiry related to?
										<i className='fa-solid fa-xs fa-chevron-down'></i>
									</p>
								</div>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='marketing'
										value='2'
										name='inquiry'
									/>
									<p className='input-text'>
										Marketing or PR
										<i className='fa-solid fa-xs fa-chevron-down'></i>
									</p>
								</div>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='customer-support'
										value='3'
										name='inquiry'
									/>
									<p className='input-text'>
										Customer Support
										<i className='fa-solid fa-xs fa-chevron-down'></i>
									</p>
								</div>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='human-resources'
										value='4'
										name='inquiry'
									/>
									<p className='input-text'>
										Human Resources
										<i className='fa-solid fa-xs fa-chevron-down'></i>
									</p>
								</div>
							</div>
							<ul className='select-box-list'>
								<li>
									<label
										className='option'
										htmlFor='marketing'
										aria-hidden='aria-hidden'>
										marketing or PR
									</label>
								</li>
								<li>
									<label
										className='option'
										htmlFor='customer-support'
										aria-hidden='aria-hidden'>
										Customer Support
									</label>
								</li>
								<li>
									<label
										className='option'
										htmlFor='human-resources'
										aria-hidden='aria-hidden'>
										Human Resources
									</label>
								</li>
							</ul>
							<span className='input-error'>This field is required.</span>
						</div>
						<div className='col-12 mb-10'>
							<input
								type='text'
								className='form-container-inner-input'
								placeholder='Name *'
								required
							/>
							<span className='input-error'>This field is required.</span>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<input
								type='email'
								className='form-container-inner-input'
								placeholder='Email *'
								required
							/>
							<span className='input-error'>This field is required.</span>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<input
								type='tel'
								className='form-container-inner-input'
								placeholder='Phone *'
								required
							/>
							<span className='input-error'>This field is required.</span>
						</div>
						<div className='col-12 mb-10'>
							<textarea
								name=''
								cols='30'
								rows='1'
								required
								placeholder='Message'
								className='form-container-inner-input'></textarea>
							<span className='input-error'>This field is required.</span>
						</div>
						<div className='col-12 text-center'>
							<button
								type='submit'
								className='btn btn-outline-dark fw-bold rounded-5 mb-20 py-3 px-4'>
								SUBMIT
							</button>
						</div>
					</form> */}
					</div>
				) : (
					<ServiceSupportFormNew data={structure?.connection?.value}/>
				)}
			</div>
		</section>
	)
}

export default ContactUsNewForm

import React, { useState } from 'react'
import GeneralInquiriesForm from './GeneralInquiriesForm1'
import ServiceSupportFormNew from './ServiceSupportFormNew'
import ServiceSupportFormV2 from './ServiceSupportFormV2'

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
				<div className='container form-container'>
					{generalInquiriesForm ? (
						<>
							<h2 className='fs-1 mb-18 text-center'>
								{structure?.form?.value?.title?.value}
							</h2>
							<GeneralInquiriesForm
								btnClass={
									'btn btn-outline-dark fw-bold rounded-5 mb-20 py-3 px-4'
								}
							/>
						</>
					) : (
						<>
							<h2 className='fs-1 mb-18 text-center'>
								{structure?.form?.value?.title?.value}
							</h2>
							<ServiceSupportFormV2 data={structure?.connection?.value} />
						</>
					)}
				</div>
			</div>
		</section>
	)
}

export default ContactUsNewForm

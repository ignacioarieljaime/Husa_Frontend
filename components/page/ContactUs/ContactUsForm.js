import React, { useState } from 'react'

// components
import GeneralInquiriesForm from './GeneralInquiriesForm'
import ServiceSupportForm from './ServiceSupportForm'

function ContactUsForm() {
	const [formCondition, setFormCondition] = useState(false)
	return (
		<section>
			<div className='container form-container px-8 px-md-20 mt-12'>
				<div className='d-flex justify-content-center align-items-center flex-nowrap mb-15'>
					<div className='me-6'>
						<button
							className={`tab-btn ${!formCondition && 'active'}`}
							id='tab-1'
							onClick={() => setFormCondition(false)}>
							PARTS & SERVICE SUPPORT
						</button>
					</div>
					<div className='ms-6'>
						<button
							className={`tab-btn ${formCondition && 'active'}`}
							id='tab-2'
							onClick={() => setFormCondition(true)}>
							GENERAL INQUIRIES
						</button>
					</div>
				</div>
				{formCondition ? <GeneralInquiriesForm /> : <ServiceSupportForm />}
			</div>
		</section>
	)
}

export default ContactUsForm

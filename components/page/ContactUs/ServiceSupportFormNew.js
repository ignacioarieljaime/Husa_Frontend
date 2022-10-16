import { faComment, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ServiceSupportFormNew() {
	return (
		<>
			<div className='container'>
				<div className='form-container-inner-group justify-content-center d-block row flex-column mb-20'>
					<h2 className='fs-1 mb-18 text-center'>Parts & Service Support</h2>
					<div className='row justify-content-between align-items-center'>
						<div className='support-type-contact-us col-12 col-md-3 mb-5'>
							<FontAwesomeIcon icon={faEnvelope} size={"2xl"} />
							<h3 className='mb-0 fs-5 fw-normal mt-8'>Email</h3>
						</div>
						<div className='support-type-contact-us col-12 col-md-3 mb-5'>
							<FontAwesomeIcon icon={faComment} size={"2xl"} />
							<h3 className='mb-0 fs-5 fw-normal mt-8'>Chat</h3>
						</div>
						<div className='support-type-contact-us col-12 col-md-3 mb-5'>
							<FontAwesomeIcon icon={faPhone} size={"2xl"} />
							<h3 className='mb-0 fs-5 fw-normal mt-8'>Call</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ServiceSupportFormNew

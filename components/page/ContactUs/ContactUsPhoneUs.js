import React from 'react'

import CustomImage from 'components/common/CustomImage'

function ContactUsPhoneUs({ data }) {
	let { structure } = data
	return (
		<section className='contaact_us_phone_us '>
			<div className='container mt-15 mb-20'>
				<h3 className='mb-15 text-center text-md-start'>
					{structure?.title?.value}
				</h3>
				<div className='row justify-content-between align-items-stretch contact-info'>
					<div className='col-12 col-md-4 d-flex flex-column justify-content-between align-items-center mb-16 mb-md-0'>
						<h4 className='mb-5 align-self-md-start'>
							{structure?.contact?.value?.title?.value}
						</h4>
						<div className='align-self-md-start'>
							{structure?.contact?.value?.list?.value?.map((item, index) => (
								<React.Fragment key={index}>
									<p className='fw-bold mb-1'>{item?.title?.value}</p>
									<p className='fw-light mb-5'>{item?.subtitle?.value}</p>
								</React.Fragment>
							))}
						</div>
					</div>
					<div className='col-12 col-md-4 d-flex flex-column justify-content-between align-items-center mb-16 mb-md-0'>
						<CustomImage
							src={structure?.middleBox?.value?.image?.src}
							alt={structure?.middleBox?.value?.image?.alt}
							wrapperHeight='80px'
							wrapperClass='mb-5'
						/>
						<h4 className='fs-5 mb-7'>
							{structure?.middleBox?.value?.title?.value}
						</h4>
						<p className='fw-bold fs-5 mb-0'>
							{structure?.middleBox?.value?.phoneNumber?.value}
						</p>
					</div>
					<div className='col-12 col-md-4 d-flex flex-column justify-content-between align-items-center mb-16 mb-md-0'>
						<CustomImage
							src={structure?.rightBox?.value?.image?.src}
							alt={structure?.rightBox?.value?.image?.alt}
							wrapperHeight='80px'
							wrapperClass='mb-5'
						/>
						<h4 className='fs-5 mb-7'>
							{structure?.rightBox?.value?.title?.value}
						</h4>
						<p className='fw-bold fs-5 mb-0'>
							{structure?.rightBox?.value?.phoneNumber?.value}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactUsPhoneUs

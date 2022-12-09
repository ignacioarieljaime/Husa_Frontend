import React from 'react'

function ServiceSupportFormNew({ data }) {
	return (
		<>
			<div className='container'>
				<div className='form-container-inner-group justify-content-center d-block row flex-column mb-20'>
					<h2 className='fs-1 mb-18 text-center'>{data?.title?.value}</h2>
					<div className='row justify-content-center gap-5 align-items-center'>
						{data?.list?.value.map(item => (
							<a
								href={item?.link?.value ? item?.link?.value : '/'}
								className='support-type-contact-us text-decoration-none col-12 col-md-3 mb-5'>
								<img src={item?.image?.src} width={32} height={32} />
								<h3 className='mb-0 fs-5  fw-normal mt-8'>
									{item?.title?.value}
								</h3>
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ServiceSupportFormNew

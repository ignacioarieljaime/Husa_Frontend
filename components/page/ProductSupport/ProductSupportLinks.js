import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'

function ProductSupportLinks({ pim }) {
	return (
		<div className='product_support_support_box'>
			<div className='container-fluid mb-20'>
				<div className='row justify-content-evenly align-items-center'>
					{pim?.assets.map(
						(item, index) =>
							item.type_id === 3 && (
								<div
									key={index}
									className='col-12 col-md-6 col-lg-4 col-xl-3 py-3'>
									<a href={item.url} download className='download-links p-4'>
										<div>
											<div className='text-muted text-capitalize fs-4'>
												User Manual
											</div>
											<div className='text-muted text-uppercase fs-9'>
												download
											</div>
										</div>
										<div>
											<span className='text-light'>
												<FontAwesomeIcon icon={faCloudArrowDown} size={'2xl'} />
											</span>
										</div>
									</a>
								</div>
							)
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductSupportLinks

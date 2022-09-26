import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
function ProductSupportInfo() {
	return (
		<section>
			<div class='mb-17'>
				<h2 class='my-15 text-center'>Product Support</h2>
				<div class='mx-auto support-time'>
					<p class='fs-5 text-uppercase mb-1 fw-bold'>SUPPORT HOURS:</p>
					<p class='fs-5 text-uppercase mb-1'>monday-friday</p>
					<p class='fs-5 text-uppercase mb-8'>9AM - 9PM EST</p>

					<p class='fs-5 text-uppercase mb-1'>saturday-sunday</p>
					<p class='fs-5 text-uppercase'>9AM - 6PM EST</p>
				</div>
			</div>
			<div class='container-fluid mb-20'>
				<div class='row justify-content-evenly align-items-center'>
					<div class='col-12 col-md-6 col-lg-4 col-xl-3 py-3'>
						<a href='#' class='download-links p-4'>
							<div>
								<div class='text-muted text-capitalize fs-4'>User Manual</div>
								<div class='text-muted text-uppercase fs-9'>download</div>
							</div>
							<div>
								<span className='text-light'>
									<FontAwesomeIcon icon={faCloudArrowDown} size={'2xl'} />
								</span>
							</div>
						</a>
					</div>
					<div class='col-12 col-md-6 col-lg-4 col-xl-3 py-3'>
						<a href='#' class='download-links p-4'>
							<div>
								<div class='text-muted text-capitalize fs-4'>User Manual</div>
								<div class='text-muted text-uppercase fs-9'>download</div>
							</div>
							<div>
								<span className='text-light'>
									<FontAwesomeIcon icon={faCloudArrowDown} size={'2xl'} />
								</span>
							</div>
						</a>
					</div>
					<div class='col-12 col-md-6 col-lg-4 col-xl-3 py-3'>
						<a href='#' class='download-links p-4'>
							<div>
								<div class='text-muted text-capitalize fs-4'>User Manual</div>
								<div class='text-muted text-uppercase fs-9'>download</div>
							</div>
							<div>
								<span className='text-light'>
									<FontAwesomeIcon icon={faCloudArrowDown} size={'2xl'} />
								</span>
							</div>
						</a>
					</div>
					<div class='col-12 col-md-6 col-lg-4 col-xl-3 py-3'>
						<a href='#' class='download-links p-4'>
							<div>
								<div class='text-muted text-capitalize fs-4'>User Manual</div>
								<div class='text-muted text-uppercase fs-9'>download</div>
							</div>
							<div>
								<span className='text-light'>
									<FontAwesomeIcon icon={faCloudArrowDown} size={'2xl'} />
								</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductSupportInfo

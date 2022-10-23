import React from 'react'

// image
import ImageBg from 'public/assets/images/support/support-bg.jpg'

function SupportNeedAssistanceV2() {
	return (
		<section>
			<div className='heading support-heading support-new-heading'>
				<img src={ImageBg.src} alt='featured image' width='100%' />
				<div className='heading-text'>
					<h4
						className='text-white fs-2hx fw-normal mb-7'
						style={{ color: '#fff' }}>
						Need more assistance?
					</h4>
					<a href='#' className='n-btn outline-white transparent'>
						Contact Us
					</a>
				</div>
			</div>
		</section>
	)
}

export default SupportNeedAssistanceV2

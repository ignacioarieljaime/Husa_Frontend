import React from 'react'

// image
import ImageBg from './../../../../public/assets/images/support/support-bg.jpg'

function SupportNeedAssistance() {
	return (
		<section>
			<div className='heading support-heading'>
				<img src={ImageBg.src} alt='featured image' width='100%' />
				<div className='heading-text'>
					<h2 className='text-white fs-2qx mb-5' style={{ color: '#fff' }}>
						Need more assistance?
					</h2>
					<a href='#' className='btn btn-light rounded-5 px-4 py-2'>
						CONTACT US
					</a>
				</div>
			</div>
		</section>
	)
}

export default SupportNeedAssistance

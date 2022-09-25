import React from 'react'

// image
import ImageBg from './../../../../public/assets/images/support/support-bg.jpg'

function SupportNeedAssistance() {
	return (
		<section>
			<div class='heading support-heading'>
				<img src={ImageBg.src} alt='featured image' width='100%' />
				<div class='heading-text'>
					<h2 class='text-white fs-2qx mb-5' style={{ color: '#fff' }}>
						Need more assistance?
					</h2>
					<a href='#' class='btn btn-light rounded-5 px-4 py-2'>
						CONTACT US
					</a>
				</div>
			</div>
		</section>
	)
}

export default SupportNeedAssistance

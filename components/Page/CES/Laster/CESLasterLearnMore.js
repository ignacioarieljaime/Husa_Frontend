import React from 'react'

// image
import Image from './../../../../public/assets/images/ces-2022-smart-tv/laser-tv-banner.png'

function CESLasterLearnMore() {
	return (
		<section>
			<div className='heading'>
				<img src={Image.src} alt='featured image' width='100%' height='100%' />
				<div className='heading-text text-start p-5 p-sm-10 p-md-20'>
					<h1 className='fs-md-4tx fw-normal mw-50 mb-4 mb-md-9'>
						L5G 4K
						<span className='d-block'>Smart Laser TV</span>
					</h1>
					<p className='fs-md-3 text-white mb-0'>Big Screen.</p>
					<p className='fs-md-3 text-white mb-5 mb-md-18'>Big Entertainment.</p>
					<a
						href='#'
						className='text-decoration-none text-white btn-primary rounded-5 px-4 py-1 px-md-8 py-md-2 fs-9 fs-md-base'>
						LEARN MORE
					</a>
				</div>
			</div>
		</section>
	)
}

export default CESLasterLearnMore

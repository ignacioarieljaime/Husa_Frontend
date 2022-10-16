import React from 'react'

const DolbyVision = () => {
	return (
		<section className='l9g'>
			<div className='dolby-vision py-4 pb-md-0 pt-md-20 px-0'>
				<div className='px-4 px-md-20 py-6 pt-8 py-md-20 mt-10'>
					<h2
						className='fs-5 fs-md-2hx text-white text-start mb-0 aos-init aos-animate'
						data-aos='fade'
						data-aos-duration='1000'>
						Dolby Vision
					</h2>
				</div>
				<img
					src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/dolbyvision-L9Gusn.jpg'
					alt='Dolby Vision'
				/>
				<div className='px-4 px-md-20 py-4 py-md-20'>
					<div className='caption mw-md-50 fs-9 fs-md-2 fw-light'>
						Dolby Vision is a next-level HDR format that optimizes every scene
						on every screen. This high-dynamic range technology gives you
						amazing color and contrast, so you can discover even more detail in
						bright and dark scenes. This is entertainment without compromise.
					</div>
					<div className='caption mw-md-50 fs-9 fw-light'>
						*Coming via Firmware update, Summer 2022.
					</div>
				</div>
			</div>
		</section>
	)
}

export default DolbyVision

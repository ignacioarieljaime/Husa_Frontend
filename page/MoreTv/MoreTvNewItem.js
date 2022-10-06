import React from 'react'

// image
import TVImage from './../../../public/assets/images/more-tv/U6H.png'
function MoreTvNewItem() {
	return (
		<div className='col-12 col-sm-6 col-lg-3 py-3'>
			<div className='h-100 d-flex flex-column align-items-center justify-content-between'>
				<div className='mb-3'>
					<img src={TVImage.src} alt='featured image' className='w-100 mb-4' />
					<div className='text-center'>
						<h3 className='fs-2'>
							U8G<span className='fs-8 ms-2'>Fire TV</span>
						</h3>
						<p className='mb-7'>Great for everyone</p>
						<p className='mb-0 lh-20'>U6H</p>
						<p className='mb-0 lh-20'>Great for Everyone</p>
						<p className='mb-0 lh-20'>Google TV</p>
						<p className='mb-0 lh-20'>Quantum Dot Color</p>
						<p className='mb-0 lh-20'>Dolby Vision HDR and HDR10</p>
						<p className='mb-0 lh-20'>Full Array backlight</p>
						<p className='mb-0 lh-20'>600 nits peak brightness</p>
						<p className='mb-0 lh-20'>Dolby Atmos Audio</p>
						<p className='mb-0 lh-20'>Game Mode Plus (60Hz)</p>
						<p className='mb-0 lh-20'>Voice remote</p>
					</div>
				</div>
				<div className='text-center'>
					<div className='mb-3'>
						<a
							href='#'
							className='btn btn-primary-dark text-white rounded-5 text-uppercase fs-8'>
							LEARN MORE
						</a>
					</div>
					<div>
						<a
							href='#'
							className='btn btn-info-light text-navy rounded-5 text-uppercase fs-8'>
							buy now
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MoreTvNewItem

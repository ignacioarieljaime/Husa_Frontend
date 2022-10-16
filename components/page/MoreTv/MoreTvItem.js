import React from 'react'

// image
import Image from 'public/assets/images/more-tv/U6H.png'

function MoreTvItem() {
	return (
		<div className='col-12 col-sm-6 col-lg-4 col-xxl-2 py-3'>
			<div className='d-flex flex-column align-items-center justify-content-between'>
				<a href='#' className='mb-4'>
					<img src={Image.src} alt='featured image' width='100%' />
				</a>
				<div className='text-center'>
					<h4 className='fs-2 fw-normal'>
						U8G<span className='fs-8 ms-2'>"Fire TV"</span>
					</h4>
					<p className='fw-normal text-muted mb-6'>Great for everyone</p>
					<a href='#' className='text-black text-uppercase fw-normal fs-8'>
						get notified
					</a>
				</div>
			</div>
		</div>
	)
}

export default MoreTvItem

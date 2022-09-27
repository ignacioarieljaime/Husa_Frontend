import React from 'react'

// image
import Image from './../../../../public/assets/images/more-tv/U6H.png'

function MoreTvItem() {
	return (
		<div class='col-12 col-sm-6 col-lg-4 col-xxl-2 py-3'>
			<div class='d-flex flex-column align-items-center justify-content-between'>
				<a href='#' class='mb-4'>
					<img src={Image.src} alt='featured image' width='100%' />
				</a>
				<div class='text-center'>
					<h3 class='fs-2 fw-normal'>
						U8G<span class='fs-8 ms-2'>"Fire TV"</span>
					</h3>
					<p class='fw-normal text-muted mb-6'>Great for everyone</p>
					<a href='#' class='text-black text-uppercase fw-normal fs-8'>
						get notified
					</a>
				</div>
			</div>
		</div>
	)
}

export default MoreTvItem

import React from 'react'

// image
import Image from './../../../../public/assets/images/4k-uled/U6H.png'

function ULEDProductItem() {
	return (
		<div class='col-12 col-lg-4 platform'>
			<h2>U6H</h2>
			<p class='text-black fs-2 fw-normal'>Great for Entertainment</p>
			<div class='py-9'>
				<img src={Image.src} alt='android tv' width='100%' height='100%' />
			</div>
			<div class='row'>
				<div class='col-12 col-sm-3 col-lg-6 col-xl-4 col-xxl-3 mb-5 mb-sm-0'>
					<a href='#' class='btn btn-light'>
						Discover
					</a>
				</div>
				<div class='col-12 col-sm-6 col-lg-6 col-xl-8 col-xxl-9'>
					<a href='#' class='btn btn-outline-dark'>
						Where To Buy
					</a>
				</div>
			</div>
		</div>
	)
}

export default ULEDProductItem

import React from 'react'

// image
import Image from './../../../../public/assets/images/smart-tv-android.png'
function SmartInfoTvsDifferentItem() {
	return (
		<div className='col-12 col-md-6 col-xxl-6 platform'>
			<h2>
				Android <br />
				TV
			</h2>
			<div className='py-9'>
				<img src={Image.src} alt='android tv' width='100%' height='100%' />
			</div>
			<p>Thousands of streaming channels at your fingertips</p>
			<a href='#' className='btn btn-light'>
				Discover Android
			</a>
		</div>
	)
}

export default SmartInfoTvsDifferentItem

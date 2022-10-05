import React from 'react'

// image
import Image from './../../../public/assets/images/4k-uled-hisense-android-tv.png'

function SmartInfoBetterNewOrOldBox() {
	return (
		<section>
			<div className='position-relative'>
				<div className='shade mt-n19'></div>
				<div className='container advertise mt-19 px-6 px-md-3'>
					<h2>
						You want a TV that’s better than your old TV.
						<br />
						You want a Hisense smart TV.
					</h2>
					<div>
						<a href='#'>
							<img src={Image.src} alt='featured image' />
						</a>
					</div>
					<a href='#' className='btn btn-dark'>
						Shop Now
					</a>
				</div>
			</div>
		</section>
	)
}

export default SmartInfoBetterNewOrOldBox

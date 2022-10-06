import React from 'react'

// image
import Image from './../../../public/assets/images/smart-tv-header.png'

function SmartInfoHead() {
	return (
		<section>
			<div className='heading'>
				<img src={Image.src} alt='smart tv platforms' width='100%' height='100%' />
				<div className='heading-text'>
					<h1>Smart TV made simple</h1>
					<a href='#' className='btn btn-light text'>
						See the range
					</a>
				</div>
			</div>
		</section>
	)
}

export default SmartInfoHead

import React from 'react'

// image
import Image from './../../../../public/assets/images/4k-uhd/motion-rate-img.jpg'
import ImageTwo from './../../../../public/assets/images/4k-uhd/motion-rate.png'

function UHDAbilityItem() {
	return (
		<div class='col-12 col-md-6 mb-18 mb-md-0'>
			<img src={Image.src} alt='featured-image' class='w-100' />
			<article class='article text-center mt-12'>
				<img src={ImageTwo.src} alt='featured image' width='250' />
				<div class='px-4'>
					<h2 class='fs-2 mb-3 mt-13'>Motion Rate 120</h2>
					<p class='fw-normal text-muted mw-50 m-auto mb-4'>
						Makes fast-moving scenes smooth like butter.
					</p>
				</div>
			</article>
		</div>
	)
}

export default UHDAbilityItem

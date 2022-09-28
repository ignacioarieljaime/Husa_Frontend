import React from 'react'

// image
import Image from './../../../../public/assets/images/pdp/g-assistant.png'
function PDPFeatureItemWithDescription() {
	return (
		<div class='col-12 col-sm-6 col-md-4 col-lg-3 text-center p-5'>
			<img src={Image.src} alt='featured image' width='36' class='mb-9' />
			<h3 class='fs-4 text-white mb-3'>Google Assistant</h3>
			<p class='fs-5 text-muted'>
				With lots of unique blocks, you can easily build a page without coding.
				Build your next landing page quickly.
			</p>
		</div>
	)
}

export default PDPFeatureItemWithDescription

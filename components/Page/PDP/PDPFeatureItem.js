import React from 'react'

// image
import CardImage from 'public/assets/images/pdp/cards.png'

function PDPFeatureItem() {
	return (
		<button
			className='top-feature-block'
			type='button'
			data-bs-toggle='modal'
			data-bs-target='#specs-modal'>
			<div>
				<img src={CardImage.src} alt='featured image' width='22' />
			</div>
			<span>Hi View</span>
		</button>
	)
}

export default PDPFeatureItem

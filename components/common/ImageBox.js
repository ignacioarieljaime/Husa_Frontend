import React from 'react'

// image
import Image from 'public/assets/images/smart-tv-second-header.png'

function ImageBox({ data: { structure } }) {
	return (
		<section>
			<div className='header-secondary'>
				<img
					src={structure.image.src}
					alt={structure.image.alt}
					width='100%'
					height='100%'
				/>
			</div>
		</section>
	)
}

export default ImageBox

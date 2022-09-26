import React from 'react'

// image
import Image from './../../../public/assets/images/smart-tv-second-header.png'

function ImageBox({}) {
	return (
		<section>
			<div className='header-secondary'>
				<img
					src={Image.src}
					alt='smart tv platforms'
					width='100%'
					height='100%'
				/>
			</div>
		</section>
	)
}

export default ImageBox

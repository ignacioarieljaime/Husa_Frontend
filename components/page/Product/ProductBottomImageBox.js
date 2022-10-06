import React from 'react'

// image
import Image from 'public/assets/images/tv-page/laser-tv.jpg'

function ProductBottomImageBox() {
	return (
		<div className='header-secondary'>
			<img
				src={Image.src}
				alt='award-wining-television-lineup'
				width='100%'
				height='100%'
			/>
		</div>
	)
}

export default ProductBottomImageBox

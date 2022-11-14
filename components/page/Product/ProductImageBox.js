import React from 'react'

// image
import Image from 'public/assets/images/tv-page/laser-tv.jpg'

function ProductImageBox({ data }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='header-secondary2'>
			<img
				src={structure?.image?.src}
				alt={structure?.image?.alt}
				width='100%'
				height='100%'
			/>
		</div>
	)
}

export default ProductImageBox

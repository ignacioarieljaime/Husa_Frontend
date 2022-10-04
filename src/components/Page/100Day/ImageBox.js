import React from 'react'

function ImageBox({ image }) {
	return (
		<section>
			<div className='header-secondary'>
				<img src={image.src} alt='banner' width='100%' height='100%' />
			</div>
		</section>
	)
}

export default ImageBox

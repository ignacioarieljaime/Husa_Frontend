import React from 'react'

// image
import Image from './../../../../../public/assets/images/ces-2022-smart-tv/color-banner.png'

function ImageBoxWithPaddingAndBgBlack() {
	return (
		<section>
			<div class='header-secondary bg-black px-md-20 py-md-16'>
				<img
					src={Image.src}
					alt='award-wining-television-lineup'
					width='100%'
					height='100%'
				/>
			</div>
		</section>
	)
}

export default ImageBoxWithPaddingAndBgBlack

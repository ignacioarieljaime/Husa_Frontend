import React from 'react'

// image
import Image from './../../../public/assets/images/tv-and-audio/award-wining-television-lineup-banner.png'

function TvAndAudioHead() {
	return (
		<section>
			<div className='header-secondary'>
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

export default TvAndAudioHead

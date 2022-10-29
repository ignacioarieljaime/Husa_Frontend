import React from 'react'

function LandingVideoPlayer({ data }) {
	let { structure } = data
	return (
		<div om className='video-container landing'>
			<iframe
				src={structure?.video?.src}
				alt={structure?.video?.alt}
				title={structure?.video?.title}
				width='100%'
				height='100%'
				allow='autoplay; fullscreen'
				allowFullScreen=''
				dataready={true}></iframe>
		</div>
	)
}

export default LandingVideoPlayer

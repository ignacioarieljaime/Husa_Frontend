import React from 'react'

function LandingVideoPlayer({
	data: {
		structure: { video }
	}
}) {
	return (
		<div om className='video-container landing'>
			<iframe
				src={video.src}
				alt={video.alt}
				title={video.title}
				width='100%'
				height='100%'
				allow='autoplay; fullscreen'
				allowFullScreen=''
				dataready={true}></iframe>
		</div>
	)
}

export default LandingVideoPlayer

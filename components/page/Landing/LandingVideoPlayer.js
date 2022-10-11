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
				frameborder='0'
				allow='autoplay; fullscreen'
				allowfullscreen=''
				data-ready='true'></iframe>
		</div>
	)
}

export default LandingVideoPlayer

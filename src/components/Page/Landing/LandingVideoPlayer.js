import React from 'react'

function LandingVideoPlayer() {
	return (
		<div className='video-container'>
			<iframe
				title='TV advertisement'
				src='https://player.vimeo.com/video/408847720?autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0&amp;background=1'
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

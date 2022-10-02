import React from 'react'

function LandingVideoPlayer({ data: { props } }) {
	return (
		<div className='video-container landing'>
			<iframe
				title='TV advertisement'
				src={JSON.parse(props).data}
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

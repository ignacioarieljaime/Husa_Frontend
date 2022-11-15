import React from 'react'

function LandingVideoPlayer({ data }) {
	let { structure } = data
	return (
		<div id={data?.name + data?.id} om className='video-container landing'>
			<iframe
				src={structure?.video?.value}
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

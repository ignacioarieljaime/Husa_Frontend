import React, { useRef, useEffect } from 'react'

const FineTouchesTab = ({ videoSrc, description }) => {
	const video = useRef()

	useEffect(() => {
		video.current.load()
		video.current.play()
	}, [videoSrc])

	return (
		<>
			<div className='device-video-container mb-3'>
				<video
					width='100%'
					height='100%'
					muted={true}
					playsInline={true}
					className='device-video'
					ref={video}>
					<source src={videoSrc} />
				</video>
			</div>
			<div className='mw-md-50 mx-auto'>
				<p className='fs-9 fs-md-3 fw-light text-center text-white '>
					{description}
				</p>
			</div>
		</>
	)
}

export default FineTouchesTab

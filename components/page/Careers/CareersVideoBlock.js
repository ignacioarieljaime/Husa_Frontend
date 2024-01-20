import TransparentPlayButton from 'components/icons/TransparentPlayButton'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const CareersVideoBlock = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// const [iframe, setIframe] = useState('')
	const videoRef = useRef()
	const [playingStatus, setPlayingStatus] = useState(true)

	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	useEffect(() => {
		if (videoRef.current) videoRef.current.play()
		// if (structure?.videoType?.value === 'iframe') {
		// 	if (structure?.video?.value.includes('?')) {
		// 		if (structure?.video?.value.includes('https://player.vimeo.com')) {
		// 			setIframe(
		// 				structure?.video?.value.split('?')[0] +
		// 					'?' +
		// 					structure?.video?.value.split('?')[1].split('&amp;')[0] +
		// 					'&autoplay=1&muted=1&loop=1'
		// 			)
		// 		} else {
		// 			setIframe(
		// 				structure?.video?.value.split('?')[0] + '?autoplay=1&muted=1&loop=1'
		// 			)
		// 		}
		// 	} else {
		// 		setIframe(structure?.video?.value + '?autoplay=1&muted=1&loop=1')
		// 	}
		// }
	}, [structure?.video?.value])

	const playVideo = _condition => {
		if (_condition) {
			setPlayingStatus(false)
			videoRef.current.pause()
		} else {
			setPlayingStatus(true)
			videoRef.current.play()
		}
	}

	return (
		<section>
			<div id={data?.name + data?.id} className='careers_video_block'>
				{structure?.videoType?.value === 'link' ? (
					<video
						ref={videoRef}
						muted={true}
						autoPlay={true}
						loop={true}
						src={structure?.video?.value}
						onClick={() => playVideo(true)}></video>
				) : (
					<iframe
						allow='autoplay; mute; loop; fullscreen; picture-in-picture'
						src={structure?.video?.value}
						mozallowfullscreen='true'
						webkitallowfullscreen='true'
						allowFullScreen></iframe>
				)}
				{structure?.videoType?.value === 'link' && !playingStatus && (
					<button onClick={() => playVideo(playingStatus)}>
						<TransparentPlayButton />
					</button>
				)}
			</div>
		</section>
	)
}

export default CareersVideoBlock

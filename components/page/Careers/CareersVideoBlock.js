import TransparentPlayButton from 'components/icons/TransparentPlayButton'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const CareersVideoBlock = ({ data }) => {
	const [content, setContent] = useState(null)
	const videoRef = useRef()
	const [playingStatus, setPlayingStatus] = useState(true)

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	useEffect(() => {
		if (videoRef.current) videoRef.current.play()
	}, [content?.video?.value])

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
				{content?.videoType?.value === 'link' ? (
					<video
						ref={videoRef}
						muted={true}
						autoPlay={true}
						loop={true}
						src={content?.video?.value}
						onClick={() => playVideo(true)}></video>
				) : (
					<iframe src={content?.video?.value}></iframe>
				)}
				{content?.videoType?.value === 'link' && !playingStatus && (
					<button onClick={() => playVideo(playingStatus)}>
						<TransparentPlayButton />
					</button>
				)}
			</div>
		</section>
	)
}

export default CareersVideoBlock

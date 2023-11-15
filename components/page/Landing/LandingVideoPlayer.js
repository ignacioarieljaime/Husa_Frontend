import React, { useEffect, useRef, useState } from 'react'
import Expand from 'public/assets/svgs/Expand.svg'
import Mute from 'public/assets/svgs/mute.svg'
import Play from 'public/assets/svgs/play.svg'
function LandingVideoPlayer({ data }) {
	const { structure } = data
	const videoRef = useRef()
	const [video, setVideo] = useState(null)
	const [playingStatus, setPlayingStatus] = useState(false)
	const [fullSize, setFullSize] = useState(false)
	const [mute, setMuted] = useState(false)

	const uniqeID = (Math.random() * Math.random() * 100).toFixed()

	useEffect(() => {
		const to = setTimeout(
			() => setVideo(structure?.video?.value),
			parseInt(data?.id) * 100
		)

		return () => clearTimeout(to)
	}, [structure])

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
		<section id={data?.name + data?.id + uniqeID}>
			<div className='video_feature'>
				{video && structure?.videoType?.value === 'link' ? (
					<video ref={videoRef} muted={mute} src={video}></video>
				) : (
					<iframe
						id={'LandingVideoIframe' + uniqeID + data?.id}
						src={video}
						alt={
							'LandingVideoIframe' + uniqeID + data?.id + structure?.video?.alt
						}
						title={'LandingVideoIframe' + data?.id + structure?.video?.title}
						width='100%'
						height='100%'
						allow='autoplay; fullscreen'
						allowFullScreen=''
						dataready={true}></iframe>
				)}
				{structure?.videoType?.value === 'link' && (
					<div className='button_group'>
						<button onClick={() => playVideo(playingStatus)}>
							<img src={Play.src} />
						</button>
						<button onClick={() => setFullSize(true)}>
							<img src={Expand.src} />
						</button>
						<button onClick={() => setMuted(prevState => !prevState)}>
							<img src={Mute.src} />
						</button>
					</div>
				)}
			</div>
			{fullSize && (
				<div
					onClick={() => setFullSize(false)}
					className='video_feature_resized_video_modal'>
					<div className='wrapper'>
						{structure?.videoType?.value === 'link' && (
							<video autoPlay={true} src={structure?.video?.value}></video>
						)}
					</div>
				</div>
			)}
		</section>
	)
}

export default LandingVideoPlayer

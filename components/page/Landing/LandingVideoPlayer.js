import React, { useEffect, useRef, useState } from 'react'
import Expand from 'public/assets/svgs/Expand.svg'
import Mute from 'public/assets/svgs/mute.svg'
import Play from 'public/assets/svgs/play.svg'
import { useInView } from 'react-intersection-observer'
import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
function LandingVideoPlayer({ data }) {
	const { structure } = data
	const videoRef = useRef()
	const wrapperRef = useRef()
	const [video, setVideo] = useState(null)
	const [playingStatus, setPlayingStatus] = useState(false)
	const [fullSize, setFullSize] = useState(false)
	const [loading, setLoading] = useState(true)
	const [mute, setMuted] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0
	})

	const uniqeID = (Math.random() * Math.random() * 100).toFixed()

	const router = useRouter()

	useEffect(() => {
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				wrapperRef.current.scrollIntoView()
			}, 1000)
		}
	}, [])

	useEffect(() => {
		if (inView && loading) {
			setLoading(false)
			setVideo(structure?.video?.value)
		}
	}, [inView])

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
		<section ref={wrapperRef} id={data?.name + data?.id}>
			<div ref={ref} className='video_feature'>
				{loading && !video ? (
					<Spinner />
				) : structure?.videoType?.value === 'link' ? (
					<video ref={videoRef} muted={mute} src={video}></video>
				) : (
					<iframe
						id={'LandingVideoIframe' + uniqeID + data?.id}
						src={
							video + `${video && video.includes('?') ? '&' : '?'}autopause=0`
						}
						alt={
							'LandingVideoIframe' + uniqeID + data?.id + structure?.video?.alt
						}
						title={'LandingVideoIframe' + data?.id + structure?.video?.title}
						width='100%'
						height='100%'
						allow='autoplay; fullscreen; picture-in-picture'
						mozallowfullscreen='true'
						webkitallowfullscreen='true'
						allowFullScreen={true}
						dataready='true'></iframe>
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

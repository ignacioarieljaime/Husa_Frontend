import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faVolumeMute,
	faPlay,
	faExpandArrowsAlt
} from '@fortawesome/free-solid-svg-icons'

const ULEDXWaitlistVideoBox = ({ data, videoSizeHandler }) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [mute, setMute] = useState(false)
	const video = useRef()

	const playVideo = _condition => {
		if (_condition) {
			setIsPlaying(false)
			video.current.pause()
		} else {
			setIsPlaying(true)
			video.current.play()
		}
	}

	const muteVideo = _condition => {
		if (_condition) {
			setMute(false)
			video.current.muted = false
		} else {
			setMute(true)
			video.current.muted = true
		}
	}

	return (
		<div className='uledx_waitlist_video'>
			<video autoPlay={true} loop={true} playsinline={true} ref={video}>
				<source src={data?.value} data-wf-ignore='true' />
			</video>
			<div className='button_group'>
				<button onClick={() => playVideo(isPlaying)}>
					<FontAwesomeIcon icon={faPlay} />
				</button>
				<button onClick={() => muteVideo(mute)}>
					<FontAwesomeIcon icon={faVolumeMute} />
				</button>
				<button onClick={videoSizeHandler}>
					<FontAwesomeIcon icon={faExpandArrowsAlt} />
				</button>
			</div>
		</div>
	)
}

export default ULEDXWaitlistVideoBox

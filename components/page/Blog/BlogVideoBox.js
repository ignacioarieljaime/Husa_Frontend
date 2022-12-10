import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

function BlogVideoBox({ data: { structure } }) {
	const video = useRef()
	const [playVideo, setPlayVideo] = useState(false)

	const videoHandler = _condition => {
		if (_condition) {
			setPlayVideo(false)
			video.current.pause()
		} else {
			setPlayVideo(true)
			video.current.play()
		}
	}
	return (
		<section>
			<div className='blog_text_container my-20'>
				<div
					className={`video-container blog-video-container ${
						playVideo ? 'playing' : ''
					}`}>
					<video ref={video} id='blog-video' width='100%' height='100%'>
						<source src={structure?.video?.value} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
					<button
						id='video-play-btn'
						onClick={() => videoHandler(playVideo)}
						className='play-btn'>
						<FontAwesomeIcon
							icon={!playVideo ? faPlay : faPause}
							size={'xl'}
							color={'text-primary-dark'}
						/>
					</button>
				</div>
			</div>
		</section>
	)
}

export default BlogVideoBox

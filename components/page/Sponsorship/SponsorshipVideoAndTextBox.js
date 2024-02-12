import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState, useEffect } from 'react'

function SponsorshipVideoAndTextBox({ data }) {
	const video = useRef()
	const { structure } = data
	const [playVideo, setPlayVideo] = useState(false)
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	const videoHandler = _condition => {
		if (_condition) {
			setPlayVideo(true)
			video.current.play()
		}
	}
	return (
		<section className='sponsor-ship-bg'>
			<div className='pt-20'>
				<div className='video-container rounded-0'>
					{structure?.video?.value?.includes('vimeo') ? (
						<iframe src={structure?.video?.value}></iframe>
					) : (
						<video
							ref={video}
							src={structure?.video?.value}
							id='blog-video'
							width='100%'
							height='100%'>
							Your browser does not support the video tag.
						</video>
					)}

					{!playVideo && !structure?.video?.value?.includes('vimeo') ? (
						<button
							onClick={() => videoHandler(true)}
							id='video-play-btn'
							className='play-btn'>
							<FontAwesomeIcon icon={faPlay} size={'2xl'} color={'#000'} />
						</button>
					) : null}
				</div>
				<div className='sponsor_container video_text_box'>
					<div className='row mt-20 text-white'>
						<div className='col-12 col-md-6 pe-md-10'>
							<div
								dangerouslySetInnerHTML={{ __html: structure?.leftText?.value }}
								className='text-white fs-base'></div>
						</div>
						<div className='col-12 col-md-6 ps-md-10'>
							<div
								dangerouslySetInnerHTML={{
									__html: structure?.rightText?.value
								}}
								className='text-white fs-base'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SponsorshipVideoAndTextBox

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'

function SponsorshipVideoAndTextBox() {
	const video = useRef()
	const [playVideo, setPlayVideo] = useState(false)

	const videoHandler = _condition => {
		if (_condition) {
			setPlayVideo(true)
			video.current.play()
		}
	}
	return (
		<section className='sponsor-ship-bg'>
			<div className='container pt-20'>
				<div className='video-container rounded-0'>
					<video ref={video} id='blog-video' width='100%' height='100%'>
						<source
							src='http://techslides.com/demos/sample-videos/small.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>

					{!playVideo && (
						<button
							onClick={() => videoHandler(true)}
							id='video-play-btn'
							className='play-btn'>
							<FontAwesomeIcon icon={faPlay} size={'2xl'} color={'#fff'} />
						</button>
					)}
				</div>
				<div className='row mt-20'>
					<div className='col-12 col-md-6'>
						<p className='text-white fs-5'>
							On Nov. 21st 2021, Hisense becomes an Official Sponsor of the FIFA
							world Cup Qatar 2022TM . This partnership creates an exclusive
							connection between FIFA’s worldwide audience and our
							world-renowned technology company in unique and enthralling ways.
						</p>
					</div>
					<div className='col-12 col-md-6'>
						<p className='text-white fs-5'>
							The collaboration, in its 4th year, includes various program
							outlets from on-site engagement opportunities to world-wide
							advertising campaigns to exclusive, on-demand content from past
							FIFA World Cup events through our proprietary Vidaa smart tv
							platform, creating incredible exposure for both organizations.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SponsorshipVideoAndTextBox

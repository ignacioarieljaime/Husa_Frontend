import React from 'react'

const ScrollableVideo = () => {
	return (
		<section>
			<div className='scorllable-video desktop'>
				<div className='video-container full-screen-sticky'>
					<video
						width='100%'
						height='100%'
						muted={true}
						autoplay={true}
						loop={true}
						playsinline={true}
						className='bg-video'>
						<source src='https://player.vimeo.com/external/589889816.hd.mp4?s=3a4d44392283549cd4e6b8172bb7b8342ec44062&amp;profile_id=175' />
					</video>
				</div>
				{/* <div
					className='text-heading full-screen-sticky'
					data-gsap='{"opacity": 1, "duration": 15, "delay": 0}'>
					<div className='line1'>
						Meet the L9G TriChroma Laser TV. Inspired by a world of incredible
						color. A true feast for your eyes at a scale that makes everything
						feel brand new.
					</div>
					<div className='line2'>From $5,499</div>
				</div>
				<div
					className='gradient-container ttanimates'
					data-gsaptarget='.section1'>
					<div className='gradient-blank'></div>
					<div className='gradient'></div>
				</div> */}
			</div>
		</section>
	)
}

export default ScrollableVideo

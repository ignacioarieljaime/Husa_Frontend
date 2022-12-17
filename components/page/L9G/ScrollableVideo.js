import React, { useEffect, useState } from 'react'

import { useParallax, ParallaxProvider } from 'react-scroll-parallax'

const ScrollableVideo = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<ScrollableVideoContainer structure={structure} />
		</ParallaxProvider>
	)
}

const ScrollableVideoContainer = ({ structure }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])

	const textRef = useParallax({
		speed: 10,
		translateY: [100, -120],
		opacity: [0.3, 1]
	})

	return (
		<section className='l9g'>
			<div className='scorllable-video desktop'>
				<div className='video-container full-screen-sticky'>
					<video
						width='100%'
						height='100%'
						muted={true}
						autoPlay={true}
						loop={true}
						playsInline={true}
						className='bg-video'>
						<source src={structure?.video?.value} />
					</video>
				</div>
				<div className='text-heading full-screen-sticky'>
					<div
						className='line'
						ref={textRef.ref}
						dangerouslySetInnerHTML={{ __html: text }}></div>
				</div>
			</div>
		</section>
	)
}

export default ScrollableVideo

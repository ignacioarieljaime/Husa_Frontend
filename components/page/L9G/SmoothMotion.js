import { useWindowSize } from 'hooks/useWindowSize'
import React, { useRef, useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import { useParallax, ParallaxProvider } from 'react-scroll-parallax'

const SmoothMotion = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<SmoothMotionContainer structure={structure} />
		</ParallaxProvider>
	)
}

const SmoothMotionContainer = ({ structure }) => {
	const windowSize = useWindowSize()
	const [position, setPosition] = useState({ x: window.innerWidth / 10, y: 0 })
	// let position = { x: window.innerWidth / 10, y: 0 }
	const bluredImage = useRef()
	let boundaries = {
		left: window.innerWidth / 10,
		right: (window.innerWidth * 9) / 10,
		top: 0,
		bottom: 0
	}

	let slider = useParallax({
		speed: 10,
		translateX: [
			(windowSize[0] ? windowSize[0] : window.innerWidth) / 10 + 'px',
			(windowSize[0] ? windowSize[0] : window.innerWidth) * 0.9 + 'px'
		],
		translateY: [0, 0],
		onChange: el => {
			bluredImage.current.style.width =
				el.progress *
					(windowSize[0] ? windowSize[0] : window.innerWidth) *
					0.8 +
				(windowSize[0] ? windowSize[0] : window.innerWidth) / 10 +
				'px'
		}
	})

	useEffect(() => {
		if (windowSize[0]) {
			bluredImage.current.style.width =
				slider?.element?.progress * windowSize[0] * 0.8 +
				windowSize[0] / 10 +
				'px'
		}
	}, [windowSize])

	return (
		<section className='l9g'>
			<div className='smooth-motion py-4 pb-md-0 pt-md-10 px-0'>
				<div className='px-4 px-md-20 py-6 pt-8 py-md-20'>
					<div
						className='title-card fs-5 fs-md-2hx text-white text-start mb-0 aos-init'
						data-aos='fade'
						data-aos-duration='1000'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
				</div>
				<div className='blured-image-container'>
					<div className='screen'>
						<img
							src={structure?.fadedImage?.src}
							alt={structure?.fadedImage?.alt}
						/>
					</div>
					<Draggable
						axis='x'
						position={position}
						bounds={boundaries}
						// onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}
					>
						<div className='screen-slider' ref={slider?.ref}></div>
					</Draggable>
					<div className='screen overlay' ref={bluredImage}>
						<img src={structure?.image?.src} alt={structure?.image?.alt} />
					</div>
				</div>`
				<div className='px-4 px-md-20 py-4 py-md-20'>
					<div
						className='caption fs-9 fs-md-2 fw-light'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default React.memo(SmoothMotion)

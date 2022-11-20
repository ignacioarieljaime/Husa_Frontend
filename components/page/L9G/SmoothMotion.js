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
	const [position, setPosition] = useState({ x: window.innerWidth / 10, y: 0 })
	const box = useRef()
	let boundaries = {
		left: window.innerWidth / 10,
		right: (window.innerWidth * 9) / 10,
		top: 0,
		bottom: 0
	}

	const slider = useParallax({
		speed: 10,
		translateX: [
			window.innerWidth / 10 + 'px',
			(window.innerWidth * 9) / 10 + 'px'
		],
		translateY: [0, 0]
	})

	useEffect(() => {
		if (slider.element?.progress)
			slider.element.progress = position.x / ((window.innerWidth * 8) / 100)
	}, [position])

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
				<div className='blured-image-container' ref={box}>
					<div className='screen'>
						<img
							src={structure?.fadedImage?.src}
							alt={structure?.fadedImage?.alt}
						/>
					</div>
					<Draggable
						axis='x'
						position={{ x: window.innerWidth / 10, y: 0 }}
						bounds={boundaries}
						onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}>
						<div className='screen-slider' ref={slider.ref}></div>
					</Draggable>
					<div
						className='screen overlay'
						style={{
							width: ((window.innerWidth * 8) / 10) * slider.element?.progress
						}}>
						<img src={structure?.image?.src} alt={structure?.image?.alt} />
					</div>
				</div>
				<div className='px-4 px-md-20 py-4 py-md-20'>
					<div
						className='caption mw-md-50 fs-9 fs-md-2 fw-light'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default React.memo(SmoothMotion)

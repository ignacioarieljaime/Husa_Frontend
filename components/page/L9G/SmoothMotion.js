import React, { useRef, useState, useEffect } from 'react'
import Draggable from 'react-draggable'

const SmoothMotion = ({ data: { structure } }) => {
	const [position, setPosition] = useState({ x: 330, y: 0 })
	let boundaries = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	}

	const yOffset = 0
	const slider = useRef()
	const box = useRef()

	let tempPosition = { x: 330, y: 0 }

	const trackOffset = () => {
		yOffset = window.scrollY
	}

	const trackPos = data => {
		tempPosition = { ...data }
	}

	const changeSliderPos = () => {
		if (yOffset > window.scrollY) {
			trackPos({
				x:
					tempPosition.x - 70 >= boundaries.left
						? tempPosition.x - 70
						: boundaries.left,
				y: 0
			})
		} else {
			trackPos({
				x:
					tempPosition.x + 70 <= boundaries.right
						? tempPosition.x + 70
						: boundaries.right,
				y: 0
			})
		}
		trackOffset()
		configurePosition(tempPosition)
	}

	const configurePosition = newPos => {
		setPosition({ x: newPos.x, y: newPos.y })
	}

	useEffect(() => {
		boundaries = {
			...boundaries,
			right: box.current.clientWidth - 20
		}
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					document.addEventListener('wheel', changeSliderPos)
				} else {
					document.removeEventListener('wheel', changeSliderPos)
				}
			},
			{
				threshold: 0.25
			}
		)
		observer.observe(box.current)
	}, [])

	return (
		<section className='l9g'>
			<div className='smooth-motion py-4 pb-md-0 pt-md-10 px-0'>
				<div className='px-4 px-md-20 py-6 pt-8 py-md-20'>
					<h3
						className='fs-5 fs-md-2hx text-white text-start mb-0 aos-init aos-animate'
						data-aos='fade'
						data-aos-duration='1000'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
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
						position={position}
						bounds={boundaries}
						onDrag={(e, data) => {
							trackPos(data)
							configurePosition(data)
						}}>
						<div className='screen-slider' ref={slider}></div>
					</Draggable>
					<div className='screen overlay' style={{ width: position.x }}>
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

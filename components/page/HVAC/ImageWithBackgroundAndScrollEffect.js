import Aos from 'aos'
import CustomImage from 'components/common/CustomImage'
import React, { useState, useEffect } from 'react'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'

const ImageWithBackgroundAndScrollEffect = ({ data: { structure } }) => (
	<ParallaxProvider>
		<ImageWithBackgroundAndScrollEffectContainer structure={structure} />
	</ParallaxProvider>
)

const ImageWithBackgroundAndScrollEffectContainer = ({ structure }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		Aos.refresh()
		setText(structure?.text?.value)
	}, [])
	const parallaxController = useParallaxController()

	const ref = useParallax({
		speed: 10,
		translateY: [0, -10]
	})
	return (
		<section>
			<div className='hvac_image_box'>
				<div className='image_container'>
					<img
						src={structure?.backgroundImage?.src}
						alt={structure?.backgroundImage?.alt}
						ref={ref.ref}
						width={'100%'}
						height={'110%'}
						onLoad={() => parallaxController.update()}
					/>
				</div>
				<div
					className='content'
					data-aos='fade'
					data-aos-delay='200'
					data-aos-duration='1000'>
					<h3
						data-aos='fade-up'
						data-aos-delay='1500'
						data-aos-duration='1000'
						className='text'
						dangerouslySetInnerHTML={{ __html: text }}></h3>
				</div>
			</div>
		</section>
	)
}

export default ImageWithBackgroundAndScrollEffect

import Link from 'next/link'
import React from 'react'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'
import CustomImage from '../../common/CustomImage'

const BlockKitchenHero = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<BlockKitchenContainer structure={structure} />
		</ParallaxProvider>
	)
}

const BlockKitchenContainer = ({ structure }) => {
	const parallaxController = useParallaxController()

	const lineRef = useParallax({
		speed: 5,
		scaleY: [0, 1],
		translateY: ['-50px', '50px']
	})

	const imageRef = useParallax({
		speed: 10,
		translateY: ['150px', '-50px']
	})

	return (
		<section>
			<div className='intro-section black-parallax-box'>
				<div className='row align-items-center mx-0'>
					<div className='col-12 col-md-6 col-lg-7 ps-0 pl-4 pl-md-0 image'>
						{/* <CustomImage
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							wrapperWidth={'100%'}
							style={{ position: 'relative', top: '60px' }}
							wrapperHeight={'460px'}
						/> */}
						<img
							ref={imageRef}
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							onLoad={() => parallaxController.update()}
						/>
					</div>
					<div className='col-12 col-md-5 content'>
						<div className='p-1'>
							<h5 className='tiny-title'>{structure?.tinyTitle?.value}</h5>
							<h3
								className='subtitle fs-2x'
								dangerouslySetInnerHTML={{ __html: structure?.text?.value }}>
								{/* {structure?.title?.value} */}
							</h3>
							<Link
								href={structure?.link?.value ? structure?.link?.value : '/'}>
								<a className='n-btn outline-white transparent d-block w-fit mb-5 mb-md-0'>
									{structure?.link?.title}
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className='line' ref={lineRef.ref}></div>
			</div>
		</section>
	)
}

export default BlockKitchenHero

import React from 'react'
import Link from 'next/link'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'
import CustomImage from '../../common/CustomImage'

const BlockTVHero = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<BlockTVContainer structure={structure} />
		</ParallaxProvider>
	)
}

const BlockTVContainer = ({ structure }) => {
	const parallaxController = useParallaxController()

	const imageRef = useParallax({
		speed: 10,
		translateY: ['50px', '-150px']
	})

	const lineRef = useParallax({
		speed: 5,
		scaleY: [0, 1],
		translateY: ['-50px', '50px']
	})

	return (
		<section>
			<div className='black-parallax-box'>
				<div
					className='title gradient-text fs-5qx fs-xxl-4tx px-4 px-md-0'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
				<div className='row mx-0'>
					<div
						ref={imageRef.ref}
						className='col-12 col-md-6 col-lg-7 ps-0 pl-4 pl-md-0 image'>
						<CustomImage
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							wrapperWidth={'100%'}
							onLoad={() => parallaxController.update()}
							wrapperHeight={'558px'}
						/>
					</div>
					<div className='col-12 col-md-5 content mt-8 mt-md-0'>
						<div className='p-1 p-lg-7'>
							<div
								className='subtitle gradient-text'
								dangerouslySetInnerHTML={{
									__html: structure?.text?.value
								}}></div>
							<Link
								href={structure?.link?.value ? structure?.link?.value : '/'}>
								<a className='n-btn outline-white transparent'>
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

export default BlockTVHero

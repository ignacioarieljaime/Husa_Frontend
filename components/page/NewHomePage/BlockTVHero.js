import React from 'react'
import Link from 'next/link'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'

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
				<h2
					className='title gradient-text fs-5qx fs-xxl-4tx px-4 px-md-0'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}>
					{/* We make <span className='gradient-text'>award </span>
					<span className='gradient-text'>winning</span> TVs. */}
				</h2>
				<div className='row mx-0'>
					<div className='col-12 col-md-6 col-lg-7 ps-0 pl-4 pl-md-0 image'>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							ref={imageRef.ref}
							width='100%'
							onLoad={() => parallaxController.update()}
						/>
					</div>
					<div className='col-12 col-md-6 col-lg-5 col-xxl-4 content mt-8 mt-md-0'>
						<div className='p-1 p-md-7'>
							<h5 className='tiny-title'>
								{/* {structure?.tinyTitle?.value} */}
							</h5>
							<h3
								className='subtitle gradient-text'
								dangerouslySetInnerHTML={{ __html: structure?.text?.value }}>
								{/* Find one (<span className='gradient-text'>or two</span>) made
								just for you. */}
							</h3>
							<p className='description fs-4'>{structure?.paragraph?.value}</p>
							<Link href={structure?.link?.value}>
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

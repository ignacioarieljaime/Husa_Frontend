import Link from 'next/link'
import React from 'react'
import { useParallax, ParallaxProvider } from 'react-scroll-parallax'

const BlockKitchenHero = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<BlockKitchenContainer structure={structure} />
		</ParallaxProvider>
	)
}

const BlockKitchenContainer = ({ structure }) => {
	const lineRef = useParallax({
		speed: 5,
		scaleY: [0, 1],
		translateY: ['-50px', '50px']
	})

	return (
		<section>
			<div className='intro-section black-parallax-box'>
				<div className='row align-items-center mx-0'>
					<div className='col-12 col-md-6 col-lg-7 ps-0 pl-4 pl-md-0 image'>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							width='100%'
						/>
					</div>
					<div className='col-12 col-md-6 col-lg-5 col-xxl-4 content'>
						<div className='p-1 p-md-7 ps-md-13'>
							<h5 className='tiny-title'>{structure?.tinyTitle?.value}</h5>
							<h3
								className='subtitle fs-2x'
								dangerouslySetInnerHTML={{ __html: structure?.text?.value }}>
								{/* {structure?.title?.value} */}
							</h3>
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

export default BlockKitchenHero

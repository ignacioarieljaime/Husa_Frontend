import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'
import CustomImage from '../../common/CustomImage'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const BlockKitchenHero = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<BlockKitchenContainer structure={structure} />
		</ParallaxProvider>
	)
}

const BlockKitchenContainer = ({ structure }) => {
	const parallaxController = useParallaxController()
	const [text, setText] = useState(null)

	useEffect(() => {
		setText(structure?.text?.value)
	}, [])

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
					<div
						ref={imageRef.ref}
						className='col-12 col-md-6 col-lg-7 ps-0 pl-4 pl-md-0 image'>
						{structure?.image?.src && (
							<CustomImage
								src={structure?.image?.src}
								alt={structure?.image?.alt}
								wrapperWidth={'100%'}
								style={{ position: 'relative' }}
								onLoad={() => parallaxController.update()}
							/>
						)}
					</div>
					<div className='col-12 col-md-5 content'>
						<div className='p-1'>
							<h5 className='tiny-title'>{structure?.tinyTitle?.value}</h5>
							<div
								className='subtitle fs-2x mb-7'
								dangerouslySetInnerHTML={{ __html: text }}>
								{/* {structure?.title?.value} */}
							</div>

							<Link
								target={structure?.link?.target ? structure?.link?.target : '_self'}
								href={structure?.link?.value ? structure?.link?.value : '/'}>
								<a className='n-btn outline-white transparent d-block w-fit mb-5 mb-md-0'>
									{structure?.link?.title}
									{structure?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
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

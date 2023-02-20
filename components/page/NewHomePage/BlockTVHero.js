import React, { useEffect, useState } from 'react'
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
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])
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
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
				<div className='row mx-0'>
					<div
						ref={imageRef.ref}
						className='col-12 col-lg-7 ps-0 pl-4 pl-lg-0 image'>
						{content?.image?.src && (
							<CustomImage
								src={content?.image?.src}
								alt={content?.image?.alt}
								onLoad={() => parallaxController.update()}
								wrapperWidth={'100%'}
							/>
						)}{' '}
					</div>
					<div className='col-12 col-lg-5 content mt-8 mt-lg-0'>
						<div className='p-1 p-lg-7'>
							<div
								className='subtitle gradient-text'
								dangerouslySetInnerHTML={{
									__html: content?.text?.value
								}}></div>
							<Link href={content?.link?.value ? content?.link?.value : '/'}>
								<a className='n-btn outline-white transparent d-block w-fit mt-4'>
									{content?.link?.title}
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

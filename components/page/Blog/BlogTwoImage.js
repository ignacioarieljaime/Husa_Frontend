import React from 'react'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'

const BlogTwoImage = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<BlogTwoImageContainer structure={structure} />
		</ParallaxProvider>
	)
}
function BlogTwoImageContainer({ structure }) {
	const parallaxController = useParallaxController()

	const image1Ref = useParallax({
		speed: 10,
		translateY: ['0px', '-50px']
	})
	const image2Ref = useParallax({
		speed: 10,
		translateY: ['-50px', '0px']
	})
	return (
		<section>
			<div className='mb-20'>
				<div className='row double-banner  mx-0'>
					<div className='col-12 col-md-6 px-0 header-secondary overflow-hidden'>
						<img
							src={structure?.image1?.src}
							alt={structure?.image1?.alt}
							width='100%'
							height='110%'
							ref={image1Ref.ref}
							onLoad={() => parallaxController.update()}
						/>
					</div>
					<div className='col-12 col-md-6 px-0 header-secondary overflow-hidden'>
						<img
							src={structure?.image2?.src}
							alt={structure?.image2?.alt}
							width='100%'
							height='110%'
							ref={image2Ref.ref}
							onLoad={() => parallaxController.update()}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogTwoImage

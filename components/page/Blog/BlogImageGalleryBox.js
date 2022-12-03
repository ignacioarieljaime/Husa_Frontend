import React from 'react'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'

const BlogImageGalleryBox = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<BlogImageGalleryBoxContainer structure={structure} />
		</ParallaxProvider>
	)
}
function BlogImageGalleryBoxContainer({ structure }) {
	const parallaxController = useParallaxController()

	const image1Ref = useParallax({
		speed: 10,
		translateY: [-17, 13],
		translateX: [17, -20]
	})

	const image2Ref = useParallax({
		speed: 10,
		translateY: [17, -13],
		translateX: [20, -13]
	})

	const image3Ref = useParallax({
		speed: 10,
		translateY: [-17, 13],
		translateX: [17, -13]
	})

	const image4Ref = useParallax({
		speed: 10,
		translateY: [17, -13],
		translateX: [-17, 13]
	})

	const image5Ref = useParallax({
		speed: 10,
		translateY: [17, -13],
		translateX: [-17, 13]
	})

	const image6Ref = useParallax({
		speed: 10,
		translateY: [-17, 13],
		translateX: [-17, 13]
	})

	return (
		<section>
			<div className='container-fluid photo-gallery overflow-hidden'>
				<div className='row align-items-stretch h-100'>
					<div className='col-12 col-md-6'>
						<div className='row align-items-stretch justify-content-center first'>
							<div className='col-3 col-sm-2 align-self-end mb-20'>
								<img
									src={structure?.image1?.src}
									alt={structure?.image1?.alt}
									width='100%'
									ref={image1Ref.ref}
									onLoad={() => parallaxController.update()}
								/>
							</div>
							<div className='col-4'>
								<img
									src={structure?.image2?.src}
									alt={structure?.image2?.alt}
									width='100%'
									ref={image2Ref.ref}
									onLoad={() => parallaxController.update()}
								/>
							</div>
							<div className='col-6 align-self-end'>
								<img
									src={structure?.image3?.src}
									alt={structure?.image3?.alt}
									width='100%'
									ref={image3Ref.ref}
									onLoad={() => parallaxController.update()}
								/>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<div className='row align-items-stretch justify-content-between seconde'>
							<div className='col-6'>
								<img
									src={structure?.image4?.src}
									alt={structure?.image4?.alt}
									width='100%'
									ref={image4Ref.ref}
									onLoad={() => parallaxController.update()}
								/>
							</div>
							<div className='col-5 align-self-center mb-n20'>
								<img
									src={structure?.image5?.src}
									alt={structure?.image5?.alt}
									width='100%'
									ref={image5Ref.ref}
									onLoad={() => parallaxController.update()}
								/>
							</div>
							<div className='col-3 col-md-2 offset-3 offset-md-5'>
								<img
									src={structure?.image6?.src}
									alt={structure?.image6?.alt}
									width='100%'
									ref={image6Ref.ref}
									onLoad={() => parallaxController.update()}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogImageGalleryBox

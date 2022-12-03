import React from 'react'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'

const BlogImageAndTextBox = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<BlogImageAndTextBoxContainer structure={structure} />
		</ParallaxProvider>
	)
}

function BlogImageAndTextBoxContainer({ structure }) {
	const parallaxController = useParallaxController()

	const image1Ref = useParallax({
		speed: 10,
		translateY: ['90px', '-170px']
	})

	const image2Ref = useParallax({
		speed: 7,
		translateY: ['50px', '-70px']
	})
	return (
		<section>
			<div className='container my-20 py-5 py-lg-20'>
				<div className='row justify-content-between align-items-center mt-20'>
					<div className='col-12 col-lg-6 mb-20 mb-lg-0'>
						<div className='row justify-content-between align-items-center'>
							<div className='col-7 mt-10'>
								<img
									src={structure?.image1?.src}
									alt={structure?.image1?.alt}
									className='w-100 rounded-10px'
									ref={image1Ref.ref}
									onLoad={() => parallaxController.update()}
								/>
							</div>
							<div className='col-5 align-self-start mt-n10'>
								<img
									src={structure?.image2?.src}
									alt={structure?.image2?.alt}
									className='w-100 rounded-10px'
									ref={image2Ref.ref}
									onLoad={() => parallaxController.update()}
								/>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
						<article className='blog-article'>
							<div
								dangerouslySetInnerHTML={{
									__html: structure?.text?.value
								}}></div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogImageAndTextBox

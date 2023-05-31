import React, { useEffect, useState } from 'react'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'

const BlogListHead = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<BlogListHeadContainer structure={structure} />
		</ParallaxProvider>
	)
}
function BlogListHeadContainer({ structure }) {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	const parallaxController = useParallaxController()

	const image1Ref = useParallax({
		speed: 10,
		translateY: ['150px', '0px']
	})
	const image2Ref = useParallax({
		speed: 10,
		translateY: ['0px', '30px']
	})
	return (
		<section>
			<div className='blog-header blog-header-list  mt-10 mb-7 mb-sm-12 mb-md-20'>
				<div className='container-fluid container-xxl px-7 ps-md-6 mb-7 mb-md-13'>
					<div className='row mb-14 mb-md-0'>
						<div className='col-4 col-sm-6 align-self-center align-self-md-start ms-xxl-n5'>
							<img
								src={structure?.image1?.src}
								alt={structure?.image1?.alt}
								className='tv-floating-img'
								style={{ objectFit: 'cover' }}
								ref={image1Ref.ref}
								onLoad={() => parallaxController.update()}
							/>
						</div>
						<div className='col-8 col-sm-6 text-end'>
							<img
								src={structure?.image2?.src}
								alt={structure?.image2?.alt}
								className='sea-floating-img'
								style={{ objectFit: 'cover' }}
								ref={image2Ref.ref}
								onLoad={() => parallaxController.update()}
							/>
						</div>
					</div>
					<div
						className='header-text header-gradient-radial-text floating-text'
						dangerouslySetInnerHTML={{ __html: text }}></div>
				</div>
			</div>
		</section>
	)
}

export default BlogListHead

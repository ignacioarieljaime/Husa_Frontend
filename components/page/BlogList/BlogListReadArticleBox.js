import React from 'react'
import Link from 'next/link'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'
const BlogListReadArticleBox = ({ data: { structure } }) => {
	return (
		<ParallaxProvider>
			<BlogListReadArticleBoxContainer structure={structure} />
		</ParallaxProvider>
	)
}
function BlogListReadArticleBoxContainer({ structure }) {
	const parallaxController = useParallaxController()

	const imageRef = useParallax({
		speed: 10,
		translateY: [-3, 3]
	})

	return (
		<section>
			<div className='container'>
				<div className='row mb-20 pb-0 pb-md-20'>
					<div className='col-12'>
						<figure className='blog-article-box-full'>
							<div className='header-secondary image-box'>
								<Link
									href={structure?.link?.value ? structure?.link?.value : '/'}>
									<a>
										<img
											src={structure?.image?.src}
											alt={structure?.image?.alt}
											width='100%'
											ref={imageRef.ref}
											onLoad={() => parallaxController.update()}
										/>
									</a>
								</Link>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									<div className='col-12 col-md-9 order-2 order-md-1 mb-8'>
										<h3 className='fs-3 mb-0'>{structure?.title?.value}</h3>
									</div>
									<div className='col-12 col-md-3 order-1 order-md-2 text-start text-md-end mb-3 mb-md-8'>
										<Link
											href={
												structure?.tagLink?.value
													? structure?.tagLink?.value
													: '/'
											}>
											<a className='text-primary-dark text-decoration-none'>
												{structure?.tagLink?.title}
											</a>
										</Link>
									</div>
									<div className='col-12 order-3 text-start'>
										<Link
											href={
												structure?.link?.value ? structure?.link?.value : '/'
											}>
											<a className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
												{structure?.link?.title}
											</a>
										</Link>
									</div>
								</div>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogListReadArticleBox

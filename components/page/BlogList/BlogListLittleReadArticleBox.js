import Link from 'next/link'
import React from 'react'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'

const BlogListLittleReadArticleBox = ({ data: { largePost, smallPost } }) => {
	return (
		<ParallaxProvider>
			<BlogListLittleReadArticleBoxContainer
				largePost={largePost}
				smallPost={smallPost}
			/>
		</ParallaxProvider>
	)
}
function BlogListLittleReadArticleBoxContainer({ largePost, smallPost }) {
	const parallaxController = useParallaxController()

	const image1Ref = useParallax({
		speed: 7,
		translateY: [22, -22]
	})

	const image2Ref = useParallax({
		speed: 10,
		translateY: [15, -15]
	})
	return (
		<section>
			<div>
				<div className='row  justify-content-between align-items-start pb-0 pb-md-20'>
					<div className='article_container col-12 col-md-4 mb-20'>
						<figure className='blog-article-box' ref={image1Ref.ref}>
							<div className='image-box'>
								<Link
									href={
										smallPost?.value?.link?.value
											? smallPost?.value?.link?.value
											: '/'
									}>
									<a>
										<img
											src={smallPost?.value?.image?.src}
											alt={smallPost?.value?.image?.alt}
											width='100%'
											height='100%'
											onLoad={() => parallaxController.update()}
										/>
									</a>
								</Link>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									<div className='col-12 text-start mb-3'>
										<Link
											href={
												smallPost?.value?.tagLink?.value
													? smallPost?.value?.tagLink?.value
													: '/'
											}>
											<a className='text-primary-dark text-decoration-none'>
												{smallPost?.value?.tagLink?.title}
											</a>
										</Link>
									</div>
									<div className='col-12 mb-8'>
										<h3 className='fs-3 mb-0'>
											{smallPost?.value?.title?.value}
										</h3>
									</div>
									<div className='col-12 order-3 text-start'>
										<Link
											href={
												smallPost?.value?.link?.value
													? smallPost?.value?.link?.value
													: '/'
											}>
											<a className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
												{smallPost?.value?.link?.title}
											</a>
										</Link>
									</div>
								</div>
							</figcaption>
						</figure>
					</div>
					<div className='article_container col-12 col-md-6 mb-20'>
						<figure ref={image2Ref.ref} className='blog-article-box'>
							<div className='image-box'>
								<Link
									href={
										largePost?.value?.link?.value
											? largePost?.value?.link?.value
											: '/'
									}>
									<a>
										<img
											src={largePost?.value?.image?.src}
											alt={largePost?.value?.image?.alt}
											width='100%'
											height='100%'
											onLoad={() => parallaxController.update()}
										/>
									</a>
								</Link>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									<div className='col-12 text-start mb-3'>
										<Link
											href={
												largePost?.value?.tagLink?.value
													? largePost?.value?.tagLink?.value
													: '/'
											}>
											<a className='text-primary-dark text-decoration-none'>
												{largePost?.value?.tagLink?.title}
											</a>
										</Link>
									</div>
									<div className='col-12 mb-8'>
										<h3 className='fs-3 mb-0'>
											{largePost?.value?.title?.value}
										</h3>
									</div>
									<div className='col-12 order-3 text-start'>
										<Link
											href={
												largePost?.value?.link?.value
													? largePost?.value?.link?.value
													: '/'
											}>
											<a className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
												{largePost?.value?.link?.title}
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

export default BlogListLittleReadArticleBox

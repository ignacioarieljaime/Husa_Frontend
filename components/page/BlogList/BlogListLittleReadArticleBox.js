import Link from 'next/link'
import React from 'react'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const BlogListLittleReadArticleBox = ({
	index,
	data: { largePost, smallPost }
}) => {
	return (
		<ParallaxProvider>
			<BlogListLittleReadArticleBoxContainer
				index={index}
				largePost={largePost}
				smallPost={smallPost}
			/>
		</ParallaxProvider>
	)
}
function BlogListLittleReadArticleBoxContainer({
	largePost,
	smallPost,
	index
}) {
	const parallaxController = useParallaxController()

	const card1Ref = useParallax({
		speed: 7,
		translateY: [10, -25]
	})

	const card2Ref = useParallax({
		speed: 10,
		translateY: [10, -10]
	})
	return (
		<section>
			<div className='blog_custom_conrainer'>
				<div
					className={`row  justify-content-between align-items-start pb-0 pb-md-20 custom_conrainer ${
						index % 2 !== 0 ? 'flex-row-reverse' : null
					}`}>
					<div className='article_container col-12 col-md-4 mb-20'>
						<figure className='blog-article-box' ref={card1Ref.ref}>
							<div className='image-box'>
								<Link
									target={
										smallPost?.value?.link?.target
											? smallPost?.value?.link?.target
											: '_self'
									}
									href={
										smallPost?.value?.link?.value
											? smallPost?.value?.link?.value
											: '/'
									}>
									<a
										target={
											smallPost?.value?.link?.target
												? smallPost?.value?.link?.target
												: '_self'
										}>
										<img
											src={smallPost?.value?.image?.src}
											alt={smallPost?.value?.image?.alt}
											width='100%'
											height='100%'
											style={{ objectFit: 'cover' }}
											onLoad={() => parallaxController.update()}
										/>
									</a>
								</Link>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									{/* <div className='col-12 text-start mb-3'>
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
									</div> */}
									<div className='col-12 mb-8'>
										<h3 className='fs-3 mb-0'>
											{smallPost?.value?.title?.value}
										</h3>
									</div>
									<div className='col-12 order-3 text-start'>
										<Link
											target={
												smallPost?.value?.link?.target
													? smallPost?.value?.link?.target
													: '_self'
											}
											href={
												smallPost?.value?.link?.value
													? smallPost?.value?.link?.value
													: '/'
											}>
											<a
												target={
													smallPost?.value?.link?.target
														? smallPost?.value?.link?.target
														: '_self'
												}
												className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
												{smallPost?.value?.link?.title}
												{smallPost?.value?.link?.target === '_blank' && (
													<img
														style={{ marginLeft: '10px', objectFit: 'cover' }}
														src={OpenPageOnNewTab.src}
													/>
												)}
											</a>
										</Link>
									</div>
								</div>
							</figcaption>
						</figure>
					</div>
					<div className='article_container col-12 col-md-6 mb-20'>
						<figure className='blog-article-box' ref={card2Ref.ref}>
							<div className='image-box'>
								<Link
									target={
										largePost?.value?.link?.target
											? largePost?.value?.link?.target
											: '_self'
									}
									href={
										largePost?.value?.link?.value
											? largePost?.value?.link?.value
											: '/'
									}>
									<a
										target={
											largePost?.value?.link?.target
												? largePost?.value?.link?.target
												: '_self'
										}>
										<img
											src={largePost?.value?.image?.src}
											alt={largePost?.value?.image?.alt}
											style={{ objectFit: 'cover' }}
											width='100%'
											height='100%'
											onLoad={() => parallaxController.update()}
										/>
									</a>
								</Link>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									{/* <div className='col-12 text-start mb-3'>
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
									</div> */}
									<div className='col-12 mb-8'>
										<h3 className='fs-3 mb-0'>
											{largePost?.value?.title?.value}
										</h3>
									</div>
									<div className='col-12 order-3 text-start'>
										<Link
											target={
												largePost?.value?.link?.target
													? largePost?.value?.link?.target
													: '_self'
											}
											href={
												largePost?.value?.link?.value
													? largePost?.value?.link?.value
													: '/'
											}>
											<a
												target={
													largePost?.value?.link?.target
														? largePost?.value?.link?.target
														: '_self'
												}
												className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
												{largePost?.value?.link?.title}
												{largePost?.value?.link?.target === '_blank' && (
													<img
														style={{ marginLeft: '10px', objectFit: 'cover' }}
														src={OpenPageOnNewTab.src}
													/>
												)}
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

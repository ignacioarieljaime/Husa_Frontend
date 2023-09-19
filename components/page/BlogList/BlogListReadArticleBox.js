import React from 'react'
import Link from 'next/link'
import {
	useParallax,
	useParallaxController,
	ParallaxProvider
} from 'react-scroll-parallax'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

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
		translateY: [12, -12]
	})

	return (
		<section>
			<div className='blog_text_container'>
				<div className='row mb-8 mb-md-10'>
					<div className='col-12'>
						<figure className='blog-article-box-full' ref={imageRef.ref}>
							<div className='image-box'>
								<Link
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									href={structure?.link?.value ? structure?.link?.value : '/'}>
									<a
										target={
											structure?.link?.target
												? structure?.link?.target
												: '_self'
										}
										className='d-block'>
										<img
											src={structure?.image?.src}
											alt={structure?.image?.alt}
											style={{ objectFit: 'cover' }}
											width='100%'
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
										{/* <Link
											href={
												structure?.tagLink?.value
													? structure?.tagLink?.value
													: '/'
											}> */}
										<a className='text-primary-dark text-decoration-none'>
											{structure?.tag?.value}
										</a>
										{/* </Link> */}
									</div>
									<div className='col-12 order-3 text-start'>
										<Link
											target={
												structure?.link?.target
													? structure?.link?.target
													: '_self'
											}
											href={
												structure?.link?.value ? structure?.link?.value : '/'
											}>
											<a
												target={
													structure?.link?.target
														? structure?.link?.target
														: '_self'
												}
												style={{ display: 'block' }}
												className='n-btn blog-primary medium w-fit h-fit rounded-5 text-uppercase'>
												{structure?.link?.title}
												{structure?.link?.target === '_blank' && (
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

export default BlogListReadArticleBox

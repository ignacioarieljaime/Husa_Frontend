import React from 'react'

function BlogListLittleReadArticleBox({ data: { largePost, smallPost } }) {
	return (
		<section>
			<div className='container'>
				<div className='row  justify-content-between align-items-start pb-0 pb-md-20'>
					<div className='col-12 col-md-4 mb-20'>
						<figure className='blog-article-box'>
							<div className='image-box'>
								<a href='#'>
									<img
										src={smallPost?.image?.src}
										alt={smallPost?.image?.alt}
										width='100%'
										height='100%'
									/>
								</a>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									<div className='col-12 text-start mb-3'>
										<a
											href={smallPost?.tagLink?.value}
											className='text-primary-dark'>
											{smallPost?.tagLink?.title}
										</a>
									</div>
									<div className='col-12 mb-8'>
										<h3 className='fs-3 mb-0'>{smallPost?.title?.value}</h3>
									</div>
									<div className='col-12 order-3 text-start'>
										<a
											href={smallPost?.link?.value}
											className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
											{smallPost?.link?.title}
										</a>
									</div>
								</div>
							</figcaption>
						</figure>
					</div>
					<div className='col-12 col-md-6 mb-20'>
						<figure className='blog-article-box'>
							<div className='image-box'>
								<a href='#'>
									<img
										src={largePost?.image?.src}
										alt={largePost?.image?.alt}
										width='100%'
										height='100%'
									/>
								</a>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									<div className='col-12 text-start mb-3'>
										<a
											href={largePost?.tagLink?.value}
											className='text-primary-dark'>
											{largePost?.tagLink?.title}
										</a>
									</div>
									<div className='col-12 mb-8'>
										<h3 className='fs-3 mb-0'>{largePost?.title?.value}</h3>
									</div>
									<div className='col-12 order-3 text-start'>
										<a
											href={largePost?.link?.value}
											className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
											{largePost?.link?.title}
										</a>
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

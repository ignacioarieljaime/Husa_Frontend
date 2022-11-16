import React from 'react'

// image
import HouseImage from 'public/assets/images/blog/house.png'

function BlogListReadArticleBox({ data: { structure } }) {
	return (
		<section>
			<div className='container'>
				<div className='row mb-20 pb-0 pb-md-20'>
					<div className='col-12'>
						<figure className='blog-article-box'>
							<div className='header-secondary image-box'>
								<a href='#'>
									<img
										src={structure?.image?.src}
										alt={structure?.image?.alt}
										width='100%'
										height='100%'
									/>
								</a>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									<div className='col-12 col-md-9 order-2 order-md-1 mb-8'>
										<h3 className='fs-3 mb-0'>{structure?.title?.value}</h3>
									</div>
									<div className='col-12 col-md-3 order-1 order-md-2 text-start text-md-end mb-3 mb-md-8'>
										<a
											href={structure?.tagLink?.value}
											className='text-primary-dark'>
											{structure?.tagLink?.title}
										</a>
									</div>
									<div className='col-12 order-3 text-start'>
										<a
											href={structure?.link?.value}
											className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
											{structure?.link?.title}
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

export default BlogListReadArticleBox

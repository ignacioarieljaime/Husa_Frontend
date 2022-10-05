import React from 'react'

// image
import HouseImage from './../../../public/assets/images/blog/house.png'

function BlogListReadArticleBox() {
	return (
		<section>
			<div className='container'>
				<div className='row mb-20 pb-0 pb-md-20'>
					<div className='col-12'>
						<figure className='article-box'>
							<div className='header-secondary image-box'>
								<a href='#'>
									<img
										src={HouseImage.src}
										alt='featured image'
										width='100%'
										height='100%'
									/>
								</a>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									<div className='col-12 col-md-9 order-2 order-md-1 mb-8'>
										<h3 className='fs-3 mb-0'>
											TV Room Feng Shui Tips with Cliff Tan
										</h3>
									</div>
									<div className='col-12 col-md-3 order-1 order-md-2 text-start text-md-end mb-3 mb-md-8'>
										<a href='#' className='text-primary-dark'>
											{' '}
											Soundbars{' '}
										</a>
									</div>
									<div className='col-12 order-3 text-start'>
										<a
											href='#'
											className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
											Read article
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

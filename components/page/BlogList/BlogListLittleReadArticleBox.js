import React from 'react'

// image
import DessertsImage from 'public/assets/images/blog/desserts.png'
import CakeImage from 'public/assets/images/blog/cake.png'

function BlogListLittleReadArticleBox() {
	return (
		<section>
			<div className='container'>
				<div className='row justify-content-between align-items-start pb-0 pb-md-20'>
					<div className='col-12 col-md-4 mb-20'>
						<figure className='article-box'>
							<div className='image-box'>
								<a href='#'>
									<img
										src={DessertsImage.src}
										alt='featured image'
										width='100%'
										height='100%'
									/>
								</a>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									<div className='col-12 text-start mb-3'>
										<a href='#' className='text-primary-dark'>
											{' '}
											Soundbars{' '}
										</a>
									</div>
									<div className='col-12 mb-8'>
										<h3 className='fs-3 mb-0'>
											TV Room Feng Shui Tips with Cliff Tan
										</h3>
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
					<div className='col-12 col-md-6 mb-20'>
						<figure className='article-box'>
							<div className='image-box'>
								<a href='#'>
									<img
										src={CakeImage.src}
										alt='featured image'
										width='100%'
										height='100%'
									/>
								</a>
							</div>
							<figcaption>
								<div className='row justify-content-between align-items-center mt-5'>
									<div className='col-12 text-start mb-3'>
										<a href='#' className='text-primary-dark'>
											{' '}
											Soundbars{' '}
										</a>
									</div>
									<div className='col-12 mb-8'>
										<h3 className='fs-3 mb-0'>
											TV Room Feng Shui Tips with Cliff Tan
										</h3>
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

export default BlogListLittleReadArticleBox

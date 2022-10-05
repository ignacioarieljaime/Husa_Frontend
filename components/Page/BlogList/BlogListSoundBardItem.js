import React from 'react'

// image
import Image from './../../../public/assets/images/blog/woman.png'

function BlogListSoundBardItem() {
	return (
		<div className='row align-items-center py-8 border-bottom mx-0 article-box'>
			<figure className='col-12 col-md-9 mb-0 px-0'>
				<div className='row justify-content-between align-items-center'>
					<div className='col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
						<div className='image-box'>
							<a href='#'>
								<img src={Image.src} alt='featured image' width='100%' />
							</a>
						</div>
					</div>
					<figcaption className='col-12 col-md-8'>
						<div className='text-start mb-3'>
							<a href='#' className='text-primary-dark'>
								{' '}
								Soundbars{' '}
							</a>
						</div>
						<div className='mb-8 mb-md-0'>
							<h3 className='fs-3 mb-0'>TV Room Feng Shui Tips with Cliff Tan</h3>
						</div>
					</figcaption>
				</div>
			</figure>
			<div className='col-12 col-md-3 px-0'>
				<div className='text-start text-md-end'>
					<a
						href='#'
						className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
						Read article
					</a>
				</div>
			</div>
		</div>
	)
}

export default BlogListSoundBardItem

import React from 'react'

// image
import MiniTvImage from 'public/assets/images/blog/mini-tv-img.png'
import SeaImage from 'public/assets/images/blog/sea.png'

function BlogListHead() {
	return (
		<section>
			<div className='blog-header blog-header-list mt-10'>
				<div className='container-fluid container-xxl ps-6 mb-13'>
					<div className='row mb-14 mb-md-0'>
						<div className='col-4 col-sm-6 align-self-center align-self-md-start ms-xxl-n5'>
							<img
								src={MiniTvImage.src}
								alt='featured image'
								className='tv-floating-img'
							/>
						</div>
						<div className='col-8 col-sm-6 text-end'>
							<img
								src={SeaImage.src}
								alt='featured image'
								className='sea-floating-img'
							/>
						</div>
					</div>
					<h6 className='header-text floating-text'>
						Stories &
						<span className='header-gradient-text d-block'>Inspiration</span>
					</h6>
				</div>
			</div>
		</section>
	)
}

export default BlogListHead

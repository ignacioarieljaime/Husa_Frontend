import React from 'react'

// image
import MiniTvImage from './../../../../public/assets/images/blog/mini-tv-img.png'
import SeaImage from './../../../../public/assets/images/blog/sea.png'

function BlogListHead() {
	return (
		<section>
			<div class='blog-header mt-10'>
				<div class='container-fluid container-xxl px-6 mb-13'>
					<div class='row mb-14 mb-md-0'>
						<div class='col-4 col-sm-6 align-self-center align-self-md-start ms-xxl-n5'>
							<img
								src={MiniTvImage.src}
								alt='featured image'
								class='tv-floating-img'
							/>
						</div>
						<div class='col-8 col-sm-6 text-end'>
							<img
								src={SeaImage.src}
								alt='featured image'
								class='sea-floating-img'
							/>
						</div>
					</div>
					<h1 class='header-text floating-text'>
						Stories &
						<span class='header-gradient-text d-block'>Inspiration</span>
					</h1>
				</div>
			</div>
		</section>
	)
}

export default BlogListHead

import React from 'react'

// image
import Image from './../../../../public/assets/images/blog/woman.png'

function BlogListSoundBardItem() {
	return (
		<div class='row align-items-center py-8 border-bottom mx-0 article-box'>
			<figure class='col-12 col-md-9 mb-0 px-0'>
				<div class='row justify-content-between align-items-center'>
					<div class='col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
						<div class='image-box'>
							<a href='#'>
								<img src={Image.src} alt='featured image' width='100%' />
							</a>
						</div>
					</div>
					<figcaption class='col-12 col-md-8'>
						<div class='text-start mb-3'>
							<a href='#' class='text-primary-dark'>
								{' '}
								Soundbars{' '}
							</a>
						</div>
						<div class='mb-8 mb-md-0'>
							<h3 class='fs-3 mb-0'>TV Room Feng Shui Tips with Cliff Tan</h3>
						</div>
					</figcaption>
				</div>
			</figure>
			<div class='col-12 col-md-3 px-0'>
				<div class='text-start text-md-end'>
					<a
						href='#'
						class='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
						Read article
					</a>
				</div>
			</div>
		</div>
	)
}

export default BlogListSoundBardItem

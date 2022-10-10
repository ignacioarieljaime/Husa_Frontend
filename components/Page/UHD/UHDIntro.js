import React from 'react'

// image
import Image from 'public/assets/images/4k-uhd/4k-uhd-logo.png'

function UHDIntro() {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-5 px-md-8 py-20'>
					<article className='article text-center mt-10 mt-md-20'>
						<img
							src={Image.src}
							alt='featured image'
							width='260'
							className='banner-logo'
						/>
						<h2 className='text-white fs-3x mb-9'>
							Regular HD’s bigger, better looking brother
						</h2>
						<div>
							<p className='fw-normal text-white m-auto'>
								More color. More contrast. More whoa that’s realistic. Our 4K
								UHD TVs have four times the resolution of regular 1080p
								high-definition TVs. So movies, sports, and even movies about
								sports, all look four times better.
							</p>
						</div>
						<a href='#' className='btn btn-outline-light rounded-5 px-8 mt-12'>
							VIEW ALL 4K TVs
						</a>
					</article>
				</div>
			</div>
		</section>
	)
}

export default UHDIntro

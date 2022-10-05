import React from 'react'

// image
import Image from 'public/assets/images/4k-uhd/shop-now-banner.jpg'

function UHDFindTv() {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 py-15'>
					<article className='article text-center'>
						<h2 className='text-white fs-2qx mb-12'>
							Find your
							<span className='text-primary'>4K ULTRA HD TV</span>
						</h2>
						<div>
							<p className='text-white fw-normal m-auto mb-4 mb-0 text-opacity-75'>
								Our 4K Ultra HD TVs create a clearer, better defined, more
								realistic picture. Try not to touch the screen though.
							</p>
						</div>
					</article>
				</div>
			</div>
			<div className='header-secondary'>
				<a href='#'>
					<img
						src={Image.src}
						alt='award-wining-television-lineup'
						width='100%'
						height='100%'
					/>
				</a>
			</div>
		</section>
	)
}

export default UHDFindTv

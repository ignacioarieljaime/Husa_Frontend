import React from 'react'

// image
import Image from './../../../../public/assets/images/4k-uhd/shop-now-banner.jpg'

function UHDFindTv() {
	return (
		<section>
			<div class='black-banner p-md-4'>
				<div class='container px-6 px-md-8 py-15'>
					<article class='article text-center'>
						<h2 class='text-white fs-2qx mb-12'>
							Find your
							<span class='text-primary'>4K ULTRA HD TV</span>
						</h2>
						<div>
							<p class='text-white fw-normal m-auto mb-4 mb-0 text-opacity-75'>
								Our 4K Ultra HD TVs create a clearer, better defined, more
								realistic picture. Try not to touch the screen though.
							</p>
						</div>
					</article>
				</div>
			</div>
			<div class='header-secondary'>
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

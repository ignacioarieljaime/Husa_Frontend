import React from 'react'

import Image from './../../../../public/assets/images/tv-and-audio/three-tv-banner.png'

function TvAndAudioFindProduct() {
	return (
		<section>
			<div class='black-banner p-md-4'>
				<div class='container px-6 px-md-8 py-20'>
					<article class='article text-center'>
						<h2 class='text-white fs-3x mb-12'>
							Find Your
							<span class='text-primary'>Hisense TV</span>
						</h2>
						<div>
							<p class='text-white fw-normal m-auto mb-4'>
								Take a look at our selection of models and see whats right for
								you.
							</p>
							<a
								href='#'
								class='btn btn-outline-dark text-muted text-uppercase rounded-5 px-10 mt-8'>
								shop now
							</a>
							<img src={Image.src} alt='featured image' width='90%' />
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioFindProduct

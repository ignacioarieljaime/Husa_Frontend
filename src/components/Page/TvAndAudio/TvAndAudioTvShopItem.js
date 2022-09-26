import React from 'react'

function TvAndAudioTvShopItem({ Image }) {
	return (
		<div class='d-flex flex-column col-12 col-md-6 col-lg-3 px-6 mb-10 mb-lg-0'>
			<figure>
				<img src={Image.src} alt='featured image' class='mb-3' width='100%' />
				<figcaption>
					<p class='text-white fw-normal'>LASER TVS</p>
					<p class='text-white fw-normal'>Discover a New Expanse of Color</p>
				</figcaption>
			</figure>
			<a
				href='#'
				class='mt-auto text-secondary text-hover-primary opacity-50 text-decoration-none fw-normal fs-5'>
				SHOP NOW
			</a>
		</div>
	)
}

export default TvAndAudioTvShopItem

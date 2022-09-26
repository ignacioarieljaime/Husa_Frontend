import React from 'react'

// image
import Image from './../../../../public/assets/images/tv-and-audio/laser-tv-logo.png'

function TvAndAudioLasterIntro() {
	return (
		<section>
			<div class='black-banner p-md-4'>
				<div class='container px-6 px-md-8 py-20'>
					<article class='article text-center'>
						<img src={Image.src} alt='featured image' class='banner-logo' />
						<h2 class='text-white fs-3x mb-12'>4K HDR</h2>
						<div>
							<p class='text-primary fw-normal mx-auto mb-2'>
								120 INCHES OF REALITY
							</p>
							<p class='fs-base text-white fw-normal mx-auto mb-10'>
								BIG.BOLD.BEAUTIFUL.
							</p>
						</div>
						<div>
							<p class='fw-normal text-white m-auto'>
								The Hisense 4K UHD Smart Laser TV with Wide Color Gamut features
								a dual-color laser that displays a cinema-like picture full of
								rich, vibrant and true-to-life colors on an incredible 120”
								display. At every distance and angle, images are sharp and
								comfortable to watch for an immersive home-theater experience.
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioLasterIntro

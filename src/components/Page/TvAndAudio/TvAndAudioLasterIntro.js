import React from 'react'

// image
import Image from './../../../../public/assets/images/tv-and-audio/laser-tv-logo.png'

function TvAndAudioLasterIntro() {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<img src={Image.src} alt='featured image' className='banner-logo' />
						<h2 className='text-white fs-3x mb-12'>4K HDR</h2>
						<div>
							<p className='text-primary fw-normal mx-auto mb-2'>
								120 INCHES OF REALITY
							</p>
							<p className='fs-base text-white fw-normal mx-auto mb-10'>
								BIG.BOLD.BEAUTIFUL.
							</p>
						</div>
						<div>
							<p className='fw-normal text-white m-auto'>
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

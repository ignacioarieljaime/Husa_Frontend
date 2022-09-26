import React from 'react'

// image
import Image from './../../../../public/assets/images/tv-and-audio/ai-programms.png'

function TvAndAudioSmartChoice() {
	return (
		<section>
			<div class='tiny-banner p-md-4'>
				<div class='container px-6 px-md-8 py-20'>
					<article class='article text-center'>
						<h2 class='fs-3x mb-12'>
							Make the
							<span class='text-primary'>Smart Choice</span>
						</h2>
						<div>
							<p class='fw-normal m-auto mb-4'>
								Owning a Smart TV makes life easy! Navigate the simple interface
								to stream over 500,000 movies and TV shows with the Roku OS.
								With Android TV, you can use your voice to ask the Google
								Assistant to find your favorite channels or connect your
								Alexa-enabled devices for hands-free control. Whether you’re
								looking to cut the cord or stream content, theres no shortage of
								options from which to choose.
							</p>
							<img src={Image.src} alt='featured image' />
						</div>
						<a
							href='#'
							class='text-decoration-underline d-block text-muted fs-5 text-uppercase mt-8'>
							learn more
						</a>
					</article>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioSmartChoice

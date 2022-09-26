import React from 'react'

// image
import FourKItem from './../../../../public/assets/images/4k-uled/4k-item.png'
import Color from './../../../../public/assets/images/4k-uled/colors-item.png'
import Dolby from './../../../../public/assets/images/4k-uled/dolby-item.png'
import Voice from './../../../../public/assets/images/4k-uled/voice-remote-item.png'
import Light from './../../../../public/assets/images/4k-uled/light-item.png'

function ULEDAllTech() {
	return (
		<section>
			<div class='container-fluid px-lg-20'>
				<article class='row article align-items-center mx-0 w-100'>
					<h3 class='col-12 col-md-6 mb-7 my-md-auto'>
						All the tech.
						<span class='d-block text-secondary'>None of the tech B.S.</span>
					</h3>
					<p class='col-12 col-md-6 m-0'>
						A great TV is just a great TV. Not an ‘immersive harmony of sound
						and vision’. Cut through the usual tech B.S with our jargon /
						jargoff filter.
					</p>
				</article>
				<div class='row align-items-start justify-content-evenly flex-wrap jarg-flex mt-15 mb-10'>
					<div class='p-5'>
						<div class='p-2 rounded-4 bg-light-2'>
							<img src={FourKItem.src} alt='featured image' width='120' />
						</div>
						<div class='jarg-text-section mt-5'>
							<span class='jarg-toggle-text'>
								A suite of technology that enables seamless working between
								hardware and software.
							</span>
							<span class='jarg-toggle-text d-none'>
								Always shows the best possible picture.
							</span>
						</div>
					</div>
					<div class='p-5'>
						<div class='p-2 rounded-4 bg-light-2'>
							<img src={Color.src} alt='featured image' width='120' />
						</div>
						<div class='jarg-text-section mt-5'>
							<span class='jarg-toggle-text'>
								Color you can feel in every pixel.
							</span>
							<span class='jarg-toggle-text d-none'>
								Makes every day look like the 4th of July.
							</span>
						</div>
					</div>
					<div class='p-5'>
						<div class='p-2 rounded-4 bg-light-2'>
							<img src={Dolby.src} alt='featured image' width='120' />
						</div>
						<div class='jarg-text-section mt-5'>
							<span class='jarg-toggle-text'>
								The fusion of these technologies transforms your TV into an
								entertainment powerhouse.
							</span>
							<span class='jarg-toggle-text d-none'>
								The same technology that you see and hear at the cinema, now in
								your home.
							</span>
						</div>
					</div>
					<div class='p-5'>
						<div class='p-2 rounded-4 bg-light-2'>
							<img src={Voice.src} alt='featured image' width='120' />
						</div>
						<div class='jarg-text-section mt-5'>
							<span class='jarg-toggle-text'>
								With built-in microphones you can make your TV the centre-piece
								of the room.
							</span>
							<span class='jarg-toggle-text d-none'>
								Talking to your TV is a whole lot easier.
							</span>
						</div>
					</div>
					<div class='p-5'>
						<div class='p-2 rounded-4 bg-light-2'>
							<img src={Light.src} alt='featured image' width='120' />
						</div>
						<div class='jarg-text-section mt-5'>
							<span class='jarg-toggle-text'>
								Take your viewing experience further by maximising your
								highlights and lowlights.
							</span>
							<span class='jarg-toggle-text d-none'>
								Makes the darks darker, keeps the brights brighter.
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ULEDAllTech

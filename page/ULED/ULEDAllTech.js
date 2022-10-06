import React from 'react'

// image
import FourKItem from './../../../public/assets/images/4k-uled/4k-item.png'
import Color from './../../../public/assets/images/4k-uled/colors-item.png'
import Dolby from './../../../public/assets/images/4k-uled/dolby-item.png'
import Voice from './../../../public/assets/images/4k-uled/voice-remote-item.png'
import Light from './../../../public/assets/images/4k-uled/light-item.png'

function ULEDAllTech() {
	return (
		<section>
			<div className='container-fluid px-lg-20'>
				<article className='row article align-items-center mx-0 w-100'>
					<h3 className='col-12 col-md-6 mb-7 my-md-auto'>
						All the tech.
						<span className='d-block text-secondary'>None of the tech B.S.</span>
					</h3>
					<p className='col-12 col-md-6 m-0'>
						A great TV is just a great TV. Not an ‘immersive harmony of sound
						and vision’. Cut through the usual tech B.S with our jargon /
						jargoff filter.
					</p>
				</article>
				<div className='row align-items-start justify-content-evenly flex-wrap jarg-flex mt-15 mb-10'>
					<div className='p-5'>
						<div className='p-2 rounded-4 bg-light-2'>
							<img src={FourKItem.src} alt='featured image' width='120' />
						</div>
						<div className='jarg-text-section mt-5'>
							<span className='jarg-toggle-text'>
								A suite of technology that enables seamless working between
								hardware and software.
							</span>
							<span className='jarg-toggle-text d-none'>
								Always shows the best possible picture.
							</span>
						</div>
					</div>
					<div className='p-5'>
						<div className='p-2 rounded-4 bg-light-2'>
							<img src={Color.src} alt='featured image' width='120' />
						</div>
						<div className='jarg-text-section mt-5'>
							<span className='jarg-toggle-text'>
								Color you can feel in every pixel.
							</span>
							<span className='jarg-toggle-text d-none'>
								Makes every day look like the 4th of July.
							</span>
						</div>
					</div>
					<div className='p-5'>
						<div className='p-2 rounded-4 bg-light-2'>
							<img src={Dolby.src} alt='featured image' width='120' />
						</div>
						<div className='jarg-text-section mt-5'>
							<span className='jarg-toggle-text'>
								The fusion of these technologies transforms your TV into an
								entertainment powerhouse.
							</span>
							<span className='jarg-toggle-text d-none'>
								The same technology that you see and hear at the cinema, now in
								your home.
							</span>
						</div>
					</div>
					<div className='p-5'>
						<div className='p-2 rounded-4 bg-light-2'>
							<img src={Voice.src} alt='featured image' width='120' />
						</div>
						<div className='jarg-text-section mt-5'>
							<span className='jarg-toggle-text'>
								With built-in microphones you can make your TV the centre-piece
								of the room.
							</span>
							<span className='jarg-toggle-text d-none'>
								Talking to your TV is a whole lot easier.
							</span>
						</div>
					</div>
					<div className='p-5'>
						<div className='p-2 rounded-4 bg-light-2'>
							<img src={Light.src} alt='featured image' width='120' />
						</div>
						<div className='jarg-text-section mt-5'>
							<span className='jarg-toggle-text'>
								Take your viewing experience further by maximising your
								highlights and lowlights.
							</span>
							<span className='jarg-toggle-text d-none'>
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

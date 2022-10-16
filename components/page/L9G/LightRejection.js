import React, { useState } from 'react'

const LightRejection = () => {
	const [tab, setTab] = useState(0)

	return (
		<section className='l9g'>
			<div className='light-rejection py-4 pb-md-0 pt-md-20 px-0'>
				<div className='px-4 px-md-20 py-6 pt-0 py-md-15'>
					<h2
						className='fs-5 fs-md-2hx text-white text-start mb-0 aos-init aos-animate'
						data-aos='fade'
						data-aos-duration='1000'>
						Ambient Light Rejecting Screen
					</h2>
				</div>
				<video
					muted={true}
					autoPlay={true}
					loop={true}
					playsInline={true}
					className='px-4 px-md-0'>
					<source src='https://player.vimeo.com/external/589889855.hd.mp4?s=0fba3ac86e1b0c5735abb3170225682f78704a5b&profile_id=175' />
				</video>
				<div className='px-4 px-md-20 py-4 py-md-20'>
					<div className='caption fs-9 fs-md-2 mw-md-50 fw-light mb-8'>
						A perfectly paired ambient light rejecting (ALR) screen means you
						<span className='text-primary'>
							don’t have to kill the lights
						</span>{' '}
						to get a <span className='text-primary'>killer picture</span>.
						Depending on where in your home you’ll place the Laser TV, we’ve got
						different screen options - so take a look.
					</div>
				</div>
				<div className='position-relative'>
					<div className='tabs-container mt-4'>
						<div className='m-3'>
							<button
								className={`btn text-white tab-btn ${
									tab === 0 ? 'active' : ''
								}`}
								onClick={() => setTab(0)}>
								<span className='underline-on-hover fs-9 fs-md-3 fw-light'>
									Daylight Screen
								</span>
							</button>
						</div>
						<div className='m-3'>
							<button
								className={`btn text-white tab-btn ${
									tab === 1 ? 'active' : ''
								}`}
								onClick={() => setTab(1)}>
								<span className='underline-on-hover fs-9 fs-md-3 fw-light'>
									Cinema Screen
								</span>
							</button>
						</div>
					</div>
					<img
						src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/section-7-daylight.jpg'
						alt='featured image'
						className={`tab-image ${tab === 0 ? 'active' : ''}`}
					/>
					<img
						src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/section-7-cinema.jpg'
						alt='featured image'
						className={`tab-image ${tab === 1 ? 'active' : ''}`}
					/>
				</div>
				<div className='d-flex justify-content-between align-items-start flex-wrap flex-sm-nowrap'>
					<div>
						<div className='px-4 px-md-20 py-4 py-md-15'>
							<div
								className='fs-sm-2 fs-md-2x fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'
								data-aos-delay='450'>
								ALR Daylight Screen
							</div>
							<div className='caption fs-9 fs-md-2 fw-light mb-8'>
								Best in bright, airy rooms with lots of space and lots of light.
								The ALR Daylight Screen creates a picture that looks a lot like
								a flat panel TV. The DLT100B screen features a scratch-resistant
								surface for worry-free usage in high-traffic rooms. Screen
								assembly is required.
							</div>
						</div>
						<div className='row justify-content-between align-items-start flex-md-nowrap mx-0 px-0 px-md-20 '>
							<div className='feature mb-5 mb-md-0 px-4 px-md-0'>
								<div className='color-bar active'></div>
								<div
									className='fs-sm-2 fs-md-2tx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
									data-aos='fade-zoom-in'
									data-aos-duration='1000'
									data-aos-delay='450'>
									1.0
								</div>
								<div
									className='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
									data-aos='fade-zoom-in'
									data-aos-duration='1000'>
									Screen Gain
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='px-4 px-md-20 py-4 py-md-15'>
							<div
								className='fs-sm-2 fs-md-2x fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'
								data-aos-delay='450'>
								ALR Cinema Screen
							</div>
							<div className='caption fs-9 fs-md-2 fw-light mb-8'>
								Best in dedicated media rooms, man caves, and light controlled
								spaces, the ALR Cinema Screen produces beautiful colors over
								wide viewing angles. With a flat packed design, screen assembly
								is required but the payoff is well worth it.
							</div>
						</div>
						<div className='row justify-content-between align-items-start flex-md-nowrap mx-0 px-0 px-md-20 '>
							<div className='feature mb-5 mb-md-0 px-4 ps-md-0'>
								<div className='color-bar active'></div>
								<div
									className='fs-sm-2 fs-md-2tx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
									data-aos='fade-zoom-in'
									data-aos-duration='1000'
									data-aos-delay='450'>
									0.4
								</div>
								<div
									className='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
									data-aos='fade-zoom-in'
									data-aos-duration='1000'>
									Screen Gain
								</div>
							</div>
							<div className='feature mb-5 mb-md-0 px-4 pe-md-0'>
								<div className='color-bar active'></div>
								<div
									className='fs-sm-2 fs-md-2tx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
									data-aos='fade-zoom-in'
									data-aos-duration='1000'
									data-aos-delay='450'>
									150 °
								</div>
								<div
									className='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
									data-aos='fade-zoom-in'
									data-aos-duration='1000'>
									Viewing Angle
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LightRejection

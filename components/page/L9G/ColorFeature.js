import React from 'react'

const ColorFeature = () => {
	return (
		<section>
			<div className='color-feature'>
				<div className='px-md-20 px-4'>
					<p className='fs-7 fs-md-3 fw-light mw-md-75 mb-0 py-10 py-md-20'>
						Experience color like never before. The L9G uses pure red, green,
						and blue lasers to achieve new levels of color performance, reaching{' '}
						<span className='text-primary'>
							107% of the BT.2020 color space.
						</span>
					</p>
				</div>
				<div className='row mx-0 justify-content-between'>
					<div className='col-12 col-md-6 px-4 pr-md-3 ps-md-0 mb-4 mb-md-0 block-video'>
						<video
							width='100%'
							height='100%'
							muted={true}
							autoplay={true}
							loop={true}
							playsinline={true}>
							<source src='https://player.vimeo.com/external/585409801.hd.mp4?s=36b793ad850bc1bcdc5563fadff9d9218f620ec9&amp;profile_id=175' />
						</video>
						<div className='video-content'>
							<div
								className=' aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'>
								<span className='text-white fs-7 fs-md-3  fw-bold'>
									107% <span className='fw-light'>BT.2020 Color Space</span>
								</span>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6 px-4 ps-md-3 pe-md-0 mb-4 mb-md-0 block-video'>
						<video
							width='100%'
							height='100%'
							muted={true}
							autoplay={true}
							loop={true}
							playsinline={true}>
							<source src='https://player.vimeo.com/external/585409581.hd.mp4?s=302e82593e6e3329de848c6c31e971a1255c9db6&amp;profile_id=175' />
						</video>
						<div className='video-content'>
							<div
								className=' aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'>
								<span className='text-white fs-7 fs-md-3  fw-bold'>
									1+ Billion colors
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ColorFeature

import React from 'react'

const LumensOfBrightness = () => {
	return (
		<section>
			<div className='lumens-of-brightness py-4 pb-md-0 pt-md-10 px-0'>
				<div className='px-4 px-md-20 py-6 pt-8 py-md-20'>
					<h3
						className='fs-5 fs-md-2hx text-white text-start mb-0 aos-init aos-animate'
						data-aos='fade'
						data-aos-duration='1000'>
						3000 Lumens of Brightness
					</h3>
				</div>
				<video
					muted={true}
					autoplay={true}
					loop={true}
					playsinline={true}
					className='px-4 px-md-0'>
					<source src='https://player.vimeo.com/external/591775915.hd.mp4?s=a6159ae8fbc6013d82aea94a0c0b13c60a59d1d3&amp;profile_id=175' />
				</video>
				<div className='px-4 px-md-20 py-4 py-md-20'>
					<div className='caption mw-md-50 fs-9 fs-md-2 fw-light'>
						<span className='text-primary'>3000 Lumens.</span> That’s right, the
						L9G shines with brilliance so all your HDR content hits those
						shimmering highlights, bold colors, and voluminous blacks that make
						everything pop off the screen.
					</div>
				</div>
				<div class='row justify-content-between align-items-center mw-md-50 flex-md-nowrap mx-0 px-0 px-md-20 pb-20'>
					<div class='feature mb-5 mb-md-0 px-4'>
						<div class='color-bar active'></div>
						<div
							class='fs-2 fs-md-2tx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'
							data-aos-delay='450'>
							3000
						</div>
						<div
							class='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'>
							Lumens
						</div>
					</div>
					<div class='feature mb-5 mb-md-0 px-4'>
						<div class='color-bar active'></div>
						<div
							class='fs-2 fs-md-2tx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'
							data-aos-delay='450'>
							HDR10
						</div>
						<div
							class='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'>
							Dynamic Range
						</div>
					</div>
					<div class='feature mb-5 mb-md-0 px-4'>
						<div class='color-bar active'></div>
						<div
							class='fs-2 fs-md-2tx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'
							data-aos-delay='450'>
							4K@60Hz
						</div>
						<div
							class='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'>
							Native Refresh Rate
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LumensOfBrightness

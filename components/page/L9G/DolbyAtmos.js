import React from 'react'

const DolbyAtmos = () => {
	return (
		<section className='l9g'>
			<div className='dolby-atmos py-4 pb-md-20 pt-md-7 px-0'>
				<div className='px-4 px-md-20 py-6 pt-0 py-md-15'>
					<h2
						className='fs-5 fs-md-2hx text-white text-start mb-0 aos-init aos-animate'
						data-aos='fade'
						data-aos-duration='1000'>
						40W Dolby Atmos® Sound
					</h2>
				</div>
				<video
					muted={true}
					autoPlay={true}
					loop={true}
					playsInline={true}
					className='px-4 px-md-0'>
					<source src='https://player.vimeo.com/external/586985588.hd.mp4?s=3117ff4b5f4ae49ad34cef6b57dac4de33a0ca87&profile_id=175' />
				</video>
				<div className='px-4 px-md-20 py-4 py-md-20'>
					<div className='caption mw-md-50 fs-9 fs-md-2 fw-light mb-8'>
						With built-in 40W Dolby Atmos® sound, the L9G is a big soundstage
						upgrade over those teeny speakers in your last TV. Get clear speech,
						crisp highs, and booming lows without having to invest in any extra
						gear.
					</div>
					<div className='caption mw-md-50 fs-9 fs-md-2 fw-light'>
						For the true audiophiles, high-speed HDMI with eARC support allow
						for full pass-thru of high-bitrate audio to your surround sound
						system. And for those that want the convenience of a soundbar and
						the performance of a true home theater, the L9G is WiSA Ready so you
						can hook up your multi-channel wireless surround sound system.
					</div>
				</div>
				<div className='row justify-content-between align-items-start mw-md-50 flex-md-nowrap mx-0 px-0 px-md-20 '>
					<div className='feature mb-5 mb-md-0 px-4'>
						<div className='color-bar active'></div>
						<div
							className='fs-2 fs-md-2tx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'
							data-aos-delay='450'>
							40W
						</div>
						<div
							className='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'>
							Dolby Atmos® Sound
						</div>
					</div>
					<div className='feature mb-5 mb-md-0 px-4'>
						<div className='color-bar active'></div>
						<div
							className='fs-2 fs-md-2tx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'
							data-aos-delay='450'>
							High-Speed HDMI
						</div>
						<div
							className='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
							data-aos='fade-zoom-in'
							data-aos-duration='1000'>
							with eARC ; WiSA Ready
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DolbyAtmos

import React, { useState } from 'react'
import FineTouchesTab from './FineTouchesTab'

const FineTouches = () => {
	const [tab, setTab] = useState(0)

	const tabs = [
		{
			videoSrc:
				'https://player.vimeo.com/external/585438587.hd.mp4?s=1770fbcb09cdef7b5c319e037213a1f13dfceab6&profile_id=174',
			description:
				'To protect your eyes, proximity sensors dim the lasers when something gets too close. Also, a great way to keep small children from touching the laser console.'
		},
		{
			videoSrc:
				'https://player.vimeo.com/external/585438705.hd.mp4?s=1881f08bd39598e9145f4c9e8bc50d5b2b19ee13&profile_id=174',
			description:
				'Convenient side-access USB port for connecting media drives or other USB devices without having to dig behind the laser console.'
		},
		{
			videoSrc:
				'https://player.vimeo.com/external/585438826.hd.mp4?s=aad3ed4f0ca27ecada07002aaa60a59623bb1aad&profile_id=174',
			description:
				'High-speed HDMI, multiple audio outs, built-in TV tuner, LAN, and USB 3.0 to connect all your devices.'
		}
	]

	return (
		<section className='l9g'>
			<div className='fine-touches'>
				<div
					className='py-20 px-4 px-md-20 aos-init aos-animate'
					data-aos='fade'
					data-aos-delay='0'
					data-aos-duration='1000'>
					<h2 className='fs-5 fs-md-2hx fw-bold mb-0 mt-10'>
						Fine Touches for Added Convenience
					</h2>
				</div>
				<div className='bg-black position-relative pb-2 pb-md-15'>
					<div className='tabs-container mt-4'>
						<div className='m-3'>
							<button
								className={`btn text-white tab-btn ${
									tab === 0 ? 'active' : ''
								}`}
								onClick={() => setTab(0)}>
								<span className='underline-on-hover fs-9 fs-md-3 fw-light'>
									Eye Safety
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
									Side USB
								</span>
							</button>
						</div>
						<div className='m-3'>
							<button
								className={`btn text-white tab-btn ${
									tab === 2 ? 'active' : ''
								}`}
								onClick={() => setTab(2)}>
								<span className='underline-on-hover fs-9 fs-md-3 fw-light'>
									Modern Ports
								</span>
							</button>
						</div>
					</div>
					<FineTouchesTab
						videoSrc={tabs[tab].videoSrc}
						description={tabs[tab].description}
					/>
				</div>
			</div>
		</section>
	)
}

export default FineTouches

import React, { useState } from 'react'

const ScreenSize = () => {
	const [tab, setTab] = useState(0)

	return (
		<section className='l9g'>
			<div className='screen-size'>
				<div
					className='py-20 px-4 px-md-20 bg-white aos-init aos-animate'
					data-aos='fade'
					data-aos-delay='0'
					data-aos-duration='1000'>
					<h2 className='fs-5 fs-md-2hx fw-bold mb-0 mt-10'>
						Massive 100" or 120" Screen
					</h2>
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
									100 inch
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
									120 inch
								</span>
							</button>
						</div>
					</div>
					<div className={`tab-image ${tab === 0 ? 'active' : ''}`}>
						<img
							src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/section-6-100inch.jpg'
							alt='featured image'
						/>
						<p className='fs-9 fs-md-3 fw-light'>
							At mere inches from the wall, the 100L9G casts a massive 100 inch
							projection in beautiful 4K resolution -that’s 2.5x more screen
							than a 65 inch TV.
						</p>
					</div>
					<div className={`tab-image ${tab === 1 ? 'active' : ''}`}>
						<img
							src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/section-6-120inch.jpg'
							alt='featured image'
						/>
						<p className='fs-9 fs-md-3 fw-light'>
							Positioned just a couple more inches away the 120L9G gives you an
							even bigger 120" image. At nearly 4x the size of a 65" TV, the
							120" screen fills your field of view.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ScreenSize

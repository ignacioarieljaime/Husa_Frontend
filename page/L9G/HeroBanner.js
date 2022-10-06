import React from 'react'

const HeroBanner = () => {
	return (
		<section>
			<div className='hero-banner'>
				<video
					muted={true}
					autoPlay={true}
					loop={true}
					playsinline={true}
					className='galaxy-video desktop'>
					<source src='https://player.vimeo.com/external/592327208.hd.mp4?s=8bdcaebd3de4874d5dbc3a573ec7f7e2eda1aa6e&profile_id=175' />
				</video>
				<img
					src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/TriChromaHero-device.png'
					className='device-img desktop'
				/>
				<img
					src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/TriChromaHero-device-mobile-new.jpg'
					className='device-img mobile'
				/>

				<div className='copy-holder justify-content-md-center'>
					<img
						src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/TriChroma-Desktop-logo-lockup-L9G-outlined.svg'
						className='logo desktop'
					/>
					<div className='mobile heading'>
						Meet the L9G TriChroma Laser TV. Inspired by a world of incredible
						color. A true feast for your eyes at a scale that makes everything
						feel brand new.
						<br />
						<br />
						From $5,499
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroBanner

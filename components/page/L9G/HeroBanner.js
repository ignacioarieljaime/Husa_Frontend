import React from 'react'

const HeroBanner = ({ data: { structure } }) => {
	return (
		<section className='l9g'>
			<div className='hero-banner'>
				<video
					muted={true}
					autoPlay={true}
					loop={true}
					playsInline={true}
					className='galaxy-video desktop'>
					<source src={structure?.video?.value} />
				</video>
				<img
					src={structure?.desktopImage?.src}
					alt={structure?.desktopImage?.alt}
					className='device-img desktop'
				/>
				<img
					src={structure?.mobileImage?.src}
					alt={structure?.mobileImage?.alt}
					className='device-img mobile'
				/>

				<div className='copy-holder justify-content-md-center'>
					<img
						src={structure?.desktopIntroImage?.src}
						alt={structure?.desktopIntroImage?.alt}
						className='logo desktop'
					/>
					<div
						className='mobile heading'
						dangerouslySetInnerHTML={{
							__html: structure?.mobileText?.value
						}}></div>
				</div>
			</div>
		</section>
	)
}

export default HeroBanner

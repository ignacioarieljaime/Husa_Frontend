import React, { useEffect } from 'react'

const PureColor = () => {
	return (
		<section className='l9g'>
			<div className='pure-color'>
				<div
					className='aos-init aos-animate'
					data-aos='fade'
					data-aos-duration='1000'
					data-aos-delay='200'>
					<h2 className='fs-5 fs-md-2hx text-white text-start py-5 px-5 px-md-20'>
						3 Pure-Color Lasers.
					</h2>
				</div>
				<video
					width='100%'
					height='100%'
					muted={true}
					autoPlay={true}
					loop={true}
					playsInline={true}>
					<source src='https://player.vimeo.com/external/585404879.hd.mp4?s=862ec08597335d11ae1fc97988b9711a9182d37f&amp;profile_id=175' />
				</video>
			</div>
		</section>
	)
}

export default PureColor

import React, { useEffect } from 'react'

const PureColor = ({ data }) => {
	let { structure } = data
	return (
		<section className='l9g'>
			<div className='pure-color'>
				<div
					className='aos-init aos-animate'
					data-aos='fade'
					data-aos-duration='1000'
					data-aos-delay='200'>
					<h2 className='fs-sm-1 fs-md-2hx fw-normal text-white text-start py-5 px-5 px-md-20'>
						{structure?.title?.value}
					</h2>
				</div>
				<video
					width='100%'
					height='100%'
					muted={true}
					autoPlay={true}
					loop={true}
					playsInline={true}>
					<source src={structure?.video?.value} />
				</video>
			</div>
		</section>
	)
}

export default PureColor

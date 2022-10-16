import React from 'react'

const FeatureBlocksItem = ({ title, description, videoSrc }) => {
	return (
		<div className='row description-blocks align-items-center'>
			<div className='video-half col-12 col-md-6 p-4 p-md-0'>
				<video
					width='100%'
					height='100%'
					muted={true}
					autoPlay={true}
					loop={true}
					playsInline={true}>
					<source src={videoSrc} />
				</video>
			</div>
			<article className='introduction text-white col-12 col-md-6 p-4 px-md-16 py-md-6 '>
				<div
					data-aos='fade-zoom-in'
					data-aos-delay='0'
					data-aos-duration='1000'>
					<h3 className='fs-5 fs-md-2qx mb-2'>{title}</h3>
				</div>
				<p className='fs-9 fs-md-2 mb-0'>{description}</p>
			</article>
		</div>
	)
}

export default FeatureBlocksItem

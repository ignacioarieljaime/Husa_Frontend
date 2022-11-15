import React from 'react'

const DolbyVision = ({ data: { structure } }) => {
	return (
		<section className='l9g'>
			<div className='dolby-vision py-4 pb-md-0 pt-md-20 px-0'>
				<div className='px-4 px-md-20 py-6 pt-8 py-md-20 mt-10'>
					<h2
						className='fs-5 fs-md-2hx text-white text-start mb-0 aos-init aos-animate'
						data-aos='fade'
						data-aos-duration='1000'>
						{structure?.title?.value}
					</h2>
				</div>
				<img src={structure?.image?.src} alt={structure?.image?.aly} />
				<div className='px-4 px-md-20 py-4 py-md-20'>
					<div
						className='caption mw-md-50 fs-9 fs-md-2 fw-light'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default DolbyVision

import React from 'react'

function SponsorshipBigImageAndText({ data }) {
	let { structure } = data
	return (
		<section className='sponsor-ship-bg'>
			<div className='container pt-17'>
				<div className='header-secondary'>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						width='100%'
						height='100%'
					/>
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}
					className='fs-4 text-white mt-16'></div>
			</div>
		</section>
	)
}

export default SponsorshipBigImageAndText

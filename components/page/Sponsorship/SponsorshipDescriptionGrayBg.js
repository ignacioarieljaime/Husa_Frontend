import React from 'react'

function SponsorshipDescriptionGrayBg({ data }) {
	let { structure } = data
	return (
		<section className='sponsor-ship-bg'>
			<div className='container py-20'>
				<div
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}
					className='fs-4 text-white'></div>
			</div>
		</section>
	)
}

export default SponsorshipDescriptionGrayBg

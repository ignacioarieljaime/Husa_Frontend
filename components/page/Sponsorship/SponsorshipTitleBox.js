import React from 'react'

function SponsorshipTitleBox({ data }) {
	let { structure } = data
	return (
		<section className='sponsor-ship-bg'>
			<div className='container py-12 py-md-18 border-bottom sponsor-ship-border-light'>
				<div className='row'>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}
						className='col-12 text-white fs-2tx mb-0'></div>
				</div>
			</div>
		</section>
	)
}

export default SponsorshipTitleBox

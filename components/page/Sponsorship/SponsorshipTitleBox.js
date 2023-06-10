import React, { useEffect, useState } from 'react'

function SponsorshipTitleBox({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section className='sponsor-ship-bg'>
			<div className='sponsor_container py-12 py-md-18 border-bottom sponsor-ship-border-light'>
				<div className='row'>
					<div
						dangerouslySetInnerHTML={{ __html: text }}
						className='col-12 text-white title_box mb-0'></div>
				</div>
			</div>
		</section>
	)
}

export default SponsorshipTitleBox

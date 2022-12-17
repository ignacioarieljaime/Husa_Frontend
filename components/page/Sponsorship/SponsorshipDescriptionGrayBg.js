import React, { useState, useEffect } from 'react'

function SponsorshipDescriptionGrayBg({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section className='sponsor-ship-bg'>
			<div className='container py-20'>
				<div
					dangerouslySetInnerHTML={{ __html: text }}
					className='fs-4 text-white'></div>
			</div>
		</section>
	)
}

export default SponsorshipDescriptionGrayBg

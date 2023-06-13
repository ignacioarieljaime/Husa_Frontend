import React, { useState, useEffect } from 'react'

function SponsorshipDescriptionGrayBg({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section className='sponsor-ship-bg'>
			<div className='sponsor_container py-20'>
				<div
					dangerouslySetInnerHTML={{ __html: text }}
					className='description_box text-white'></div>
			</div>
		</section>
	)
}

export default SponsorshipDescriptionGrayBg

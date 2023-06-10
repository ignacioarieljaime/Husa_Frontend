import React, { useEffect, useState } from 'react'

function SponsorshipTextGradient({ data }) {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section className='sponsor-ship-bg'>
			<div className='sponsor_container gradient-texts pb-7'>
				<div
					dangerouslySetInnerHTML={{ __html: content?.text1?.value }}
					className='text-start first-text pb-5 mb-5'></div>
				<div
					dangerouslySetInnerHTML={{ __html: content?.text2?.value }}
					className='text-end second-text pb-5 mb-5'></div>
				<div
					dangerouslySetInnerHTML={{ __html: content?.text3?.value }}
					className='text-start pb-5 third-text '></div>
			</div>
		</section>
	)
}

export default SponsorshipTextGradient

import React, { useEffect, useState } from 'react'

function SponsorshipTextGradient({ data }) {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section className='sponsor-ship-bg'>
			<div className='container gradient-texts pb-7'>
				<div
					dangerouslySetInnerHTML={{ __html: content?.text1?.value }}
					className='text-start first-text pb-7 mb-7 pb-md-11 mb-md-11 border-bottom border-light'></div>
				<div
					dangerouslySetInnerHTML={{ __html: content?.text2?.value }}
					className='text-end second-text pb-7 mb-7 pb-md-11 mb-md-11 border-bottom border-light'></div>
				<div
					dangerouslySetInnerHTML={{ __html: content?.text3?.value }}
					className='text-start pb-7 third-text  pb-md-11 mb-md-11 border-bottom border-light'></div>
			</div>
		</section>
	)
}

export default SponsorshipTextGradient

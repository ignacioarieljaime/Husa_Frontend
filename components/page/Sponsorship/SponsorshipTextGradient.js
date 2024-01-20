import React, { useEffect, useState } from 'react'

function SponsorshipTextGradient({ data }) {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section className='sponsor-ship-bg'>
			<div className='sponsor_container gradient-texts pb-7 px-0 px-xl-8'>
				<div
					dangerouslySetInnerHTML={{ __html: structure?.text1?.value }}
					className=' px-8 px-xl-0 text-start first-text py-4 mb-1'></div>
				<div
					dangerouslySetInnerHTML={{ __html: structure?.text2?.value }}
					className=' px-8 px-xl-0 text-end second-text py-4 mb-1'></div>
				<div
					dangerouslySetInnerHTML={{ __html: structure?.text3?.value }}
					className=' px-8 px-xl-0 text-start py-4 third-text pb-5'></div>
			</div>
		</section>
	)
}

export default SponsorshipTextGradient

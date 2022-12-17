import React, { useEffect, useState } from 'react'

function SponsorshipBigImageAndText({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
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
					dangerouslySetInnerHTML={{ __html: text }}
					className='fs-4 text-white mt-16'></div>
			</div>
		</section>
	)
}

export default SponsorshipBigImageAndText

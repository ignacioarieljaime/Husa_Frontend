import React, { useState, useEffect } from 'react'

const PromoBanner = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section>
			<div className='promo_banner'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					className='background'
				/>
				<div className='text-container'>
					<h1 className='title'>{structure?.title?.value}</h1>
					<div
						className='description'
						dangerouslySetInnerHTML={{ __html: text }}></div>
				</div>
			</div>
		</section>
	)
}

export default PromoBanner

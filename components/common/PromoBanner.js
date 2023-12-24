import React, { useState, useEffect } from 'react'

const PromoBanner = ({ data: { structure } }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])
	return (
		<section>
			<div className='promo_banner'>
				<img
					src={content?.image?.src}
					alt={content?.image?.alt}
					className='background'
				/>
				<div className='text-container'>
					<h1 className='title'>{content?.title?.value}</h1>
					<div
						className='description'
						dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default PromoBanner

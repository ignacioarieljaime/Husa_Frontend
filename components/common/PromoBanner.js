import React, { useState, useEffect } from 'react'

const PromoBanner = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
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
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default PromoBanner

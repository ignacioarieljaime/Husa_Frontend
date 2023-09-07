import React from 'react'

const ProductTextWithIconItem = ({
	image,
	title,
	description,
	isRow,
	textAlignment
}) => {
	return (
		<div
			style={{
				textAlign: textAlignment === 'ltr' ? 'start' : 'center',
				alignItems: textAlignment === 'ltr' ? 'flex-start' : 'center'
			}}
			className={`col-12 ${isRow ? 'col-md-6' : ''} text_content`}>
			<img
				src={image.src}
				alt={image.alt}
				className='image'
				style={{
					margin: textAlignment === 'ltr' ? '0' : '0 auto',
					maxWidth: textAlignment === 'ltr' ? '45px' : '200px'
				}}
			/>
			<h3 className='title'>{title}</h3>
			<p className='text'>{description}</p>
		</div>
	)
}

export default ProductTextWithIconItem

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
				textAlign: textAlignment === 'center' ? 'center' : 'start',
				alignItems: textAlignment === 'center' ? 'center' : 'flex-start'
			}}
			className={`col-12 ${isRow ? 'col-md-6' : ''} text_content`}>
			<img
				src={image.src}
				alt={image.alt}
				className='image'
				style={{
					margin: textAlignment === 'center' ? '0 auto' : '0',
					maxWidth: textAlignment === 'center' ? '200px' : '45px'
				}}
			/>
			<h3 className='title'>{title}</h3>
			<p className='text'>{description}</p>
		</div>
	)
}

export default ProductTextWithIconItem

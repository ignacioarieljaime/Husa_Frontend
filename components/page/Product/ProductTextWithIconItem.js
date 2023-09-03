import React from 'react'

const ProductTextWithIconItem = ({ image, title, description, isRow }) => {
	return (
		<div className={`col-12 ${isRow ? 'col-md-6' : ''} text_content`}>
			<img src={image.src} alt={image.alt} className='image' />
			<h3 className='title'>{title}</h3>
			<p className='text'>{description}</p>
		</div>
	)
}

export default ProductTextWithIconItem

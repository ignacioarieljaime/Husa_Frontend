import React from 'react'

const ProductTextWithIconItem = ({ image, title, description, isRow }) => {
	return (
		<div className={`col-12 ${isRow ? 'col-md-6' : ''} feature-block feature_block_item article`}>
			<div className='mb-3'>
				<img src={image.src} alt={image.alt} width='45' />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	)
}

export default ProductTextWithIconItem

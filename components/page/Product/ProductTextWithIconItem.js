import React from 'react'

const ProductTextWithIconItem = ({ image, title, description }) => {
	return (
		<div class='col-12 col-md-6 feature-block article'>
			<div class='mb-3'>
				<img src={image.src} alt={image.alt} width='45' />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	)
}

export default ProductTextWithIconItem

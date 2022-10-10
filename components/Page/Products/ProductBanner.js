import React from 'react'

function ProductBanner({
	data: {
		structure: { image }
	}
}) {
	return (
		<div className='all-tvs-heading'>
			<img src={image.src} alt={image.alt} className='col-12 col-md-6' />
		</div>
	)
}

export default ProductBanner

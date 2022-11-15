import React from 'react'

function ProductsBanner({ data }) {
	let { structure } = data

	return (
		<div className='all-tvs-heading d-flex'>
			<div className='text_box'>
				<h2 dangerouslySetInnerHTML={{ __html :structure?.title?.value }}></h2>
				<h6>{structure?.subtitle?.value}</h6>
			</div>
			<img
				src={structure?.image?.src}
				alt={structure?.image?.alt}
				className='col-12 col-md-6'
			/>
		</div>
	)
}

export default ProductsBanner

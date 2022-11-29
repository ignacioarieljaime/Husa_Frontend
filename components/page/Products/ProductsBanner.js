import React from 'react'

function ProductsBanner({ data }) {
	let { structure } = data

	return (
		<div className='all-tvs-heading d-flex'>
			<div className='text_box'>
				<h2 dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h2>
				<h6>{structure?.subtitle?.value}</h6>
			</div>
			<div className='col-12 col-md-4'>
				<img src={structure?.image?.src} alt={structure?.image?.alt} />
			</div>
		</div>
	)
}

export default ProductsBanner

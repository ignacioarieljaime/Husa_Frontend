import React from 'react'

function ProductsBanner({ data }) {
	let { structure } = data

	return (
		<div className='all-tvs-heading d-flex'>
			<div className='col-12 col-md-6 text_box'>
				<h2>{structure?.title?.value}</h2>
				<div
					dangerouslySetInnerHTML={{
						__html: structure?.subtitle?.value
					}}></div>
			</div>
			<div className='col-12 col-md-6 image_container'>
				<div className='image_wrapper'>
					<img src={structure?.image?.src} alt={structure?.image?.alt} />
				</div>
			</div>
		</div>
	)
}

export default ProductsBanner

import React from 'react'

// image
import TvImage from 'public/assets/images/all-tvs/all-tvs-header.png'

function ProductsBanner({ data: { props } }) {
	return (
		<div className='all-tvs-heading'>
			<img
				src={props.data}
				alt='smart tv platforms'
				className='col-12 col-md-6'
			/>
		</div>
	)
}

export default ProductsBanner

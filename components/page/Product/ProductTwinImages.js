import React from 'react'

const ProductTwinImages = ({ data }) => {
	const { structure } = data
	return (
		<div
			id={data.name + data.id}
			className='p-6 p-md-16 row justify-content-center align-items-center mx-0'>
			<img
				src={structure.imageLeft.src}
				alt={structure.imageLeft.alt}
				className='col-12 col-md-6 p-0 pe-md-8 mb-6 mb-md-0'
			/>
			<img
				src={structure.imageRight.src}
				alt={structure.imageRight.alt}
				className='col-12 col-md-6 p-0 ps-md-8'
			/>
		</div>
	)
}

export default ProductTwinImages

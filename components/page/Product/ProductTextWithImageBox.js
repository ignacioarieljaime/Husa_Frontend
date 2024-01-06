import React from 'react'

const ProductTextWithImageBox = ({ data }) => {
	const { structure } = data
	return (
		<div
			id={data.name + data.id}
			className='container-fluid px-7 py-14 p-md-20'>
			<article className='row article'>
				<h2 className='col-12 col-md-6 mb-7 my-md-auto'>
					{structure.title.value}
				</h2>
				<div className='col-12 col-md-6 m-0 text-center text-md-end'>
					<img
						src={structure.image.src}
						alt={structure.image.alt}
						width='150'
					/>
				</div>
			</article>
		</div>
	)
}

export default ProductTextWithImageBox

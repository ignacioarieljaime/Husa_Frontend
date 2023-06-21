import React from 'react'

function ProductSupportInfo({ pim, data: { structure } }) {
	return (
		<section className='product_support_support_box'>
			<div className='mb-17'>
				<h1 className='my-15 text-center'>{structure.title.value}</h1>
				<div className='mx-auto support-time'>
					<p className='fs-5 text-uppercase mb-1 fw-bold'>
						{structure?.subtitle?.value}
					</p>
					<p className='fs-5 text-uppercase mb-1'>{structure?.firstDay?.value}</p>
					<p className='fs-5 text-uppercase mb-8'>{structure?.firstTime?.value}</p>

					<p className='fs-5 text-uppercase mb-1'>{structure?.secondDay?.value}</p>
					<p className='fs-5 text-uppercase'>{structure?.secondTime?.value}</p>
				</div>
			</div>
		</section>
	)
}

export default ProductSupportInfo

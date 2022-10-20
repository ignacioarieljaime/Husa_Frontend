import Link from 'next/link'
import React from 'react'

// component
import ProductInfoSlider from './ProductInfoSlider'

function ProductInfoAndSliderBox({ pim, data }) {
	return (
		<section id={data.name + data.id} className='product single-product'>
			<div className='container'>
				<div className='row'>
					<ProductInfoSlider pim={pim?.assets} />
					<div className='col-12 col-md-6 product-info my-auto'>
						<h2 className='text-primary fs-2x mb-5'>
							{pim?.custom_fields[1]?.value}
						</h2>
						<h1 className='fs-2hx mb-8'>{pim?.custom_fields[0]?.value} </h1>
						<span className='fs-2hx mb-5'>{pim?.name}</span>
						<p className='text-primary'>Model: {pim?.model}</p>
						<div className='model-toggle '>
							{pim?.series[0]?.values.map(
								(item, index) =>
									item.title && (
										<Link href={'/'} key={index}>
											<a
												className={`btn  m-2 rounded-3 m-0 ${
													pim?.custom_fields[2]?.value === item.title
														? 'btn-primary'
														: 'btn-outline-dark'
												}`}>
												{item.title}
											</a>
										</Link>
									)
							)}
						</div>
						<div className='product-rating'></div>
						<button
							className='btn btn-primary rounded-0 px-6 py-3'
							onclick='toggleWhereToBuyDrawer()'>
							{data.structure?.whereToBuy?.value ? 'Where To Buy' : 'coming soon'}
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductInfoAndSliderBox

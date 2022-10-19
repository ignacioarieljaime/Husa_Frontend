import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// component
import ProductInfoSlider from './ProductInfoSlider'

function ProductInfoAndSliderBox({ pim: { data } }) {
	console.log(data);
	return (
		<section className='product single-product'>
			<div className='container'>
				<div className='row'>
					<ProductInfoSlider pim={data.assets} />
					<div className='col-12 col-md-6 product-info my-auto'>
						<h2 className='text-primary fs-2x mb-5'>
							{data?.custom_fields[1].value}
						</h2>
						<h1 className='fs-2hx mb-8'>{data?.custom_fields[0].value} </h1>
						<span className='fs-2hx mb-5'>{data?.name}</span>
						<p className='text-primary'>Model: {data.model}</p>
						<div className='model-toggle '>
							{data.series[0]?.values.map(
								(item, index) =>
									item.title && (
										<Link href={'/'} key={index}>
											<a className={`btn  m-2 rounded-3 m-0 ${data?.custom_fields[2]?.value === item.title ?"btn-primary" :"btn-outline-dark"}`}>
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
							Where To Buy
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductInfoAndSliderBox

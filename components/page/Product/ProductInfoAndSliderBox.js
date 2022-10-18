import React, { useEffect, useState } from 'react'

// component
import ProductInfoSlider from './ProductInfoSlider'

function ProductInfoAndSliderBox({ pim: { data } }) {
	const [titles, setTitles] = useState()
	useEffect(() => {
		data &&
			setTitles(
				data.features.find(item => item.custom_field_type_name === 'Top Titles')
			)
	}, [data])

	console.log(data, 'ss')
	return (
		<section className='product single-product'>
			<div className='container'>
				<div className='row'>
					<ProductInfoSlider pim={data} />
					<div className='col-12 col-md-6 product-info my-auto'>
						<h2 className='text-primary fs-2x mb-5'>{titles?.custom_fields[1].value}</h2>
						<h1 className='fs-2hx mb-8'>{titles?.custom_fields[0].value} </h1>
						<span className='fs-2hx mb-5'>{data?.name}</span>
						<p className='text-primary'>Model: {data.model}</p>
						<div className='model-toggle'>
							<a
								href='/tv-and-audio/televisions/all-tvs/55U8G_55-4k-uled-premium-hisense-android-smart-tv-2021'
								className='btn btn-primary rounded-3 m-0'>
								100
							</a>
							<a
								href='/tv-and-audio/televisions/all-tvs/65U8G_65-4k-uled-premium-hisense-android-smart-tv-2021'
								className='btn btn-outline-dark rounded-3'>
								120
							</a>
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

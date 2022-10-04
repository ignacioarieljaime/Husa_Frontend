import React from 'react'

// component
import ProductInfoSlider from './ProductInfoSlider'

function ProductInfoAndSliderBox() {
	return (
		<section className='product'>
			<div className='container'>
				<div className='row'>
					<ProductInfoSlider />
					<div className='col-12 col-md-6 product-info my-auto'>
						<h2 className='text-primary fs-2x mb-5'>Laser Series</h2>
						<h1 className='fs-2hx mb-8'>Laser TV</h1>
						<span className='fs-2hx mb-5'>100 4K SMART LASER TV</span>
						<p className='text-primary'>Model: 100L5G-CINE100A</p>
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

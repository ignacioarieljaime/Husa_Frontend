import React from 'react'

import Image from './../../../public/assets/images/all-dishwashers/dishwasher-item.png'

function ProductItem() {
	return (
		<div class='item bottom-border-sm col-12 col-md-6 col-lg-4'>
			<div>
				<div class='d-flex justify-content-between align-items-center mb-20 w-100'>
					<span class='class'>24 in</span>
					<span class='code'>
						HUI6220XCUS
						<span class='d-block text-primary'>New</span>
					</span>
				</div>
				<img src={Image.src} alt='featured image' width='100%' />
				<p class='mt-8'>47-Decibel Top Control 24" Built-In Dishwasher</p>
			</div>
			<div class='w-100'>
				<div class='d-flex justify-content-center align-items-center flex-wrap w-100'>
					<button class='buy-btn' onclick='toggleWhereToBuyDrawer()'>
						Where To Buy
					</button>
					<a href='#' class='view-product-btn'>
						View Product
					</a>
				</div>
				<a href='#' class='compare-btn'>
					Add To Compare
				</a>
			</div>
		</div>
	)
}

export default ProductItem

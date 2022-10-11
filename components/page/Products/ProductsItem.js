import Link from 'next/link'
import React from 'react'

// image
import ProductImage from 'public/assets/images/hisense-u8-uled-4k/related-product-item-1.png'

function ProductsItem({ data }) {
	let { brand, image, name, model, id, order } = data
	return (
		<div className='item bottom-border-sm col-12 col-md-6 col-xl-4 col-xxl-3'>
			<div>
				<div className='d-flex justify-content-between align-items-center mb-20 w-100'>
					<span className='class'>{order} Class</span>
					<span className='code'>{model}</span>
				</div>
				<img src={image} alt='featured image' width='100%' />
				<h3>{brand.name}</h3>
				<p>{name}</p>
			</div>
			<div className='w-100'>
				<div className='d-flex justify-content-center align-items-center flex-wrap w-100'>
					<button className='buy-btn' disabled>
						Coming Soon
					</button>
					<Link href={`/product/${id}`}>
						<a className='view-product-btn'>View Product</a>
					</Link>
				</div>
				<Link href='/Product/2'>
					<a className='compare-btn'>Add To Compare</a>
				</Link>
			</div>
		</div>
	)
}

export default ProductsItem

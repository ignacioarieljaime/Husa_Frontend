import Link from 'next/link'
import React, { useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'

function ProductsItem({ data }) {
	let { brand, media, name, model, id, order } = data
	const [url] = useState(RouteHandler(id))
	return (
		<div className='item bottom-border-sm col-12 col-md-6 col-xl-4 col-xxl-3'>
			<div>
				<div className='d-flex justify-content-between align-items-center mb-20 w-100'>
					<span className='class'>{order} Class</span>
					<span className='code'>{model}</span>
				</div>
				<img src={media?.url} alt='featured image' width='100%' />
				<h3>{brand.name}</h3>
				<p>{name}</p>
			</div>
			<div className='w-100'>
				<div className='d-flex justify-content-center align-items-center flex-wrap w-100'>
					<button className='buy-btn' disabled>
						Coming Soon
					</button>
					<Link href={url}>
						<a className='view-product-btn'>View Product</a>
					</Link>
				</div>
				<Link href={url}>
					<a className='compare-btn'>Add To Compare</a>
				</Link>
			</div>
		</div>
	)
}

export default ProductsItem

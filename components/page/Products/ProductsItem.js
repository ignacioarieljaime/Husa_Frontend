import Link from 'next/link'
import React, { useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'

function ProductsItem({ data }) {
	let { media, name, model, id, isNew } = data

	const [url] = useState(RouteHandler(id))
	const [series] = useState(
		data.features.find(item => item.custom_field_type_name === 'Top Titles')
			.custom_fields
	)
	const [screenSize] = useState(
		data.features.find(item => item.custom_field_type_name === 'TV filters')
			.custom_fields
	)
	return (
		<div className='item bottom-border-sm col-12 col-md-6 col-xl-4 col-xxl-3'>
			<div>
				<div className='d-flex justify-content-between align-items-center mb-20 w-100'>
					<span>
						{screenSize.find(item => item.name === 'Size class')?.value && (
							<span className='class'>
								{screenSize.find(item => item.name === 'Size class')?.value}{' '}
								Class
							</span>
						)}
					</span>
					<div className='d-flex flex-column align-items-end'>
						<span className='code'>{model}</span>
						{isNew === 1 && <span className='new_product'>New</span>}
					</div>
				</div>
				<img src={media?.url} alt='featured image' height={'265px'} />
				<h3>{series.find(item => item.name === 'h2 Title')?.value}</h3>

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

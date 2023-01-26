import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'
const ModalChanelAdviser = dynamic(() =>
	import('../Product/ModalChanelAdviser')
)

function ProductsItem({ data }) {
	let { media, name, model, id, isNew, retailers } = data

	const [url] = useState(RouteHandler(id))
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [series] = useState(
		data.features.find(item => item.custom_field_type_name === 'Top Titles')
			.custom_fields
	)
	const [screenSize] = useState(
		data.features.find(item => item.custom_field_type_name === 'TV filters')
			.custom_fields
	)
	return (
		<>
			<div className='item bottom-border-sm col-12 col-md-6 col-xl-4 col-xxl-3'>
				<div>
					<div className='d-flex justify-content-between align-items-center mb-10 w-100'>
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
					<img src={media?.url} height={280} alt='featured image' />
					{series.find(item => item.name === 'h2 Title')?.value && (
						<h3>{series.find(item => item.name === 'h2 Title')?.value}</h3>
					)}

					<p>{name}</p>
				</div>
				<div className='w-100'>
					<div className='d-flex justify-content-center align-items-center flex-wrap w-100'>
						{retailers.length === 0 ? (
							<button className='buy-btn' disabled>
								Coming Soon
							</button>
						) : (
							<button
								onClick={() => setChanelAdviserHandler(true)}
								className='buy-btn'>
								Where to Buy
							</button>
						)}
						{url ? (
							<Link href={url}>
								<a className='view-product-btn'>View Product</a>
							</Link>
						) : (
							<button disabled className='view-product-btn'>
								View Product
							</button>
						)}
					</div>

					<button className='compare-btn'>Add To Compare</button>
				</div>
			</div>
			<ModalChanelAdviser
				product={data}
				condition={chanelAdviserHandler}
				handler={setChanelAdviserHandler}
				model={model}
			/>
		</>
	)
}

export default ProductsItem

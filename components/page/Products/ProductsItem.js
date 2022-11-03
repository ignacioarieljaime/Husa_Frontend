import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCompare } from 'redux/slices/compare'
import { RouteHandler } from 'utils/routeHandler'
const ModalChanelAdviser = dynamic(() =>
	import('../Product/ModalChanelAdviser')
)

function ProductsItem({ data }) {
	const [currentItem, setCurrentItem] = useState(
		data.id === 0 ? data.products.product : data.products[0].product
	)
	const dispatch = useDispatch()
	const [url, setUrl] = useState()

	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [screenSize, setScreenSize] = useState()
	useEffect(() => {
		setUrl(RouteHandler(currentItem.id))
		setScreenSize(
			currentItem.customFields.find(item => item.type_name === 'TV filters')
				?.custom_fields
		)
	}, [currentItem])

	return (
		<>
			<div className='item bottom-border-sm col-12 col-md-6 col-xl-4 col-xxl-3'>
				<div>
					<div className='d-flex justify-content-between align-items-center gap-3 flex-wrap mb-10 w-100'>
						<span>
							{screenSize?.find(item => item.name === 'Size class')?.value && (
								<span className='class'>
									{screenSize?.find(item => item.name === 'Size class')?.value}{' '}
									Class
								</span>
							)}
						</span>
						<div className='d-flex flex-column align-items-end'>
							<span className='code'>{currentItem.model}</span>
							{currentItem.isNew === 1 && (
								<span className='new_product'>New</span>
							)}
						</div>
					</div>
					{url ? (
						<Link href={url}>
							<a>
								<img
									src={currentItem.media?.url}
									height={280}
									alt='featured image'
								/>
							</a>
						</Link>
					) : (
						<img
							src={currentItem.media?.url}
							height={280}
							alt='featured image'
						/>
					)}

					<h3>{data.name.split('-')[0]} Series</h3>

					<p>{currentItem.name}</p>
				</div>
				{Array.isArray(data?.products) && (
					<ul className='list-unstyled d-flex gap-3 flex-wrap justify-content-center'>
						{data?.products?.map((item, index) => (
							<li>
								<button
									onClick={() => setCurrentItem(item.product)}
									className={`px-3 w-100 py-1 border-1 border product-mini-link border-dark mb-0 d-flex btn-outline-dark text-dark  ${
										item.product.id === currentItem.id
											? ' product-mini-link-active'
											: ''
									}`}>
									{item.value}
								</button>
							</li>
						))}
					</ul>
				)}

				<div className='w-100'>
					<div className='d-flex '>
						{!currentItem.retailer ? (
							<button className='buy-btn ' disabled>
								Coming Soon
							</button>
						) : (
							<button
								onClick={() => setChanelAdviserHandler(true)}
								className='buy-btn '>
								Where to Buy
							</button>
						)}
						{url ? (
							<Link href={url}>
								<a className='view-product-btn '>View Product</a>
							</Link>
						) : (
							<button disabled className='view-product-btn '>
								View Product
							</button>
						)}
					</div>

					<button
						onClick={() => dispatch(addNewCompare(currentItem))}
						className='compare-btn'>
						Add To Compare
					</button>
				</div>
			</div>
			{chanelAdviserHandler && (
				<ModalChanelAdviser
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={currentItem.model}
				/>
			)}
		</>
	)
}

export default ProductsItem

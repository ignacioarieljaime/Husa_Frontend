import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { RouteHandler } from 'utils/routeHandler'
import { useDispatch } from 'react-redux'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'
import { addNewCompare } from 'redux/slices/compare'

const ProductItemV2 = ({ data }) => {
	let { media, name, model, id } = data
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
			{' '}
			<div className='product-item-v2 px-5 py-8'>
				<div className='text-center mb-10'>
					<img
						src={currentItem?.media?.url}
						style={{ maxHeight: '182px' }}
						alt={name}
						width='80%'
					/>
				</div>
				<div className='product-item-v2-content'>
					<div className='mb-3'>{currentItem?.model}</div>
					<p className='mb-7'>{data.name.split('-')[0]} Series</p>

					{Array.isArray(data?.products) && (
						<div className='d-flex justify-content-center flex-wrap gap-3 align-items-center mb-8'>
							{data?.products?.map((item, index) => (
								<button
									onClick={() => setCurrentItem(item.product)}
									className={`n-btn outline-black ${
										item.product.id === currentItem.id
											? ' product-mini-link-active'
											: ''
									}`}>
									{item.value}
								</button>
							))}
						</div>
					)}

					<div className='d-flex flex-wrap justify-content-center  align-items-center mb-10'>
						<Link href={url ? url : '/'}>
							<a className='n-btn outline-black  m-2'>View Product</a>
						</Link>
						<button
							disabled={currentItem.retailer ? false : true}
							onClick={() =>
								currentItem.retailer && setChanelAdviserHandler(true)
							}
							style={currentItem?.retailer ? { cursor: 'pointer' } : {}}
							className={`n-btn  m-2 ${
								currentItem.retailer
									? 'primary-text '
									: 'text-black opacity-50 bg-transparent border-0'
							}`}>
							Where to Buy
							<span>
								<FontAwesomeIcon
									icon={faChevronRight}
									size={'sm'}
									className='ms-2'
								/>
							</span>
						</button>
					</div>
					<div className='text-center'>
						<button
							onClick={() => dispatch(addNewCompare(currentItem))}
							className='n-btn grey-text compare-btn ps-6 rounded-0'>
							Add To Compare
						</button>
					</div>
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

export default ProductItemV2

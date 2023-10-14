import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronDown,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { RouteHandler } from 'utils/routeHandler'
import { useDispatch } from 'react-redux'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'
import { addNewCompare } from 'redux/slices/compare'
import CustomImage from 'components/common/CustomImage'
import { Data } from '@react-google-maps/api'

const ProductItemV2 = ({ data }) => {
	let { media, name, model, id } = data
	const [currentItem, setCurrentItem] = useState(
		data.id === 0
			? data.products
			: {
					...data.products[0],
					size: data.products[0]?.value
						? Number(data.products[0]?.value.replaceAll('"', ''))
						: 0
			  }
	)
	const [showSizes, setShowSizes] = useState(false)
	const [activeSizeIndex, setActiveSizeIndex] = useState(0)
	let seriesTitle = data?.products[0]?.product?.customFields
		?.find(item => item.type_name === 'Top Titles')
		?.custom_fields.find(item => item.name === 'h2 Title')
	const dispatch = useDispatch()
	const [url, setUrl] = useState()

	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [screenSize, setScreenSize] = useState(null)

	useEffect(() => {
		if (screenSize && screenSize.length) {
			setCurrentItem(
				screenSize.find(item => item?.id?.value == data?.id?.value)
			)
			setActiveSizeIndex(
				screenSize.findIndex(item => item?.id?.value == data?.id?.value)
			)
			if (screenSize.length <= 5) {
				setShowSizes(true)
			} else {
				setShowSizes(false)
			}
		}
	}, [screenSize])

	useEffect(() => {
		if (Array.isArray(data?.products)) {
			let addSizeToItem = data?.products.map(item => ({
				...item,
				size: item?.value ? Number(item?.value.replaceAll('"', '')) : 0
			}))
			setScreenSize(addSizeToItem.sort((a, b) => a.size - b.size))
		}
	}, [data])

	useEffect(() => {
		setCurrentItem(
			data.id === 0
				? data.products
				: {
						...data.products[0],
						size: data.products[0]?.value
							? Number(data.products[0]?.value.replaceAll('"', ''))
							: 0
				  }
		)
	}, [data])

	useEffect(() => {
		setUrl(RouteHandler(currentItem?.product?.id, 'product'))
	}, [currentItem])

	const dataLayerHandler = () => {
		setChanelAdviserHandler(!chanelAdviserHandler)
		window.dataLayer.push({
			event: 'view_product',
			eventData: {
				product_id: currentItem?.model,
				category: currentItem?.category?.name
			}
		})
	}
	return (
		<>
			<div className='product_item_v2'>
				<div className='product_item_v2_content h-100'>
					<div className='first_content w-100'>
						<Link href={url ? url : '/'}>
							<a className='image_wrapper'>
								<img
									width={'100%'}
									className={'image'}
									src={
										currentItem?.product?.image
											? currentItem?.product?.image
											: currentItem?.product?.media?.url
									}
									alt={
										currentItem?.product?.media?.caption
											? currentItem?.product?.media?.caption
											: currentItem?.product?.media?.title
									}
								/>
							</a>
						</Link>

						<div className='d-flex justify-content-between align-items-center w-100'>
							<p className='model'>{currentItem?.product?.model}</p>
							{currentItem?.product?.isNew ? (
								<p className='new_item'>NEW</p>
							) : null}
						</div>

						<h6 className='title'>{currentItem?.product?.name}</h6>
					</div>

					{screenSize && screenSize.length > 1 && (
						<div
							className={`screen_size_selector ${
								showSizes ? 'show_sizes' : ''
							}`}>
							<div className='content'>
								<div className='sizes'>
									<ul className='size_list'>
										{screenSize.map((item, index) => (
											<li
												key={index}
												className={activeSizeIndex === index ? 'active' : ''}
												onClick={() => {
													setCurrentItem(item)
													setActiveSizeIndex(index)
												}}
												style={{ width: 100 / screenSize.length + '%' }}>
												{item?.value}
											</li>
										))}
									</ul>
									<span
										style={{
											width: 100 / screenSize.length + '%',
											transform: 'translateX(' + activeSizeIndex * 100 + '%)'
										}}
										className='indicator'>
										{currentItem?.value}
									</span>
								</div>
								<div
									onClick={() => setShowSizes(true)}
									className='show_sizes_btn'>
									<span className='label'>Select Screen Size</span>
									<FontAwesomeIcon icon={faChevronDown} size='sm' />
								</div>
							</div>
						</div>
						// <div className='d-flex justify-content-center align-items-center w-100'>
						// 	{screenSize.map(
						// 		(item, index) =>
						// 			item.value && (
						// 				<button
						// 					key={'type-item-' + index}
						// 					onClick={() => setCurrentItem(item.product)}
						// 					style={{ width: 100 / screenSize.length + '%' }}
						// 					className={`size_btn ${
						// 						item.product.id === currentItem.id
						// 							? ' product-mini-link-active'
						// 							: ''
						// 					}`}>
						// 					{item.value}
						// 				</button>
						// 			)
						// 	)}
						// </div>
					)}
					<div className='product_item_v2_content w-100'>
						<div className='w-100 product_item_v2_content'>
							<div className='btns_gp d-flex justify-content-evenly justify-content-md-center flex-wrap gap-2 align-items-center px-4 px-md-0 mx-auto'>
								<Link href={url ? url : '/'}>
									<a className='n-btn medium d-flex justify-content-center align-items-center outline-black product_btn '>
										View Product
									</a>
								</Link>
								<button
									disabled={
										currentItem?.product?.buy_status === 'ChannelAdvisor' ||
										currentItem?.product?.buy_status === 'Internal'
											? false
											: true
									}
									onClick={() =>
										currentItem?.product?.buy_status === 'ChannelAdvisor' ||
										currentItem?.product?.buy_status === 'Internal'
											? dataLayerHandler()
											: {}
									}
									style={
										currentItem?.product?.retailer ? { cursor: 'pointer' } : {}
									}
									className={`n-btn d-flex justify-content-center align-items-center medium ${
										currentItem?.product?.buy_status === 'ChannelAdvisor' ||
										currentItem?.product?.buy_status === 'Internal'
											? 'primary-text py-2 px-4'
											: 'disabled_btn'
									}`}>
									{currentItem?.product?.buy_status === 'ChannelAdvisor' ||
									currentItem?.product?.buy_status === 'Internal'
										? 'Where To Buy'
										: 'coming soon'}
									<span>
										<FontAwesomeIcon
											icon={faChevronRight}
											size={'sm'}
											className='ms-2'
										/>
									</span>
								</button>
							</div>

							{currentItem?.product &&
								currentItem?.product?.customFields &&
								currentItem?.product?.customFields.length &&
								currentItem?.product?.customFields.some(
									field => field.type_id === 11
								) && (
									<ul className='description'>
										{currentItem?.product.customFields
											.find(field => field.type_id === 11)
											.custom_fields.map(item => (
												<li>{item?.value}</li>
											))}
									</ul>
								)}
						</div>

						<div className='text-center'>
							<button
								onClick={() => dispatch(addNewCompare(currentItem?.product))}
								className='n-btn grey-text compare-btn text-uppercase'>
								Add To Compare
							</button>
						</div>
					</div>
				</div>
				<ModalChanelAdviser
					product={currentItem?.product}
					productId={currentItem?.product.id}
					type={currentItem?.product.buy_status}
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={currentItem?.product.model}
				/>
			</div>
		</>
	)
}

export default ProductItemV2

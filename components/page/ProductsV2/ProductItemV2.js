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
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

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
	const [labelOff, setLabelOff] = useState(false)
	const [activeSizeIndex, setActiveSizeIndex] = useState(0)
	let seriesTitle = data?.products[0]?.product?.customFields
		?.find(item => item.type_name === 'Top Titles')
		?.custom_fields.find(item => item.name === 'h2 Title')
	const dispatch = useDispatch()
	const [url, setUrl] = useState()

	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [screenSize, setScreenSize] = useState(null)

	useEffect(() => {
		window?.PriceSpider.rebind()
	}, [])

	useEffect(() => {
		if (screenSize && screenSize.length) {
			setCurrentItem(
				screenSize.find(item => item?.id?.value == data?.id?.value)
			)
			setActiveSizeIndex(
				screenSize.findIndex(item => item?.id?.value == data?.id?.value)
			)
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
		// window.dataLayer.push({
		// 	event: 'view_product',
		// 	eventData: {
		// 		product_id: currentItem?.model,
		// 		category: currentItem?.category?.name
		// 	}
		// })
		window.dataLayer.push({
			event: 'Online redirect',
			category: 'PriceSpider Click',
			action: 'PS-Redirect',
			label: currentItem?.product?.name
		})
	}

	return (
		<>
			<div className='product_item_v2'>
				<Link href={url ? url : '/'}>
					<a className='box-group-link'>
						<div
							className='product-group-content'
							style={{
								paddingTop: currentItem?.product?.isNew ? '38px' : '32px'
							}}>
							{currentItem?.product?.isNew ? (
								<div className='new_item'>
									<span>NEW</span>
								</div>
							) : <div className='new_item'>
								<span>NEW</span>
								</div>
							}
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
									</div>

									<h6 className='title'>{currentItem?.product?.name}</h6>
								</div>

								{screenSize && screenSize.length > 1 && (
									<div className='serie_selector'>
										<div className='serie_selector___label'>Sizes:</div>
										<Swiper
											navigation
											pagination={false}
											spaceBetween={4}
											slidesPerView={'auto'}
											centeredSlides={false}
											grabCursor={false}
											modules={[Navigation]}
											className='serie_selector___slider'>
											{screenSize.map((item, index) => (
												<SwiperSlide key={index} className='w-fit'>
													<div
														onClick={e => {
															e.preventDefault()
															setCurrentItem(item)
															setActiveSizeIndex(index)
														}}
														className={`serie_selector___slider___item ${
															activeSizeIndex === index ? 'active' : ''
														}`}>
														<div>{item?.value}</div>
													</div>
												</SwiperSlide>
											))}
										</Swiper>
									</div>
								)}

								{/* <div className='details_list'>
									<ul>
										<li>4K Ultra HD TV</li>
										<li>Wide Color Gamut</li>
										<li>Dolby Vision</li>
										<li>2-Year Warranty</li>
									</ul>
								</div>

								<div className='sale'>
									<div>Save $600</div>
								</div>
								<div className='price_row'>
									<div>$1099.99</div>
									<div>Was $1699.99</div>
								</div> */}

								<div className='product_item_v2_content w-100'>
									<div className='w-100 product_item_v2_content'>
										<div className='btns_gp d-flex justify-content-evenly justify-content-md-center no_wrap flex-row gap-1 align-items-center'>
											<Link href={url ? url : '/'}>
												<a className='view_product_button w-100'>
													<span>View Product</span>
												</a>
											</Link>
											{currentItem?.product?.buy_status === 'ChannelAdvisor' ? (
												<div
													className='ps-widget price_spider_button w-100'
													ps-sku={currentItem?.product?.model}></div>
											) : (
												<button
													disabled={
														currentItem?.product?.buy_status ===
															'ChannelAdvisor' ||
														currentItem?.product?.buy_status === 'Internal'
															? false
															: true
													}
													onClick={e => {
														e.stopPropagation()
														e.preventDefault()
														currentItem?.product?.buy_status ===
															'ChannelAdvisor' ||
														currentItem?.product?.buy_status === 'Internal'
															? dataLayerHandler()
															: {}
													}}
													style={
														currentItem?.product?.retailer
															? { cursor: 'pointer' }
															: {}
													}
													className={`channel_advisor_button w-100 ${
														currentItem?.product?.buy_status ===
															'ChannelAdvisor' ||
														currentItem?.product?.buy_status === 'Internal'
															? ''
															: 'disabled_btn'
													}`}>
													<div>
														{currentItem?.product?.buy_status ===
															'ChannelAdvisor' ||
														currentItem?.product?.buy_status === 'Internal'
															? 'Where To Buy'
															: 'coming soon'}
													</div>
												</button>
											)}
										</div>

										{currentItem?.product &&
											currentItem?.product?.customFields &&
											currentItem?.product?.customFields.length > 0 &&
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

									<div className='text-center w-100'>
										<button
											onClick={e => {
												e.stopPropagation()
												e.preventDefault()
												dispatch(addNewCompare(currentItem?.product))
											}}
											className='n-btn grey-text compare-btn text-uppercase'>
											Add To Compare
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</Link>
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

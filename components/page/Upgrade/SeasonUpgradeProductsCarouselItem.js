import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { GetSingleProduct } from 'services/Product'
import { useRouter } from 'next/router'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'
import { SwiperSlide } from 'swiper/react'

const SeasonUpgradeProductsCarouselItem = ({
	data,
	setChannelAdvisorData,
	setShowDialog
}) => {
	const [showSizes, setShowSizes] = useState(false)
	const [activeSizeIndex, setActiveSizeIndex] = useState(0)
	const [activeItem, setActiveItem] = useState(null)
	const [product, setProduct] = useState()
	const router = useRouter()
	const [screenSize, setScreenSize] = useState([])
	useEffect(() => {
		if (Array.isArray(product?.series[0]?.values)) {
			let addSizeToItem = product?.series[0].values
				.filter(item => item?.title && item?.productsList[0]?.status_id === 1)
				.map(item => ({
					...item,
					size: item?.title ? Number(item?.title?.replaceAll('"', '')) : 0
				}))
			setScreenSize(addSizeToItem.sort((a, b) => a.size - b.size))
		}
	}, [product])

	useEffect(() => {
		setActiveItem(data?.id?.value)
		getProduct()
	}, [])

	useEffect(() => {
		getProduct()
	}, [activeItem])

	function setData() {
		setChannelAdvisorData({
			product: product,
			productId: product?.id,
			type: 'static',

			model: product?.model,
			customizeRetailerId: data?.retailers?.value?.map(retailer => ({
				id: retailer?.id?.value,
				name: retailer?.name?.value
			}))
		})
		setShowDialog(true)
	}

	async function getProduct() {
		try {
			let response = await GetSingleProduct(router, activeItem)
			setProduct(response?.data?.data)
			setActiveItem(response?.data?.data?.id)
			// setActiveSizeIndex(
			// 	response?.data?.data?.series[0].values.indexOf(
			// 		response?.data?.data?.series[0].values.find(
			// 			(item, index) => item?.products[0] === response?.data?.data?.id
			// 		)
			// 	)
			// )
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<>
			<div className={'item h-100'}>
				<div className='column'>
					<img src={product?.image} alt='tv' className='image' />
					<div className='d-flex justify-content-between align-items-start gap-1'>
						<h6 className='title'>{product?.name}</h6>
						<span className='new_label'>{product?.isNew ? 'NEW' : ''}</span>
					</div>
				</div>
				<div className='column'>
					{screenSize && screenSize.length ? (
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
													setActiveItem(item?.products[0])
													setActiveSizeIndex(index)
												}}
												style={{ width: 100 / screenSize.length + '%' }}>
												{item.title}
											</li>
										))}
									</ul>
									<span
										style={{
											width: 100 / screenSize.length + '%',
											transform: 'translateX(' + activeSizeIndex * 100 + '%)'
										}}
										className='indicator'>
										{screenSize[activeSizeIndex]?.title}
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
					) : null}
					<ul className='specs'>
						{data?.features?.value.map((item, index) => (
							<li
								key={index}
								dangerouslySetInnerHTML={{ __html: item?.text?.value }}></li>
						))}
					</ul>
					<div className='off'>Save {data?.discount_amount?.value}</div>
					<div className='d-flex justify-content-start align-items-end gap-4 mb-n1'>
						<h4 className='price'>{data?.new_price?.value}</h4>
						<p className='old_price'>{data?.old_price?.value}</p>
					</div>
					<button onClick={setData} className='n-btn medium black w-100'>
						Shop Deal
					</button>
				</div>
			</div>
		</>
	)
}

export default SeasonUpgradeProductsCarouselItem

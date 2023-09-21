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
	const [product, setProduct] = useState()
	const router = useRouter()

	const sizes = [
		{
			size: `43"`
		},
		{
			size: `50"`
		},
		{
			size: `55"`
		},
		{
			size: `65"`
		},
		{
			size: `75"`
		}
	]

	useEffect(() => {
		getProduct()
	}, [data])

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
			let response = await GetSingleProduct(router, data?.id?.value)
			setProduct(response?.data?.data)
		} catch (error) {
			console.log(error)
		}
	}
	SeasonUpgradeProductsCarouselItem.displayName = 'SwiperSlider'
	return (
		<>
			<div className={'item'}>
				<img src={product?.image} alt='tv' className='image' />
				<div className='d-flex justify-content-between align-items-start gap-1'>
					<h6 className='title'>{product?.name}</h6>
					<span className='new_label'>{product?.isNew ? 'NEW' : ''}</span>
				</div>
				<div
					className={`screen_size_selector ${showSizes ? 'show_sizes' : ''}`}>
					<div className='content'>
						<div className='sizes'>
							<ul className='size_list'>
								{sizes.map((item, index) => (
									<li
										key={index}
										className={activeSizeIndex === index ? 'active' : ''}
										onClick={() => setActiveSizeIndex(index)}
										style={{ width: 100 / sizes.length + '%' }}>
										{item.size}
									</li>
								))}
							</ul>
							<span
								style={{
									width: 100 / sizes.length + '%',
									transform: 'translateX(' + activeSizeIndex * 100 + '%)'
								}}
								className='indicator'>
								{sizes[activeSizeIndex].size}
							</span>
						</div>
						<div onClick={() => setShowSizes(true)} className='show_sizes_btn'>
							<span className='label'>Select Screen Size</span>
							<FontAwesomeIcon icon={faChevronDown} size='sm' />
						</div>
					</div>
				</div>
				<ul className='specs'>
					{data?.features?.value.map((item, index) => (
						<li dangerouslySetInnerHTML={{ __html: item?.text?.value }}></li>
					))}
				</ul>
				<div className='off'>Save {data?.discount_amount?.value}</div>
				<div className='d-flex justify-content-start align-items-end gap-4 mb-n1'>
					<h4 className='price'>{data?.new_price?.value}</h4>
					<p className='old_price'>{data?.old_price?.value}</p>
				</div>
				<button onClick={setData} className='n-btn medium black'>
					Shop Deal
				</button>
			</div>
		</>
	)
}

export default SeasonUpgradeProductsCarouselItem

import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon_white.png'
import { RouteHandler } from 'utils/routeHandler'

// component
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))
const ProductInfoSlider = dynamic(() => import('./ProductInfoSlider'))
const ProductSliderLinkButtonV3 = dynamic(() =>
	import('./ProductSliderLinkButtonV3')
)

function ProductInfoAndSliderBox({ pim, data }) {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [screenSize, setScreenSize] = useState([])
	const [showSizes, setShowSizes] = useState(false)
	const [labelOff, setLabelOff] = useState(false)
	const [currentItem, setCurrentItem] = useState(null)
	const [activeSizeIndex, setActiveSizeIndex] = useState(0)
	useEffect(() => {
		if (Array.isArray(pim?.series[0]?.values)) {
			let addSizeToItem = pim?.series[0].values
				.filter(item => item?.title && item?.productsList[0]?.status_id === 1)
				.map(item => ({
					...item,
					size: item?.title ? Number(item?.title?.replaceAll('"', '')) : 0
				}))
			setScreenSize(addSizeToItem.sort((a, b) => a.size - b.size))
		}
		window?.PriceSpider.rebind()
	}, [])

	const dataLayerHandler = () => {
		setChanelAdviserHandler(!chanelAdviserHandler)
		// window.dataLayer.push({
		// 	event: 'view_product',
		// 	eventData: {
		// 		product_id: pim?.model,
		// 		category: pim?.Category?.name
		// 	}
		// })
		window.dataLayer.push({
			event: 'Online redirect',
			category: 'PriceSpider Click',
			action: 'PS-Redirect',
			label: pim?.name
		})
	}

	const handleScreenSizeDropdown = () => {
		setShowSizes(prev => !prev)
	}

	return (
		<section
			id={data.name + data.id}
			className={
				pim?.isNew === 1 ? `new_product_info new_badge` : `new_product_info`
			}>
			<div className='wrapper'>
				<div className='product_info d-block d-md-none'>
					<h4 className='title'>{pim?.name}</h4>
				</div>
				<ProductInfoSlider
					firstImage={pim?.image}
					pim={pim?.assets}
					allData={pim}
				/>
				<div className='product_info'>
					<h5 className='model d-none d-md-block'>{pim?.model}</h5>
					<h4 className='title d-none d-md-block'>{pim?.name}</h4>
					{screenSize && screenSize.length > 0 ? (
						<div className='sizes'>
							<p className='sizes_text'>Sizes:</p>
							<div className='sizes_list'>
								{screenSize.map(
									(item, index) =>
										item.title && (
											<ProductSliderLinkButtonV3
												key={index}
												data={item}
												pim={pim}
											/>
										)
								)}
							</div>
						</div>
					) : (
						<div className='sizes pb-0'></div>
					)}
					{pim?.isNew === 0 && (
						<div className='text-center text-md-start'>
							{pim?.buy_status === 'ChannelAdvisor' ? (
								<div
									className='ps-widget ps_wtb_btn mx-auto mx-md-0'
									ps-sku={pim?.model}></div>
							) : (
								<button
									className='wtb_btn mx-auto mx-md-0'
									disabled={
										pim?.buy_status !== 'ChannelAdvisor' &&
										pim?.buy_status !== 'Internal'
									}
									onClick={() =>
										pim?.buy_status === 'ChannelAdvisor' ||
										pim?.buy_status === 'Internal'
											? dataLayerHandler()
											: {}
									}>
									<span>
										{pim?.buy_status === 'ChannelAdvisor' ||
										pim?.buy_status === 'Internal'
											? 'Where To Buy'
											: 'coming soon'}
									</span>
								</button>
							)}
						</div>
					)}
				</div>
			</div>

			{pim && (
				<ModalChanelAdviser
					product={pim}
					productId={pim.id}
					type={pim.buy_status}
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={pim?.model}
				/>
			)}
		</section>
	)
}

export default ProductInfoAndSliderBox
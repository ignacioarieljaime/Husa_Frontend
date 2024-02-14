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
	}, [])

	const dataLayerHandler = () => {
		setChanelAdviserHandler(!chanelAdviserHandler)
		window.dataLayer.push({
			event: 'view_product',
			eventData: {
				product_id: pim?.model,
				category: pim?.Category?.name
			}
		})
	}

	const handleScreenSizeDropdown = () => {
		setShowSizes(prev => !prev)
	}

	return (
		<section id={data.name + data.id} className='new_product_info'>
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
					{screenSize && screenSize.length <= 5 && screenSize.length > 0 ? (
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
					) : screenSize.length > 5 ? (
						<div className='serie_selector'>
							<div
								className={`screen_size_selector ${
									showSizes ? 'show_sizes' : ''
								} dropdown_active`}>
								<div className='content'>
									<div
										onClick={() => handleScreenSizeDropdown()}
										className='show_sizes_btn'>
										<span className={`label ${labelOff ? 'mx-auto ps-5' : ''}`}>
											{labelOff ? currentItem?.title : 'Select Screen Size'}
										</span>
										<FontAwesomeIcon icon={faChevronDown} size='sm' />
									</div>
								</div>
							</div>
							{screenSize && screenSize.length >= 5 && showSizes && (
								<div className='sizes_dropdown'>
									<ul className='size_list'>
										{screenSize.map((item, index) => (
											<Link href={RouteHandler(item.products[0], 'product')}>
												<li
													key={index}
													className={activeSizeIndex === index ? 'active' : ''}
													onClick={() => {
														setCurrentItem(item)
														setActiveSizeIndex(index)
														setLabelOff(true)
														setShowSizes(false)
													}}>
													{item?.title}
												</li>
											</Link>
										))}
										<span
											style={{
												transform: 'translateY(' + activeSizeIndex * 100 + '%)'
											}}
											className='indicator'>
											{currentItem?.title}
										</span>
									</ul>
								</div>
							)}
						</div>
					) : (
						<div className='sizes pb-0'></div>
					)}
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
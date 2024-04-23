import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useRef, useEffect } from 'react'
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))
import ellipsisMenu from 'public/assets/images/icon-ellipsis-vertical.png'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon_white.png'
import { useWindowSize } from 'hooks/useWindowSize'
function ProductCategoryBox({ data, pim }) {
	const router = useRouter()
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [fix, setFix] = useState(false)
	const [openList, setOpenList] = useState(false)
	const menu = useRef()
	const windowSize = useWindowSize()

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (menu?.current?.offsetTop <= window.scrollY + 72) {
				setFix(true)
			} else {
				setFix(false)
			}
		})
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

	let { structure } = data
	let modelName = structure?.support?.value.split('/')
	console.log(modelName[3])
	return (
		<>
			{' '}
			<div
				id={data.name + data.id}
				className='product_nav'
				ref={menu}
				style={{ zIndex: fix ? 999 : 10 }}>
				<nav className='nav'>
					<ul className='items row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
						<li className='model me-md-auto px-0'>
							<span>{pim?.model}</span>
						</li>
						{structure?.tags?.value.map((item, index) => (
							<li className='px-0' key={`category-item-${index}`}>
								<Link
									target={
										item.target?.target ? item.target?.target : '_self'
									}
									href={item.target.value ? item.target.value : '/'}>
									<a
										className='link'
										target={
											item.target?.target ? item.target?.target : '_self'
										}>
										<span className=' underline-on-hover text-uppercase'>
											{item.title.value}

											{item.target?.target === '_blank' && (
												<img
													style={{ marginLeft: '10px' }}
													src={OpenPageOnNewTab.src}
												/>
											)}
										</span>
									</a>
								</Link>
							</li>
						))}
						<li className='px-0'>
							
							<Link
								href={
									// structure?.support?.value ? structure?.support.value : '/'
									`/support/${
										router.pathname
											.split('/')
											[router.pathname.split('/').length - 1].startsWith(
												'H'
											)
											? router.pathname
													.split('/')
													[router.pathname.split('/').length - 1].replace(
														'H',
														'h'
													)
											: router.pathname.split('/')[
													router.pathname.split('/').length - 1
												]
									}?model=${modelName[3]}`
								}>
								<a className='link'>
									<span className='underline-on-hover text-uppercase'>
										{' '}
										Support
									</span>
								</a>
							</Link>
						</li>
						<li className='px-0'>
							<div className='ps-widget ps-wtb' ps-sku={pim?.model}></div>
							{/* {pim?.buy_status === 'ChannelAdvisor' ? (
								<div className='ps-widget ps-wtb' ps-sku={pim?.model}></div>
							) : (
								<button
									className='wtb'
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
									{pim?.buy_status === 'ChannelAdvisor' ||
									pim?.buy_status === 'Internal'
										? 'Where To Buy'
										: 'Coming Soon'}
									{pim?.buy_status === 'ChannelAdvisor' ||
								pim?.buy_status === 'Internal' ? (
									<img
										style={{ marginLeft: '16px' }}
										src={OpenPageOnNewTab.src}
									/>
								) : null}
								</button>
							)} */}
						</li>
					</ul>
				</nav>
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
		</>
	)
}

export default ProductCategoryBox

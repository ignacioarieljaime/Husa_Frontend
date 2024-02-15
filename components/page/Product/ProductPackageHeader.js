import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// component
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))
const ProductInfoSlider = dynamic(() => import('./ProductInfoSlider'))
const ProductSliderLinkButton = dynamic(() =>
	import('./ProductSliderLinkButton')
)
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon_white.png'

const ProductPackageHeader = ({ pim, data }) => {
	const [MPNData, setMPNData] = useState([])
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	useEffect(() => {
		sortMPNData()
	}, [])

	const sortMPNData = () => {
		let MPN = []
		pim?.custom_fields?.map((item, index) => {
			if (item.title.includes('product_')) {
				item.sortNumber = Number(item.title.split('_')[1])
				MPN.push(item)
			}
		})

		setMPNData(
			MPN.sort((first, second) => first.sortNumber - second.sortNumber)
		)
	}

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

	return (
		<section id={data.name + data.id} className='new_product_info'>
			<div className='wrapper row'>
				<div className='col-12 d-block d-md-none product_info pt-3 my-auto'>
					<h1 className='title'>
						{/* {
								pim?.custom_fields.find(item => item.title === 'span Title')
									?.value
							} */}
						{pim?.name}
					</h1>
					<div className='package-details'>
						<ul className='mb-0'>
							{MPNData.map((item, index) => (
								<li key={'mpn' + index}>{item.value}</li>
							))}
						</ul>
					</div>
				</div>
				<ProductInfoSlider
					firstImage={pim?.image}
					pim={pim?.assets}
					allData={pim}
				/>
				<div className='col-12 col-md-6 product_info my-auto'>
					<h1 className='title d-md-block d-none'>
						{/* {
								pim?.custom_fields.find(item => item.title === 'span Title')
									?.value
							} */}
						{pim?.name}
					</h1>
					<div className='package-details d-md-block d-none'>
						<ul>
							{MPNData.map((item, index) => (
								<li key={'mpn' + index}>{item.value}</li>
							))}
						</ul>
					</div>
					<div className='sizes pt-0'></div>

					<div className='text-center text-md-start'>
						{pim?.buy_status === 'ChannelAdvisor' ? (
							<div
								className='ps-widget ps_wtb_btn w-fit mx-auto mx-md-0'
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
								{pim?.buy_status === 'ChannelAdvisor' ||
								pim?.buy_status === 'Internal'
									? 'Where To Buy'
									: 'coming soon'}
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

export default ProductPackageHeader
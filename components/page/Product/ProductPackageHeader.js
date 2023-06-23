import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// component
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))
const ProductInfoSlider = dynamic(() => import('./ProductInfoSlider'))
const ProductSliderLinkButton = dynamic(() =>
	import('./ProductSliderLinkButton')
)

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
		<section
			id={data.name + data.id}
			className='product single-product package-product'>
			<div className='container'>
				<div className='row'>
					<ProductInfoSlider firstImage={pim?.image} pim={pim?.assets} />
					<div className='col-12 col-md-6 product-info my-auto'>
						<article className='article'>
							<h1 className='mb-8'>
								{/* {
								pim?.custom_fields.find(item => item.title === 'span Title')
									?.value
							} */}
								{pim?.name}
							</h1>
						</article>
						<div className='package-details'>
							<span>MPN :</span>
							<ul>
								{MPNData.map((item, index) => (
									<li key={'mpn' + index}>{item.value}</li>
								))}
							</ul>
						</div>
						<button
							className={`${
								pim?.buy_status === 'ChannelAdvisor' ||
								pim?.buy_status === 'Internal'
									? ''
									: 'disabled'
							} pdp_where_to_buy_btn rounded-0 px-6 py-3`}
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

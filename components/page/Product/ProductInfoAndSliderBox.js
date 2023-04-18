import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
// component
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))
const ProductInfoSlider = dynamic(() => import('./ProductInfoSlider'))
const ProductSliderLinkButton = dynamic(() =>
	import('./ProductSliderLinkButton')
)

function ProductInfoAndSliderBox({ pim, data }) {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [screenSize, setScreenSize] = useState([])
	useEffect(() => {
		if (Array.isArray(pim?.series[0]?.values)) {
			let addSizeToItem = pim?.series[0].values.map(item => ({
				...item,
				size: item?.title ? Number(item?.title?.replaceAll('"', '')) : 0
			}))
			setScreenSize(addSizeToItem.sort((a, b) => a.size - b.size))
		}
	}, [])
	return (
		<section id={data.name + data.id} className='product single-product'>
			<div className='' style={{ paddingTop: '4%' }}>
				<div className='row'>
					<ProductInfoSlider
						firstImage={pim?.image}
						pim={pim?.assets}
						allData={pim}
					/>
					<div className='col-12 col-md-6 product-info my-auto'>
						<h2
							className={`fw-normal ${
								pim?.custom_fields.find(item => item.title === 'h2 Title')
									?.value
									? 'text-primary-new serie mb-5'
									: 'text-black fs-2hx mb-1'
							} `}>
							{pim?.custom_fields.find(item => item.title === 'h2 Title')?.value
								? pim?.custom_fields.find(item => item.title === 'h2 Title')
										?.value
								: pim?.custom_fields?.find(
										item => item.title === 'Product Type'
								  )?.value}
						</h2>
						<article className='article'>
							<h3 className='my-3 text-uppercase fw-bold extra_title'>
								{
									pim?.custom_fields.find(item => item.title === 'span Title')
										?.value
								}
							</h3>
							<h1 className='mb-5 mt-0'>{pim?.name}</h1>
						</article>
						<p className='text-primary-new mt-5'>Model: {pim?.model}</p>
						<div className='model-toggle '>
							{screenSize.map(
								(item, index) =>
									item.title && (
										<ProductSliderLinkButton
											key={index}
											data={item}
											pim={pim}
										/>
									)
							)}
						</div>
						<div className='product-rating'></div>
						<button
							className={`pdp_where_to_buy_btn ${
								pim?.buy_status === 'ChannelAdvisor' ||
								pim?.buy_status === 'Internal'
									? ''
									: 'disabled'
							} rounded-0 px-6 py-3`}
							onClick={() =>
								pim?.buy_status === 'ChannelAdvisor' ||
								pim?.buy_status === 'Internal'
									? setChanelAdviserHandler(!chanelAdviserHandler)
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

export default ProductInfoAndSliderBox

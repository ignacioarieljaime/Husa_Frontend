import dynamic from 'next/dynamic'
import React, { useState } from 'react'
// component
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))
const ProductInfoSlider = dynamic(() => import('./ProductInfoSlider'))
const ProductSliderLinkButtonV2 = dynamic(() =>
	import('./ProductSliderLinkButtonV2')
)

function ProductInfoAndSliderBoxV2({ pim, data }) {
	let { structure } = data
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)

	return (
		<section
			id={data.name + data.id}
			style={{
				backgroundColor: data?.structure?.backgroundColor?.value
			}}
			className='product single-product single-product-v2 theme-light'>
			<div className='container'>
				<div className='row'>
					<ProductInfoSlider firstImage={pim?.image} pim={pim?.assets} />
					<div className='col-12 col-md-6 product-info my-auto'>
						<h2
							className={`title ${
								pim?.custom_fields.find(item => item.title === 'h2 Title')
									?.value
									? 'text-dark mb-5'
									: 'text-dark fs-2hx mb-1'
							} ${structure?.theme.value === 'light' && 'text-white'}`}>
							{pim?.custom_fields.find(item => item.title === 'h2 Title')?.value
								? pim?.custom_fields.find(item => item.title === 'h2 Title')
										?.value
								: pim?.custom_fields?.find(
										item => item.title === 'Product Type'
								  )?.value}
						</h2>
						<h1
							className={`serie  mb-8 ${
								structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
							}`}>
							{
								pim?.custom_fields.find(item => item.title === 'span Title')
									?.value
							}
						</h1>
						<span
							className={`! mb-5 text-uppercase ${
								structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
							}`}>
							{data?.structure?.description?.value}
						</span>
						<p
							className={`${
								structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
							}`}>
							Model: {pim?.model}
						</p>
						<div className='model-toggle '>
							{pim?.series[0]?.values.map(
								(item, index) =>
									item.title && (
										<ProductSliderLinkButtonV2
											key={index}
											data={item}
											pim={pim}
										/>
									)
							)}
						</div>
						<div className='product-rating'></div>
						<button
							className={`pdp_where_to_buy_btn px-6 py-3 ${
								structure?.theme.value === 'light' && 'light_hover' 
							}`}
							disabled={pim?.buy_status ? false : true}
							style={{ color: data?.structure?.backgroundColor?.value }}
							onClick={() =>
								pim?.buy_status === 'ChannelAdvisor'
									? setChanelAdviserHandler(!chanelAdviserHandler)
									: {}
							}>
							{pim?.buy_status === 'ChannelAdvisor'
								? 'Where To Buy'
								: 'coming soon'}
						</button>
					</div>
				</div>
			</div>
			<ModalChanelAdviser
				condition={chanelAdviserHandler}
				handler={setChanelAdviserHandler}
				model={pim?.model}
			/>
		</section>
	)
}

export default ProductInfoAndSliderBoxV2

import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import ProductInfoSliderV2 from './ProductInfoSliderV2'
import ProductSliderLinkButtonV3 from './ProductSliderLinkButtonV3'
// component
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))
const ProductInfoSlider = dynamic(() => import('./ProductInfoSlider'))
const ProductSliderLinkButtonV2 = dynamic(() =>
	import('./ProductSliderLinkButtonV2')
)
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon_white.png'

function ProductInfoAndSliderBoxV2({ pim, data }) {
	let { structure } = data
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)

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
			style={{
				backgroundColor: data?.structure?.backgroundColor?.value
			}}
			className='theme-light new_product_info p-0'>
			<div className='wrapper row'>
				<div className='col-12 d-block d-md-none product_info my-auto'>
					<h2
						className={`serie ${
							structure?.theme.value === 'light' && 'text-white'
						}`}>
						{pim?.custom_fields.find(item => item.title === 'h2 Title')?.value
							? pim?.custom_fields.find(item => item.title === 'h2 Title')
									?.value
							: pim?.custom_fields?.find(item => item.title === 'Product Type')
									?.value}
					</h2>
					<h3
						className={`model ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						{
							pim?.custom_fields.find(item => item.title === 'span Title')
								?.value
						}
					</h3>
					<h1
						className={`title ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						{pim?.name}
					</h1>
					<p
						className={`model_number ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						Model: {pim?.model}
					</p>

					{/* <h2
						className={`title ${
							pim?.custom_fields.find(item => item.title === 'h2 Title')?.value
								? 'text-dark mb-5'
								: 'text-dark fs-2hx mb-1'
						} ${structure?.theme.value === 'light' && 'text-white'}`}>
						{pim?.custom_fields.find(item => item.title === 'h2 Title')?.value
							? pim?.custom_fields.find(item => item.title === 'h2 Title')
									?.value
							: pim?.custom_fields?.find(item => item.title === 'Product Type')
									?.value}
					</h2> */}
					{/* <h1
						className={`serie  mb-8 ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						{pim?.custom_fields.find(item => item.title === 'span Title')?.value
							? pim?.custom_fields.find(item => item.title === 'span Title')
									?.value
							: pim?.name}
					</h1> */}
					<div
						className={`mb-8 text-uppercase ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						{data?.structure?.description?.value}
					</div>
					{/* <p
						className={`${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						Model: {pim?.model}
					</p> */}
					{pim?.series[0]?.values && pim?.series[0]?.values.length > 0 ? (
						<div className='sizes'>
							<p
								className={`sizes_text ${
									structure?.theme.value === 'light'
										? 'text-white'
										: 'text-dark'
								}`}>
								Available Screen Sizes
							</p>
							<div className='sizes_list'>
								{pim?.series[0]?.values.map(
									(item, index) =>
										item.title && (
											<ProductSliderLinkButtonV3
												key={index}
												data={item}
												theme={structure?.theme.value}
												pim={pim}
											/>
										)
								)}
							</div>
						</div>
					) : (
						<div className='sizes pb-0'></div>
					)}
					<div className='text-center text-md-start'>
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
							{/* {pim?.buy_status === 'ChannelAdvisor' ||
							pim?.buy_status === 'Internal' ? (
								<img
									style={{ marginLeft: '16px' }}
									src={OpenPageOnNewTab.src}
								/>
							) : null} */}
						</button>
					</div>
				</div>
				<ProductInfoSlider
					firstImage={pim?.image}
					pim={pim?.assets}
					allData={pim}
				/>
				<div className='col-12 col-md-6 product_info my-auto'>
					<h2
						className={`serie ${
							structure?.theme.value === 'light' && 'text-white'
						}`}>
						{pim?.custom_fields.find(item => item.title === 'h2 Title')?.value
							? pim?.custom_fields.find(item => item.title === 'h2 Title')
									?.value
							: pim?.custom_fields?.find(item => item.title === 'Product Type')
									?.value}
					</h2>
					<h3
						className={`model ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						{
							pim?.custom_fields.find(item => item.title === 'span Title')
								?.value
						}
					</h3>
					<h1
						className={`title ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						{pim?.name}
					</h1>
					<p
						className={`model_number ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						Model: {pim?.model}
					</p>

					{/* <h2
						className={`title ${
							pim?.custom_fields.find(item => item.title === 'h2 Title')?.value
								? 'text-dark mb-5'
								: 'text-dark fs-2hx mb-1'
						} ${structure?.theme.value === 'light' && 'text-white'}`}>
						{pim?.custom_fields.find(item => item.title === 'h2 Title')?.value
							? pim?.custom_fields.find(item => item.title === 'h2 Title')
									?.value
							: pim?.custom_fields?.find(item => item.title === 'Product Type')
									?.value}
					</h2> */}
					{/* <h1
						className={`serie  mb-8 ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						{pim?.custom_fields.find(item => item.title === 'span Title')?.value
							? pim?.custom_fields.find(item => item.title === 'span Title')
									?.value
							: pim?.name}
					</h1> */}
					<div
						className={`mb-8 text-uppercase ${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						{data?.structure?.description?.value}
					</div>
					{/* <p
						className={`${
							structure?.theme.value === 'light' ? 'text-white' : 'text-dark'
						}`}>
						Model: {pim?.model}
					</p> */}
					{pim?.series[0]?.values && pim?.series[0]?.values.length > 0 ? (
						<div className='sizes'>
							<p
								className={`sizes_text ${
									structure?.theme.value === 'light'
										? 'text-white'
										: 'text-dark'
								}`}>
								Available Screen Sizes
							</p>
							<div className='sizes_list'>
								{pim?.series[0]?.values.map(
									(item, index) =>
										item.title && (
											<ProductSliderLinkButtonV3
												key={index}
												data={item}
												theme={structure?.theme.value}
												pim={pim}
											/>
										)
								)}
							</div>
						</div>
					) : (
						<div className='sizes pb-0'></div>
					)}
					<div className='text-center text-md-start'>
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
							{/* {pim?.buy_status === 'ChannelAdvisor' ||
							pim?.buy_status === 'Internal' ? (
								<img
									style={{ marginLeft: '16px' }}
									src={OpenPageOnNewTab.src}
								/>
							) : null} */}
						</button>
					</div>
					{/* <div className='model-toggle '>
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
						className={`pdp_where_to_buy_btn ${
							pim?.buy_status === 'ChannelAdvisor' ||
							pim?.buy_status === 'Internal'
								? ''
								: 'disabled'
						} px-6 py-3 ${structure?.theme.value === 'light' && 'light_hover'}`}
						disabled={pim?.buy_status ? false : true}
						style={{ color: data?.structure?.backgroundColor?.value }}
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
					</button> */}
				</div>
			</div>
			{pim && (
				<ModalChanelAdviser
					productId={pim.id}
					product={pim}
					type={pim.buy_status}
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={pim?.model}
				/>
			)}
		</section>
	)
}

export default ProductInfoAndSliderBoxV2

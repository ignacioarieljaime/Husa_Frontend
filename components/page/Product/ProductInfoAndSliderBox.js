import dynamic from 'next/dynamic'
import React, { useState } from 'react'
// component
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))
const ProductInfoSlider = dynamic(() => import('./ProductInfoSlider'))
const ProductSliderLinkButton = dynamic(() =>
	import('./ProductSliderLinkButton')
)

function ProductInfoAndSliderBox({ pim, data }) {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	return (
		<section id={data.name + data.id} className='product single-product'>
			<div className='container'>
				<div className='row'>
					<ProductInfoSlider pim={pim?.assets} />
					<div className='col-12 col-md-6 product-info my-auto'>
						<h2 className='text-primary fs-2x mb-5'>
							{
								pim?.custom_fields.find(item => item.title === 'h2 Title')
									?.value
							}
						</h2>
						<h1 className='fs-2hx mb-8'>
							{
								pim?.custom_fields.find(item => item.title === 'span Title')
									?.value
							}
						</h1>
						<span className='fs-2hx mb-5'>{pim?.name}</span>
						<p className='text-primary'>Model: {pim?.model}</p>
						<div className='model-toggle '>
							{pim?.series[0]?.values.map(
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
							className='btn btn-primary rounded-0 px-6 py-3'
							onClick={() =>
								data.structure?.whereToBuy?.value &&
								setChanelAdviserHandler(!chanelAdviserHandler)
							}>
							{data.structure?.whereToBuy?.value
								? 'Where To Buy'
								: 'coming soon'}
						</button>
					</div>
				</div>
			</div>
			{chanelAdviserHandler && (
				<ModalChanelAdviser
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={pim?.model}
				/>
			)}
		</section>
	)
}

export default ProductInfoAndSliderBox

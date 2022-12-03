import React, { useState } from 'react'
import dynamic from 'next/dynamic'
// component
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))
const ProductInfoSlider = dynamic(() => import('./ProductInfoSlider'))
const ProductSliderLinkButton = dynamic(() =>
	import('./ProductSliderLinkButton')
)

const ProductPackageHeader = ({ pim, data }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	pim = {
		...pim,
		packageItems: [
			'26.6 cu. ft. French Door Refrigerator (HRF266N6CSE1)',
			'Freestanding Electric Range with 5.8 cu. ft. (HBE3501CPS)',
			'1.7 cu. ft. Over-the-Range Microwave (HMVZ173SS)',
			'Top-Control Dishwasher (HUI6220XCUS)'
		]
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
								{pim?.packageItems?.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
						<button
							className=' pdp_where_to_buy_btn rounded-0 px-6 py-3'
							onClick={() =>
								pim?.retailers?.length !== 0
									? setChanelAdviserHandler(!chanelAdviserHandler)
									: {}
							}>
							{pim?.retailers?.length !== 0 ? 'Where To Buy' : 'coming soon'}
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

export default ProductPackageHeader

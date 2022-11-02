import React, { useState } from 'react'

const ExtendedWarrantySevicePlansStep = ({
	product,
	plans,
	onChange,
	stepHandler
}) => {
	return (
		<section>
			<div className='service-plans'>
				<div className='content-container'>
					<div className='product'>
						<h6 className='model'>{product?.model?.value}</h6>
						<h5 className='title'>{product?.title?.value}</h5>
						<img
							src={product?.image?.src}
							alt={product?.image?.alt}
							className='image'
						/>
						<div className='price-label'>Purchased Price:</div>
						<div className='n-btn primary w-fit mx-auto'>$250 USD</div>
					</div>
					<div className='box'>
						<div className='title'>Select Your Service Plan</div>
						<ul className='plans'>
							{plans?.value.map((item, index) => (
								<li className='plan' key={index}>
									<div>
										<span>{item?.duration}</span>
										<span className='text-primary d-none d-md-block'> | </span>
										<span>{item?.price}</span>
									</div>
									<button
										onClick={() => {
											onChange(item?.id)
											stepHandler({ title: 'Service Plans', id: 2 })
										}}
										className='n-btn outline-black transparent'>
										Select
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantySevicePlansStep

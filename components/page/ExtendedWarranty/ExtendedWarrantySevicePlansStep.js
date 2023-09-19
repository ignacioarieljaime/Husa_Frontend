import React, { useState } from 'react'

const ExtendedWarrantySevicePlansStep = ({
	product,
	plans,
	onClick,
	price
}) => {
	return (
		<section>
			<div className='service-plans'>
				<div className='content-container'>
					<div className='product'>
						<h6 className='model'>{product?.model}</h6>
						<h5 className='title'>{product?.name}</h5>
						<img
							src={
								product?.image ? product?.image : product?.Category?.media?.url
							}
							alt={product?.name}
							className='image'
						/>
						<div className='price-label'>Purchased Price:</div>
						<div className='n-btn primary simple w-fit mx-auto'>
							${price} USD
						</div>
					</div>
					<div className='box'>
						<div className='title'>Select Your Service Plan</div>
						<ul className='plans'>
							{plans?.map((item, index) => (
								<li className='plan' key={index}>
									<div>
										<span>{item?.duration} Years</span>
										<span className='text-primary d-none d-md-block'> | </span>
										<span>${item?.price} USD</span>
									</div>
									<button
										onClick={() => onClick(item)}
										className='n-btn outline-black medium transparent'>
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

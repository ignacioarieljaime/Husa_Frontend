import React, { useState } from 'react'

const ExtendedWarrantySevicePlansStep = () => {
	const [plan, setPlan] = useState(0)

	const list = [
		{
			id: 0,
			price: '$56 USD',
			duration: '2 Years'
		},
		{
			id: 1,
			price: '$86 USD',
			duration: '3 Years'
		},
		{
			id: 2,
			price: '$106 USD',
			duration: '4 Years'
		}
	]

	return (
		<section>
			<div className='service-plans'>
				<div className='content-container'>
					<div className='product'>
						<h6 className='model'>HUI6220XCUS</h6>
						<h5 className='title'>
							47-Decibel Top Control 24" Built-In Dishwasher
						</h5>
						<img
							src='https://assets.hisense-usa.com/assets/GalleryImages/Product/278/e7a660ef50/Artboard-1__ScaleMaxWidthWzY0MF0.png'
							alt='featured image'
							className='image'
						/>
						<div className='price-label'>Purchased Price:</div>
						<div className='n-btn primary w-fit mx-auto'>$250 USD</div>
					</div>
					<div className='box'>
						<div className='title'>Select Your Service Plan</div>
						<ul className='plans'>
							{list.map((item, index) => (
								<li className='plan' key={index}>
									<div>
										<span>{item.duration}</span>
										<span className='text-primary d-none d-md-block'> | </span>
										<span>{item.price}</span>
									</div>
									<button
										onClick={() => setPlan(item.id)}
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

import React from 'react'
import Dollar from 'components/icons/Dollar'

const ExtendedWarrantyPurchasedPriceStep = () => {
	return (
		<section>
			<div className='purchased-price-step'>
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
					</div>
					<div className='box'>
						<div className='title'>Purchased Price</div>
						<p className='description'>
							Enter the price in which you purchased your Televsion. Price paid
							with applicable sales tax.
						</p>
						<div className='extended-warranty-input'>
							<input placeholder='Enter price' />
							<Dollar />
						</div>
						<button className='n-btn black-outline transparent'>Enter</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyPurchasedPriceStep

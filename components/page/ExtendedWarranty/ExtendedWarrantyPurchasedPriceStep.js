import React from 'react'
import Dollar from 'components/icons/Dollar'

const ExtendedWarrantyPurchasedPriceStep = ({ product, price, onChange }) => {
	return (
		<section>
			<div className='purchased-price-step'>
				<div className='content-container'>
					<div className='product'>
						<h6 className='model'>{product?.model?.value}</h6>
						<h5 className='title'>{product?.title?.value}</h5>
						<img
							src={product?.image?.src}
							alt={product?.image?.alt}
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
							<input
								placeholder='Enter price'
								type='text'
								value={price}
								onChange={e => onChange(e.target.value)}
							/>
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

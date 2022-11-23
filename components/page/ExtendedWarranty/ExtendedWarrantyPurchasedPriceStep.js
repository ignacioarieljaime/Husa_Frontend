import React, { useState } from 'react'
import Dollar from 'components/icons/Dollar'
import Spinner from 'components/common/Spinner'

const ExtendedWarrantyPurchasedPriceStep = ({ product, getPlans, loading }) => {
	const [price, setPrice] = useState()

	return (
		<section>
			<div className='purchased-price-step'>
				{!product ? (
					<div className='w-100 d-flex justify-content-center'>
						<Spinner className={'mt-5'} size={80} />
					</div>
				) : (
					<div className='content-container'>
						<div className='product'>
							<h6 className='model'>{product?.model}</h6>
							<h5 className='title'>{product?.name}</h5>
							<img src={product?.image} alt={product?.name} className='image' />
						</div>
						<div className='box'>
							<div className='title'>Purchased Price</div>
							<p className='description'>
								Enter the price in which you purchased your Televsion. Price
								paid with applicable sales tax.
							</p>
							<div className='extended-warranty-input'>
								<input
									placeholder='Enter price'
									type='text'
									onChange={e => setPrice(e.target.value)}
								/>
								<Dollar />
							</div>
							<button
								className='n-btn black-outline d-flex align-items-center mx-auto transparent'
								onClick={() => getPlans(parseFloat(price))}
								disabled={loading}
							>
								Enter
								{loading && <Spinner className={'ms-2'} size={20} />}
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default ExtendedWarrantyPurchasedPriceStep

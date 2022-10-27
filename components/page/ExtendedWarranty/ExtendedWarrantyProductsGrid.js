import React from 'react'
import ExtendedWarrantyProduct from './ExtendedWarrantyProduct'
import Spinner from 'components/common/Spinner'

const ExtendedWarrantyProductsGrid = ({ product, description, products }) => {
	return (
		<section className='products-v2'>
			<div className='container mb-8 mb-md-20'>
				<h2 className='title fs-2hx'>
					Protect Your <span className='text-primary'>{product}</span>
				</h2>
				<p className='description'>{description}</p>
			</div>
			<div className='extended-warranty-products-grid  products-grid'>
				{!Array.isArray(products) ? (
					<div className='w-100 d-flex justify-content-center'>
						<Spinner className={'mt-5'} size={80} />
					</div>
				) : (
					<div className='products'>
						{products.map((item, index) => (
							<ExtendedWarrantyProduct key={index} data={item} />
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default ExtendedWarrantyProductsGrid

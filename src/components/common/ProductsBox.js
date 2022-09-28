import React from 'react'
import ProductItem from './ProdctItem'

function ProductsBox() {
	return (
		<section>
			<div className='products-container row align-items-stretch mx-0'>
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		</section>
	)
}

export default ProductsBox

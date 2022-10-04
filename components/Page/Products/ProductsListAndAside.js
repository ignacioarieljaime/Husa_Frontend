import React from 'react'

// components
import FilterAside from './FilterAside'
import ProductsItem from './ProductsItem'

function ProductsListAndAside() {	
	return (
		<div className='all-tvs-category'>
			<FilterAside />
			<div>
				<div className='result-box'>
					Total Results: 77 <a href='#'>View All</a>
				</div>
				<div className='products-container row align-items-stretch mx-0'>
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
					<ProductsItem />
				</div>
			</div>
		</div>
	)
}

export default ProductsListAndAside

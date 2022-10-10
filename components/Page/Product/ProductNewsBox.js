import React from 'react'
import ProductNewsItem from './ProductNewsItem'

function ProductNewsBox() {
	return (
		<div className='container-fluid py-6'>
			<div className='row align-items-start'>
				<ProductNewsItem />
				<ProductNewsItem />
				<ProductNewsItem />
				<ProductNewsItem />
				<ProductNewsItem />
				<ProductNewsItem />
				<ProductNewsItem />
				<ProductNewsItem />
			</div>
		</div>
	)
}

export default ProductNewsBox

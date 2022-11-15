import React from 'react'
import ProductsItem from '../Products/ProductsItem'

function ProductRelatedItemsBox({ data }) {
	let { structure } = data
	return (
		<div id={data.name + data.id}>
			{/* <ProductsItem /> */}
			{/* <ProductsItem /> */}
			{/* <ProductsItem /> */}
		</div>
	)
}

export default ProductRelatedItemsBox

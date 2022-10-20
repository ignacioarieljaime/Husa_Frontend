import React from 'react'
import ProductNewsItem from './ProductNewsItem'

function ProductNewsBox({ data, index }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='container-fluid py-6'>
			<div className='row align-items-start'>
				{structure.list.value.map((item, index) => (
					<ProductNewsItem data={item} key={index} />
				))}
			</div>
		</div>
	)
}

export default ProductNewsBox

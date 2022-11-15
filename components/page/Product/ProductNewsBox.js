import React from 'react'
import ProductNewsItem from './ProductNewsItem'

function ProductNewsBox({ data, index }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='container-fluid py-6'>
			<div className='d-flex gap-3 product_news_box'>
				{structure?.list?.value.map((item, index) => (
					<ProductNewsItem
						divider={structure?.divider?.value}
						itemCount={structure?.list?.value.length}
						data={item}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductNewsBox

import React, { useEffect, useState } from 'react'
import ProductNewsItem from './ProductNewsItem'

function ProductNewsBox({ data, index }) {
	let { structure } = data
	const [list, setList] = useState([])
	useEffect(() => {
		setList(data?.structure?.list?.value)
	}, [])
	return (
		<div id={data.name + data.id} className='container-fluid pt-6 pb-10'>
			<div className='d-flex gap-3 product_news_box'>
				{list.map((item, index) => (
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

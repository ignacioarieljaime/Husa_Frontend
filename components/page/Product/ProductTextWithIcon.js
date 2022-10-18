import React from 'react'

import ProductTextWithIconItem from './ProductTextWithIconItem'

const ProductTextWithIcon = ({ data }) => {
	const { structure } = data
	return (
		<div class='container'>
			<div class='row'>
				{structure.list.value.map((item, index) => (
					<ProductTextWithIconItem
						key={index}
						image={item.image}
						title={item.title.value}
						description={item.description.value}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductTextWithIcon

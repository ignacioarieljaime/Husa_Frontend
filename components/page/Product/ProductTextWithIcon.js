import React from 'react'

import ProductTextWithIconItem from './ProductTextWithIconItem'

const ProductTextWithIcon = ({ data }) => {
	const { structure } = data
	return (
		<div id={data.name + data.id} className='product_text_icon'>
			<div className='content row align-items-stretch'>
				{structure?.list?.value.map((item, index) => (
					<ProductTextWithIconItem
						key={index}
						isRow={structure?.list?.value.length > 1 ? true : false}
						image={item.image}
						title={item.title.value}
						description={item.description.value}
						textAlignment={structure?.textAlignment?.value}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductTextWithIcon

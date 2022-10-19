import React from 'react'

function ProductDetailLstItem({ title, value }) {
	return (
		<>
			<dt>{title}</dt>
			<dd className='col-6 text-white col-md-3 mb-5' data-label={title}>
				{value}
			</dd>
		</>
	)
}

export default ProductDetailLstItem

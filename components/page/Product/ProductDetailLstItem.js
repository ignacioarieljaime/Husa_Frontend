import React from 'react'

function ProductDetailLstItem({ title, value, theme }) {
	return (
		<dd className='col-12 col-sm-6 col-md-3 mb-5 p-1'>
			<dt>{title}</dt>
			<dd
				className={`d_desc ${
					theme === 'light' ? 'text-black spec-after-style' : `text-white`
				} `}
				data-label={title}>
				{value}
			</dd>
		</dd>
	)
}

export default ProductDetailLstItem

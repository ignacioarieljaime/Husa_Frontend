import React from 'react'

function ProductDetailLstItem({ title, value, theme }) {
	return (
		<>
			<dt>{title}</dt>
			<dd className={`col-6 ${theme === "light" ? "text-black spec-after-style":`text-white`} col-md-3 mb-5`} data-label={title}>
				{value}
			</dd>
		</>
	)
}

export default ProductDetailLstItem

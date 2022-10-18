import React from 'react'

function ProductDetailLstItem({ data }) {
	return (
		<>
			<dt>{data?.title}</dt>
			<dd className='col-6 text-white col-md-3 mb-5' data-label={data?.title}>
				{data?.value}
			</dd>
		</>
	)
}

export default ProductDetailLstItem

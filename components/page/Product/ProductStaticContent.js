import React from 'react'

function ProductStaticContent({ data }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='product_static_content'>
			<h4>{structure.title.value}</h4>
			<div
				dangerouslySetInnerHTML={{ __html: structure?.paragraph?.value }}></div>
		</div>
	)
}

export default ProductStaticContent

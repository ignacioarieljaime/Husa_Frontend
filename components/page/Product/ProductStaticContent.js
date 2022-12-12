import React from 'react'

function ProductStaticContent({ data }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='product_static_content'>
			<article className='article'>
				<h3>{structure.title.value}</h3>
				<div
					dangerouslySetInnerHTML={{
						__html: structure?.paragraph?.value
					}}></div>
			</article>
		</div>
	)
}

export default ProductStaticContent

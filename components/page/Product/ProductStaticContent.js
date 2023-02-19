import React, { useEffect, useState } from 'react'

function ProductStaticContent({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
	return (
		<div id={data.name + data.id} className='product_static_content'>
			<article className='article'>
				<h4 style={{ fontSize: '48px', lineHeight: 'unset' }}>
					{structure.title.value}
				</h4>
				<div
					dangerouslySetInnerHTML={{
						__html: text
					}}></div>
			</article>
		</div>
	)
}

export default ProductStaticContent

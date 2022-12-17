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
				<h3>{structure.title.value}</h3>
				<div
					dangerouslySetInnerHTML={{
						__html: text
					}}></div>
			</article>
		</div>
	)
}

export default ProductStaticContent

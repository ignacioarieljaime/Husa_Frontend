import React, { useEffect, useState } from 'react'

function ProductStaticContent({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
	return (
		<section>
			<div id={data.name + data.id} className='product_static_content'>
				<div className='content'>
					{structure?.image?.src && (
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							className='image'
						/>
					)}
					<h4 className='title fw-sm-normal fw-md-bold'>{structure.title.value}</h4>
					<div
						className='text'
						dangerouslySetInnerHTML={{
							__html: text
						}}></div>
				</div>
			</div>
		</section>
	)
}

export default ProductStaticContent

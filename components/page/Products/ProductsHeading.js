import React, { useEffect, useState } from 'react'

function ProductsHeading({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.subtitle?.value)
	}, [])
	return (
		<div className='all-tvs-heading d-flex'>
			<div className='col-12 col-md-6 text_box'>
				<article className='large_article'>
					<h1 className='my-9'>{structure?.title?.value}</h1>
					<div
						className='fs-base'
						dangerouslySetInnerHTML={{
							__html: text
						}}></div>
				</article>
			</div>
			<div className='col-12 col-md-6 image_container'>
				<div className='image_wrapper'>
					<img src={structure?.image?.src} alt={structure?.image?.alt} />
				</div>
			</div>
		</div>
	)
}

export default ProductsHeading

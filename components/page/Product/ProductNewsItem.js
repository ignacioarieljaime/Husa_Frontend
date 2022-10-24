import React from 'react'

function ProductNewsItem({ itemCount, data, divider }) {
	let { image, note, title, smallTitle } = data
	return (
		<div className={`col-12 col-md-6 col-lg-${12 / itemCount} mb-18 mb-md-0`}>
			<article className='article text-start'>
				<img src={image?.src} alt={image?.alt} width='100%' />
				<div
					className={`px-4 ${
						divider ? 'divider-border position-relative' : ''
					}`}>
					{smallTitle?.value ? (
						<h6 className='fs-2 mb-3 product_news_item_small_title  text-center  mt-13'>
							{smallTitle?.value}
						</h6>
					) : (
						<h4 className='fs-2 mb-3 mt-13'>{title?.value}</h4>
					)}

					<p
						dangerouslySetInnerHTML={{ __html: note?.value }}
						className='fw-normal m-auto mb-4'></p>
				</div>
			</article>
		</div>
	)
}

export default ProductNewsItem

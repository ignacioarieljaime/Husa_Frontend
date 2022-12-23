import CustomImage from 'components/common/CustomImage'
import React from 'react'

function ProductNewsItem({ itemCount, data, divider }) {
	let { image, note, title, smallTitle, littleImage } = data
	return (
		<div
			style={{ width: `${100 / itemCount}%` }}
			className={` mb-8 mb-md-0 product_news_box_item`}>
			<article className='article text-start product_new_item'>
				<CustomImage src={image?.src} alt={image?.alt} wrapperWidth={'100%'} />

				{littleImage?.value?.image?.src && littleImage?.value?.text?.value ? (
					<div className='little_image'>
						<img src={littleImage?.value?.image?.src} />
						<h6>{littleImage?.value?.text?.value}</h6>
					</div>
				) : null}

				<div
					className={`px-4 ${
						divider ? 'divider-border position-relative' : ''
					}`}>
					{smallTitle?.value ? (
						<h6 className='mb-3 product_news_item_small_title   mt-13'>
							{smallTitle?.value}
						</h6>
					) : (
						<h4 className='mb-3 mt-13'>{title?.value}</h4>
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

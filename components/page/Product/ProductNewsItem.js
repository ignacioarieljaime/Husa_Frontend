import CustomImage from 'components/common/CustomImage'
import React from 'react'

function ProductNewsItem({ itemCount, data, divider, index }) {
	let { image, note, title, smallTitle, littleImage } = data
	return (
		<div
			style={{ width: `${100 / itemCount}%` }}
			className={` mb-8 mb-md-0 product_news_box_item`}>
			<article className='small_article text-start product_new_item'>
				<CustomImage
					src={image?.src}
					alt={image?.alt}
					className='product_news_box_item_image'
					wrapperWidth={'100%'}
				/>

				{littleImage?.value?.image?.src && littleImage?.value?.text?.value ? (
					<div className='little_image'>
						<img src={littleImage?.value?.image?.src} />
						<h6>{littleImage?.value?.text?.value}</h6>
					</div>
				) : null}

				<div
					className={`px-4 pt-13 ${
						index !== 0 && divider ? 'divider-border position-relative' : ''
					}`}>
					{title?.value && (
						<h3 style={{ marginBottom: '20px' }}>{title?.value}</h3>
					)}

					{smallTitle?.value && (
						<h6
							style={{ marginBottom: '20px' }}
							className=' product_news_item_small_title '>
							{smallTitle?.value}
						</h6>
					)}

					<p
						dangerouslySetInnerHTML={{ __html: note?.value }}
						className='note fw-normal m-auto mb-4'></p>
				</div>
			</article>
		</div>
	)
}

export default ProductNewsItem

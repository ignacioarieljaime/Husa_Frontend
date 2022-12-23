import CustomImage from 'components/common/CustomImage'
import React from 'react'

function UHDNewsItem({ data, count }) {
	let { image, title, description } = data
	return (
		<div className='col-12 col-md-4'>
			<article className='item small_article text-start'>
				<div className='image_container'>
					<CustomImage
						src={image?.src}
						alt={image?.alt}
						wrapperWidth='100%'
						wrapperHeight={count > 2 ? '700px' : 'fit-content'}
						className='img-box-shadow-hover image'
					/>
				</div>
				<div className='px-4 divider-border position-relative'>
					<h3 className='mb-3 mt-13'>{title?.value}</h3>
					<p
						className='fw-normal m-auto mb-4'
						dangerouslySetInnerHTML={{ __html: description?.value }}></p>
				</div>
			</article>
		</div>
	)
}

export default UHDNewsItem

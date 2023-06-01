import React from 'react'

function LaserImageAndTextItem({ data: { image, title, description } }) {
	return (
		<div className='col-12 col-md-6 mb-18 mb-md-0'>
			<article className='small_article laser_text_image_box text-start'>
				<img src={image?.src} alt={image?.alt} width='100%' />
				<div className='px-4 text-center'>
					<h3 className='mb-3 mt-13'>{title?.value}</h3>
					<p className='fw-normal m-auto mb-0 mb-md-4'>{description?.value}</p>
				</div>
			</article>
		</div>
	)
}

export default LaserImageAndTextItem

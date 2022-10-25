import React from 'react'

function LaserImageAndTextItem({ data: { image, title, description } }) {
	return (
		<div className='col-12 col-md-6 mb-18 mb-md-0'>
			<article className='article text-start'>
				<img src={image?.src} alt={image?.alt} width='100%' />
				<div className='px-4 text-center'>
					<h4 className='fs-2 mb-3 mt-13'>{title?.value}</h4>
					<p className='fw-normal m-auto mb-4'>{description?.value}</p>
				</div>
			</article>
		</div>
	)
}

export default LaserImageAndTextItem

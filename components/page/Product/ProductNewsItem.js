import React from 'react'

// image
import Image from 'public/assets/images/tv-page/ultra-show.jpg'

function ProductNewsItem({ data: { image, note, title } }) {
	return (
		<div className='col-12 col-md-6 col-lg-3 mb-18 mb-md-0'>
			<article className='article text-start'>
				<img src={image.src} alt={image.alt} width='100%' />
				<div className='px-4'>
					<h4 className='fs-2 mb-3 mt-13'>{title.value}</h4>
					<p className='fw-normal m-auto mb-4'>{note.value}</p>
				</div>
			</article>
		</div>
	)
}

export default ProductNewsItem

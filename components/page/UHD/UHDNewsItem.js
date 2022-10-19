import React from 'react'

// image
import Image from 'public/assets/images/4k-uhd/roku-tv.jpg'

function UHDNewsItem({ data: { image, title, discription } }) {
	return (
		<div className='col-12 col-md-4'>
			<article className='article text-start'>
				<img
					src={image.src}
					alt={image.alt}
					width='100%'
					className='img-box-shadow-hover'
				/>
				<div className='px-4 divider-border position-relative'>
					<h4 className='fs-2 mb-3 mt-13'>{title.value}</h4>
					<p className='fw-normal m-auto mb-4'>{discription.value}</p>
				</div>
			</article>
		</div>
	)
}

export default UHDNewsItem

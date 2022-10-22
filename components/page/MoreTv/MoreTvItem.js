import React from 'react'

// image
import Image from 'public/assets/images/more-tv/U6H.png'

function MoreTVItem({ image, title, model, description, link }) {
	return (
		<div className='col-12 col-sm-6 col-lg-4 col-xxl-2 py-3'>
			<div className='d-flex flex-column align-items-center justify-content-between'>
				<a href='#' className='mb-4'>
					<img src={image.src} alt={image.alt} width='100%' />
				</a>
				<div className='text-center'>
					<h4 className='fs-2 fw-normal'>
						{title}
						<span className='fs-8 ms-2'>"{model}"</span>
					</h4>
					<p className='fw-normal text-muted mb-6'>{description}</p>
					<a
						href={link.value}
						className='text-black text-uppercase fw-normal fs-8'>
						{link.title}
					</a>
				</div>
			</div>
		</div>
	)
}

export default MoreTVItem

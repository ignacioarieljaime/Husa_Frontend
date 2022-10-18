import React from 'react'

// image
import TVImage from 'public/assets/images/more-tv/U6H.png'
function MoreTvNewItem({ title, model, link, image, description, Btn }) {
	return (
		<div className='col-12 col-sm-6 col-lg-3 py-3'>
			<div className='h-100 d-flex flex-column align-items-center justify-content-between'>
				<div className='mb-3'>
					<img src={image.src} alt={image.alt} className='w-100 mb-4' />
					<div className='text-center'>
						<h3 className='fs-2'>
							{title}
							<span className='fs-8 ms-2'>{model}</span>
						</h3>
						<ul>
							<li className='mb-0 lh-20'>{description}</li>
						</ul>
					</div>
				</div>
				<div className='text-center'>
					<div className='mb-3'>
						<a
							href={link.value}
							className='btn btn-primary-dark text-white rounded-5 text-uppercase fs-8'>
							{link.title}
						</a>
					</div>
					<div>
						<a
							href='#'
							className='btn btn-info-light text-navy rounded-5 text-uppercase fs-8'>
							{Btn}
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MoreTvNewItem

import React from 'react'

function MoreTVNewItem({ title, model, link, image, description, Btn }) {
	return (
		<div className='col-12 col-sm-6 col-lg-3 py-3'>
			<div className='h-100 d-flex flex-column align-items-center justify-content-between'>
				<div className='mb-3'>
					<img src={image.src} alt={image.alt} className='w-100 mb-4' />
					<div className='text-center'>
						<h3 className='fs-2 mb-3'>{title}</h3>
						<h4 className='fs-base mb-7'>{model}</h4>
						{/* <ul className=''> */}
						{/* <li className='mb-0 lh-20'>{description}</li> */}
						{/* </ul> */}
						<p>{description}</p>
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
						<button className='btn btn-info-light text-navy rounded-5 text-uppercase fs-8'>
							{Btn.title}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MoreTVNewItem

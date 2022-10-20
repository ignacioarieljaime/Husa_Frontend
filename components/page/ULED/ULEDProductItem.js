import React from 'react'

function ULEDProductItem({
	title,
	description,
	image,
	link,
	linkTitle,
	btnTitle
}) {
	return (
		<div className='col-12 col-lg-4 platform platform-uled'>
			<h2>{title}</h2>
			<p className='text-black fs-2 fw-normal'>{description}</p>
			<div className='py-9'>
				<img src={image.src} alt={image.alt} width='100%' height='100%' />
			</div>
			<div className='row'>
				<div className='col-12 col-sm-3 col-lg-6 col-xl-4 col-xxl-3 mb-5 mb-sm-0'>
					<a href={link} className='btn btn-light'>
						{linkTitle}
					</a>
				</div>
				<div className='col-12 col-sm-6 col-lg-6 col-xl-8 col-xxl-9'>
					<button className='btn where-to-buy-btn btn-outline-light'>
						{btnTitle}
					</button>
				</div>
			</div>
		</div>
	)
}

export default ULEDProductItem

import React from 'react'

const HomePageMBTextedBoxesItem = ({
	image,
	background,
	title,
	littleTitle,
	link
}) => {
	return (
		<div className=' col-12 col-md-6 py-3'>
			<div className='home-page-mb-box'>
				<div className='home-page-mb-box-background'>
					<img
						src={background.src}
						alt={background.alt}
						width='100%'
						height='100%'
					/>
					<div className='home-page-mb-box-background-shade'></div>
				</div>
				<div className='home-page-mb-box-content'>
					<img
						src={image.src}
						alt={image.alt}
						width='100%'
						height='100%'
						className='mb-5 mb-md-7'
					/>
					<h5 className='mb-5 mb-md-7 fs-base text-white'>{littleTitle}</h5>
					<h3 className='mb-7 fs-4 fs-md-2hx'>{title}</h3>
					<a href={link.value} className='n-btn outline-white transparent'>
						{link.title}
					</a>
				</div>
			</div>
		</div>
	)
}

export default HomePageMBTextedBoxesItem

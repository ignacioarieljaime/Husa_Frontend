import React from 'react'

const HomePageMBTextedBoxesItem = ({
	image,
	background,
	title,
	littleTitle,
	link
}) => {
	return (
		<div className=' col-12 col-md-6'>
			<div className='home-page-mb-box'>
				<div className='home-page-mb-box-background'>
					<img
						src={background.src}
						alt={background.alt}
						width='100%'
						height='100%'
					/>
				</div>
				<div className='home-page-mb-box-content'>
					<img src={image.src} alt={image.alt} width='100%' height='100%' />
					<h5>{littleTitle}</h5>
					<h3>{title}</h3>
					<a href={link.value} className='n-btn outline-white transparent'>
						{link.title}
					</a>
				</div>
			</div>
		</div>
	)
}

export default HomePageMBTextedBoxesItem

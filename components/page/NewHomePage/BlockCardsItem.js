import Link from 'next/link'
import React from 'react'

const HomePageMBTextedBoxesItem = ({
	image,
	background,
	title,
	fullSize,
	link
}) => {
	return (
		<div className={`box ${fullSize ? 'full-size' : ''}`}>
			<div className='box-background'>
				<img
					src={background?.src}
					alt={background?.alt}
					width='100%'
					height='100%'
				/>
				<div className='box-background-shade'></div>
			</div>
			<div className='box-content'>
				<img
					src={image?.src}
					alt={image?.alt}
					width='100%'
					className='mb-5 mb-md-7'
				/>
				<div>
					<img
						src={image?.src}
						alt={image?.alt}
						width='100%'
						className='mb-5 mb-md-7'
					/>
					<h3 className='mb-6 fs-2'>{title}</h3>
					{link?.value && (
						<Link href={link?.value}>
							<a className='n-btn outline-white transparent'>{link?.title}</a>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default HomePageMBTextedBoxesItem

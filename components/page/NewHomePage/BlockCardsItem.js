import Link from 'next/link'
import React from 'react'
import CustomImage from '../../common/CustomImage'

const HomePageMBTextedBoxesItem = ({ data, itemCount, index }) => {
	let { backgroundImage, bottomImage, title, topImage, link } = data
	return (
		<div
			className={`box flex-column justify-content-between d-flex  ${
				itemCount % 2 !== 0 && index + 1 === itemCount ? 'full-size' : ''
			}`}>
			<div className='box-background'>
				<CustomImage
					src={backgroundImage?.src}
					alt={backgroundImage?.alt}
					wrapperHeight='100%'
					wrapperWidth='100%'
				/>
				<div className='box-background-shade'></div>
			</div>
			<div className='box-content'>
				<div>
					{topImage?.src && (
						<img
							src={topImage?.src}
							alt={topImage?.alt}
							width='100%'
							className='mb-5 mb-md-7'
						/>
					)}
				</div>

				<div>
					{bottomImage?.src && (
						<img
							src={bottomImage?.src}
							alt={bottomImage?.alt}
							width='100%'
							className='mb-5 mb-md-7'
						/>
					)}

					<h3 className='mb-6 fs-2'>{title?.value}</h3>
					{link?.title && link?.value ? (
						<Link href={link?.value ? link?.value : '/'}>
							<a className='n-btn outline-white transparent'>{link?.title}</a>
						</Link>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default HomePageMBTextedBoxesItem

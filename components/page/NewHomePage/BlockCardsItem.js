import Link from 'next/link'
import React from 'react'
import CustomImage from '../../common/CustomImage'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

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
				<div></div>

				<div>
					{topImage?.src && (
						<CustomImage
							src={topImage?.src}
							alt={topImage?.alt}
							width='100%'
							wrapperWidth={'100%'}
							WrapperMaxWidth={'190px'}
							wrapperClass='mb-4 top_image'
						/>
					)}
					{bottomImage?.src && (
						<img
							src={bottomImage?.src}
							alt={bottomImage?.alt}
							width='100%'
							className='mb-6'
						/>
					)}

					<h4 className='mb-3 mb-md-6 box_title'>{title?.value}</h4>
					{link?.title && link?.value ? (
						<Link
							target={link?.target ? link?.target : '_self'}
							href={link?.value ? link?.value : '/'}>
							<a
								target={link?.target ? link?.target : '_self'}
								className='n-btn outline-white transparent d-block w-fit py-4'>
								{link?.title}
								{link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default HomePageMBTextedBoxesItem

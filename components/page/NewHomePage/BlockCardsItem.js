import Link from 'next/link'
import React, { useState } from 'react'
import CustomImage from '../../common/CustomImage'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import LightBoxModal from '../NewComponents/LightBoxModal'

const BlockCardsItem = ({ data, itemCount, index }) => {
	let {
		backgroundImage,
		bottomImage,
		title,
		topImage,
		link,
		gradient,
		lightbox,
		lightboxObject
	} = data

	const [lightBoxStatus, setLightBoxStatus] = useState(false)

	const content = (
		<div>
			<div
				className={`box-background ${
					typeof gradient === 'undefined'
						? 'gradient'
						: gradient
						? 'gradient'
						: ''
				}`}>
				<CustomImage
					src={backgroundImage?.src}
					alt={backgroundImage?.alt}
					wrapperHeight='100%'
					wrapperWidth='100%'
				/>
			</div>
			<div className='box-content'>
				<div></div>

				<div className='w-100'>
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
								className='n-btn outline-white transparent d-block w-fit medium'>
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

	return (
		<>
			{lightbox?.value ? (
				<div
					onClick={() => setLightBoxStatus(prevState => !prevState)}
					className={`box box-group-link flex-column justify-content-between d-flex  ${
						itemCount % 2 !== 0 && index + 1 === itemCount ? 'full-size' : ''
					}`}>
					<div>
						<div
							className={`box-background ${
								typeof gradient === 'undefined'
									? 'gradient'
									: gradient?.value
									? 'gradient'
									: ''
							}`}>
							<CustomImage
								src={backgroundImage?.src}
								alt={backgroundImage?.alt}
								wrapperHeight='100%'
								wrapperWidth='100%'
							/>
						</div>
						<div className='box-content'>
							<div></div>
							<div className='w-100'>
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
								{link?.title && lightbox?.value ? (
									<button
										onClick={() => setLightBoxStatus(prevState => !prevState)}
										className='n-btn outline-white transparent d-block w-fit medium position-relative'
										style={{ zIndex: 10000 }}>
										{link?.title}
									</button>
								) : null}
							</div>
						</div>
					</div>
				</div>
			) : link?.value ? (
				<Link
					target={link?.target ? link?.target : '_self'}
					href={link?.value ? link?.value : '/'}>
					<a
						className={`box box-group-link flex-column justify-content-between d-flex  ${
							itemCount % 2 !== 0 && index + 1 === itemCount ? 'full-size' : ''
						}`}>
						{content}
					</a>
				</Link>
			) : (
				<div
					className={`box box-group-link flex-column justify-content-between d-flex  ${
						itemCount % 2 !== 0 && index + 1 === itemCount ? 'full-size' : ''
					}`}
					style={{ cursor: 'auto' }}>
					<div>
						<div
							className={`box-background ${
								typeof gradient === 'undefined'
									? 'gradient'
									: gradient?.value
									? 'gradient'
									: ''
							}`}>
							<CustomImage
								src={backgroundImage?.src}
								alt={backgroundImage?.alt}
								wrapperHeight='100%'
								wrapperWidth='100%'
							/>
						</div>
						<div className='box-content'>
							<div></div>
							<div className='w-100'>
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
											className='n-btn outline-white transparent d-block w-fit medium'>
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
				</div>
			)}
			{lightbox?.value && (
				<LightBoxModal
					id={data?.id}
					caption={lightboxObject?.value?.caption}
					video={lightboxObject?.value?.video}
					image={lightboxObject?.value?.image}
					link={lightboxObject?.value?.link}
					isVisible={lightBoxStatus}
					visibleHandler={() => setLightBoxStatus(prevState => !prevState)}
				/>
			)}
		</>
	)
}

export default BlockCardsItem

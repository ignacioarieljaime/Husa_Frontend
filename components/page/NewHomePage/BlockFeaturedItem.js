import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const BlockFeaturedItem = ({ data, activateLightBox, isLightBoxValid }) => {
	return (
		<>
			<h3 className='slider-title fs-2'>{data?.title?.value}</h3>
			<div
				className='slider-body'
				style={{ cursor: 'pointer' }}
				onClick={() => isLightBoxValid && activateLightBox()}>
				{data?.video?.value ? (
					<div className='slider-video'>
						<video autoPlay={true} muted={true} loop={true}>
							<source src={data?.video?.src} />
							{data?.image?.alt}
						</video>
					</div>
				) : data?.image?.src ? (
					<CustomImage
						src={data?.image?.src}
						alt={data?.image?.alt}
						className='slider-image'
						wrapperWidth={'100%'}
					/>
				) : null}
				<div className='slider-content'>
					<h5 className='description d-none d-md-block'>
						{data?.description?.value}
					</h5>
					{data?.link?.value && (
						<Link
							target={data?.link?.target ? data?.link?.target : '_self'}
							href={data?.link?.value}>
							<a
								target={data?.link?.target ? data?.link?.target : '_self'}
								className='n-btn outline-white transparent d-block w-fit medium mx-auto'>
								{data?.link?.title}
								{data?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					)}
					{data?.video?.value && (
						<span className='play'>
							<FontAwesomeIcon
								icon={faPlayCircle}
								size={'xl'}
								className='ms-2'
							/>
						</span>
					)}
				</div>
			</div>
		</>
	)
}

export default BlockFeaturedItem

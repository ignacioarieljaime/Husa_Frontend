import React from 'react'
import 'swiper/css'
import { useAspectRatio } from 'hooks/useAspectRatio'
import Link from 'next/link'

const HomeAppliancesCarouselitem = ({ data, structure }) => {
	const aspectRatio = useAspectRatio(data?.image?.src)

	return (
		<>
			<div className='slider_image_box'>
				<div className='slider_image_wrapper'>
					<img
						src={data?.image?.src}
						alt={data?.image?.alt}
						className={'slider_image my-auto'}
						style={{
							width:
								aspectRatio > 1
									? ((1 / aspectRatio) * 100).toFixed(2) + '%'
									: '85%',
							margin:
								aspectRatio > 1
									? '0 ' +
									  (100 - ((1 / aspectRatio) * 100).toFixed(2)) / 2 +
									  '%'
									: '0 7.5%'
						}}
					/>
				</div>
			</div>
			<div>
				<h4 className='title'>{data?.title?.value}</h4>
				<p className='subtitle'>{data?.subtitle?.value}</p>
				{data?.link?.value && (
					<Link
						target={data?.link?.target ? data?.link?.target : '_self'}
						href={data?.link?.value ? data?.link?.value : '/'}>
						<a
							target={data?.link?.target ? data?.link?.target : '_self'}
							style={{ width: '150px' }}
							className={`text-nowrap n-btn d-block mx-auto ${
								structure?.theme?.value === 'dark' ? 'white' : 'black'
							}`}>
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
			</div>
		</>
	)
}

export default HomeAppliancesCarouselitem

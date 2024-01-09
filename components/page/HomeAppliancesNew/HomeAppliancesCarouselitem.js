import React from 'react'
import 'swiper/css'
import Link from 'next/link'

const HomeAppliancesCarouselitem = ({ data, structure }) => {
	return (
		<>
			<div className='slider_image_box'>
				<Link
					target={data?.link?.target ? data?.link?.target : '_self'}
					href={data?.link?.value ? data?.link?.value : '/'}>
					<a
						target={data?.link?.target ? data?.link?.target : '_self'}
						className={`slider_image_wrapper`}>
						<img
							src={data?.image?.src}
							alt={data?.image?.alt}
							className={'slider_image my-auto'}
						/>
					</a>
				</Link>
			</div>
			<div className='text_content'>
				<h4 className='title'>{data?.title?.value}</h4>
				<p className='subtitle'>{data?.subtitle?.value}</p>
				{data?.link?.value && (
					<Link
						target={data?.link?.target ? data?.link?.target : '_self'}
						href={data?.link?.value ? data?.link?.value : '/'}>
						<a
							target={data?.link?.target ? data?.link?.target : '_self'}
							style={{ width: '150px' }}
							className={`text-nowrap medium n-btn d-block primary mx-auto shop_btn`}>
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

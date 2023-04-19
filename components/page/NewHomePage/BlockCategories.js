import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import OpenPageOnNewTab from "public/assets/images/OpenNewPageIcon.png"
import 'swiper/css/navigation'
import 'swiper/css'
import Link from 'next/link'
import CustomImage from '../../common/CustomImage'

const BlockCategories = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)

	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='new-home-page-appliances mb-16'>
				<h2
					className='title fs-3x mb-15'
					data-aos='fade'
					data-aos-delay='500'
					data-aos-duration='1000'
					dangerouslySetInnerHTML={{ __html: text }}></h2>
				<Swiper
					navigation={{
						enabled: true,
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current
					}}
					pagination={false}
					spaceBetween={16}
					slidesPerView={'auto'}
					centeredSlides={false}
					modules={[Navigation]}
					grabCursor={true}
					className='appliances-slider px-0'>
					{structure?.list?.value.map((item, index) => (
						<SwiperSlide key={index} className='slider-item'>
							<CustomImage
								src={item?.image?.src}
								alt={item?.image?.alt}
								className={'slider-image my-auto'}
								wrapperHeight={'236px'}
								wrapperWidth={'100%'}
							/>
							<Link
								target={item?.link?.target ? item?.link?.target : '_self'}
								href={item?.link?.value ? item?.link?.value : '/'}>
								<a className='slider-title text-nowrap n-btn outline-black transparent'>
									{item?.link?.title}{' '}
									{item?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
						</SwiperSlide>
					))}
					<div
						data-aos='swiper-navigation'
						data-aos-delay='1000'
						data-aos-duration='300'
						className='swiper-button-prev'
						ref={navigationPrevRef}
					/>
					<div
						data-aos='swiper-navigation'
						data-aos-delay='1000'
						data-aos-duration='300'
						className='swiper-button-next'
						ref={navigationNextRef}
					/>
				</Swiper>
			</div>
		</section>
	)
}

export default BlockCategories

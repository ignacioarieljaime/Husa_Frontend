import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import Link from 'next/link'

const BlockCategories = ({ data: { structure } }) => {
	return (
		<section>
			<div className='new-home-page-appliances mb-20'>
				<h2
					className='title fs-3x mb-15'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h2>
				<Swiper
					navigation={false}
					pagination={false}
					spaceBetween={16}
					slidesPerView={'auto'}
					centeredSlides={true}
					grabCursor={true}
					className='appliances-slider'>
					{structure.list.value.map((item, index) => (
						<SwiperSlide key={index} className='slider-item'>
							<img
								src={item?.image?.src}
								alt={item?.image?.alt}
								className='slider-image my-auto'
							/>
							<Link href={item?.link?.value ? item?.link?.value : '/'}>
								<a className='slider-title text-nowrap n-btn outline-black transparent'>
									{item?.link?.title}
								</a>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default BlockCategories

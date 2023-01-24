import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css/navigation'
import 'swiper/css'
import Link from 'next/link'
import CustomImage from '../../common/CustomImage'

const BlockCategories = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
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
					navigation={true}
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

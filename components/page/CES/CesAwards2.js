import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CesAwardsItem from './CesAwardsItem'
import 'swiper/css'

const CESAwards2 = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div className='ces_awards'>
				<div
					className='title mini'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
				<Swiper
					navigation={false}
					pagination={false}
					spaceBetween={16}
					slidesPerView={'auto'}
					centeredSlides={false}
					grabCursor={true}
					className='awards_slider'>
					{content?.list?.value.map((item, index) => (
						<SwiperSlide key={index}>
							<CesAwardsItem data={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default CESAwards2

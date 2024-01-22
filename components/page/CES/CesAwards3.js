import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CesAwardsItem from './CesAwardsItem'
import 'swiper/css'

const CesAwards3 = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(data?.structure)
	// }, [])
	return (
		<section>
			<div className='ces_awards contained'>
				<div
					className='title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
				<Swiper
					navigation={false}
					pagination={false}
					spaceBetween={16}
					slidesPerView={'auto'}
					centeredSlides={false}
					grabCursor={true}
					className='awards_slider'>
					{structure?.list?.value.map((item, index) => (
						<SwiperSlide key={index}>
							<CesAwardsItem data={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default CesAwards3

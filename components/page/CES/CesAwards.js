import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CesAwardsItem from './CesAwardsItem'

import 'swiper/css'

const CesAwards = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])

	return (
		<section>
			<div className='ces_awards'>
				<div className='title' dangerouslySetInnerHTML={{ __html: text }}></div>
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

export default CesAwards

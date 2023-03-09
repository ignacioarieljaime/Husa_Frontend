import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import CustomImage from 'components/common/CustomImage'
import { useState } from 'react'
import { useEffect } from 'react'

const FlightNightCarousel = ({ data }) => {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])

	return (
		<section>
			<div className='flight_night_carousel'>
				<div className='line top'></div>
				<h3 dangerouslySetInnerHTML={{ __html: text }} className='title'></h3>
				<div>
					<Swiper
						pagination={true}
						modules={[Pagination]}
						className='flight_night_swiper'>
						{structure?.image?.value.map((item, index) => (
							<SwiperSlide>
								<div className='text-center'>
									<CustomImage
										src={item?.image?.src}
										alt={item?.image?.alt}
										wrapperWidth='100%'
										wrapperClass='image_container'
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}
export default FlightNightCarousel

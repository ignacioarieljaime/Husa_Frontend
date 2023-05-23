import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'

function BlogEasySlider({ data: { structure } }) {
	return (
		<section>
			<div className=' mb-20'>
				<div className='blog-carousel-container'>
					<Swiper
						navigation={true}
						modules={[Navigation]}
						centeredSlides={true}
						loop={true}
						spaceBetween={10}
						className='blog-big-centered'>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide key={index}>
								<div className='swiper_image_container'>
									<img src={item?.image?.src} alt={item?.image?.alt} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className='bg-light-orange-gradient'></div>
				</div>
			</div>
		</section>
	)
}

export default BlogEasySlider

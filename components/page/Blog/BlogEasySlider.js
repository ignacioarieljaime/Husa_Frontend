import React from 'react'

import Image from 'public/assets/images/blog/woman.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
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
						spaceBetween={10}
						className='blog-big-centered'>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide key={index}>
								<img src={item?.image?.src} alt={item?.image?.alt} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default BlogEasySlider

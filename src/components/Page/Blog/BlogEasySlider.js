import React from 'react'

import Image from './../../../../public/assets/images/blog/woman.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

function BlogEasySlider() {
	return (
		<section>
			<div class=' mb-20'>
				<div class='carousel-container'>
					<Swiper
						navigation={true}
						modules={[Navigation]}
            centeredSlides={true}
            spaceBetween={10}
						className='big-centered'>
						<SwiperSlide>
							<img src={Image.src} alt='featured image' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Image.src} alt='featured image' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Image.src} alt='featured image' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Image.src} alt='featured image' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Image.src} alt='featured image' />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default BlogEasySlider

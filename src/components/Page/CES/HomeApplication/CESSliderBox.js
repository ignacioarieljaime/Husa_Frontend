import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

// image
import Image from './../../../../../public/assets/images/ces-2022-home-appliances/oven.png'

function CESSliderBox() {
	return (
		<Swiper
			pagination={true}
			modules={[Pagination]}
			className='ces-product-carousel'>
			<SwiperSlide>
				{' '}
				<span>
					<img src={Image.src} alt='featured image' className='slider-media' />
				</span>
			</SwiperSlide>
			<SwiperSlide>
				{' '}
				<span>
					<img src={Image.src} alt='featured image' className='slider-media' />
				</span>
			</SwiperSlide>
			<SwiperSlide>
				{' '}
				<span>
					<img src={Image.src} alt='featured image' className='slider-media' />
				</span>
			</SwiperSlide>
			<SwiperSlide>
				{' '}
				<span>
					<img src={Image.src} alt='featured image' className='slider-media' />
				</span>
			</SwiperSlide>
		</Swiper>
	)
}

export default CESSliderBox

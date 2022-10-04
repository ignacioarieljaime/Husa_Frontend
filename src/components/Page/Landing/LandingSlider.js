import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'
// image
import SliderImage from '../../../../public/assets/images/home/home-carousel-item-1.jpg'
import SliderResImage from '../../../../public/assets/images/home/home-carousel-item-1-resp.jpg'

function LandingSlider({ data: { props } }) {
	return (
		<>
			<Swiper
				navigation={true}
				pagination={true}
				modules={[Navigation, Pagination]}
				className='home-header-carousel lower-main'>
				{/* {JSON.parse(props).data.map((item, index) => (
					<SwiperSlide key={index}>
						{' '}
						<div className='carousel-item-wrapper'>
							<img
								src={item}
								alt='featured image'
								className='main-img'
								width='100%'
								height='100%'
							/>
							<img
								src={item}
								alt='featured image'
								className='responsive-img'
								width='100%'
								height='100%'
							/>
							<div className='text-box cursor-pointer'></div>
						</div>
					</SwiperSlide>
				))} */}
			</Swiper>
		</>
	)
}

export default LandingSlider

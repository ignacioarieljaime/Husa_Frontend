import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import CustomImage from 'components/common/CustomImage'

const FlightNightCarousel = () => {
	return (
		<section>
			<div className='flight_night_carousel'>
				<div className='line top'></div>
				<h3 className='title'>
					<p>In celebration of </p>
					<p>Hisense FLIGHT NIGHTS,</p>
					<p>we’re giving away three</p>
					<p>50-inch Hisense TVs</p>
					<p> and one 100+ inch</p>
					<p>Laser TV.</p>
				</h3>
				<div>
					<Swiper
						pagination={true}
						modules={[Pagination]}
						className='flight_night_swiper'>
						<SwiperSlide>
							<div className='text-center'>
								<CustomImage
									src='https://www.hisense-usa.com/_next/image?url=https%3A%2F%2Fassets.hisense-usa.com%2Fassets%2FGalleryImages%2FProduct%2F293%2F47b5799d40%2Froku__ScaleMaxHeightWzc1MF0.png&w=1920&q=75'
									wrapperWidth='100%'
									wrapperClass='image_container'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='text-center'>
								<CustomImage
									src='https://www.hisense-usa.com/_next/image?url=https%3A%2F%2Fassets.hisense-usa.com%2Fassets%2FGalleryImages%2FProduct%2F293%2F47b5799d40%2Froku__ScaleMaxHeightWzc1MF0.png&w=1920&q=75'
									wrapperWidth='100%'
									wrapperClass='image_container'
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}
export default FlightNightCarousel

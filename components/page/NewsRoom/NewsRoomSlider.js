import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Link from 'next/link'

const NewsRoomSlider = () => {
	return (
		<div className='news_room_slider'>
			<h3>Newsroom</h3>
			<Swiper
				slidesPerView={'auto'}
				spaceBetween={30}
				loop
                navigation={true}
				centeredSlides={true}
				pagination={{
					clickable: true
				}}
		        modules={[Pagination, Navigation]}
				className='news_room_slider_box'>
				{[1, 1, 2, 1].map(item => (
					<SwiperSlide>
						<div className='slider_item'>
							<div>
								<h5>Hisense TV Annoucement</h5>
								<h6>Hisense TV Annoucement</h6>
								<Link href={'/'}>
									<a>Read More</a>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default NewsRoomSlider

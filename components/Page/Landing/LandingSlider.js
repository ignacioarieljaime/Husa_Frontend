import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'

function LandingSlider({
	data: {
		structure: { list }
	}
}) {
	return (
		<>
			<Swiper
				navigation={true}
				pagination={true}
				modules={[Navigation, Pagination]}
				className='home-header-carousel lower-main'>
				{list.value.map((item, index) => (
					<SwiperSlide key={index}>
						<div className='carousel-item-wrapper'>
							<img
								src={item.desktop.src}
								alt={item.desktop.alt}
								title={item.desktop.title}
								className='main-img'
								width='100%'
								height='100%'
							/>
							{/* <img
								src={item.tablet.src}
								alt={item.tablet.alt}
								title={item.tablet.title}
								className='main-img'
								width='100%'
								height='100%'
							/> */}
							<img
								src={item.mobile.src}
								alt={item.mobile.alt}
								title={item.mobile.title}
								className='responsive-img'
								width='100%'
								height='100%'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default LandingSlider

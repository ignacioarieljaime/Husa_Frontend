import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper'

const HomePageMBSlider = ({ data }) => {
	let { structure } = data

	SwiperCore.use([Autoplay])
	return (
		<section>
			<Swiper
				navigation={false}
				pagination={true}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				modules={[Pagination]}
				className='home-page-mb-slider'>
				{structure?.list?.value.map((item, index) => (
					<SwiperSlide key={index}>
						<div className='slider-item heading'>
							<img
								src={item?.desktop?.src}
								alt={item?.desktop?.alt}
								title={item?.desktop?.title}
								className='slider-image'
								width='100%'
								height='100%'
							/>
							<div className='slider-content'>
								<h2 className='mb-0'>{item?.title?.value}</h2>
								<a
									href={item?.url?.value}
									className='slider-link n-btn outline-white transparent'>
									{item?.url?.title}
								</a>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default HomePageMBSlider

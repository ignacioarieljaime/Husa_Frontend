import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'
import Link from 'next/link'

function LandingSlider({ data }) {
	let { structure } = data
	return (
		<>
			<Swiper
				navigation={true}
				pagination={true}
				modules={[Navigation, Pagination]}
				className='home-header-carousel lower-main'>
				{structure?.list?.value.map((item, index) => (
					<SwiperSlide key={index}>
						<div className='carousel-item-wrapper'>
							{console.log(item)}
							<Link href={item?.url?.value ? item?.url?.value : ''}>
								<a
									className='w-100 h-100'
									style={{ background: `url(${item?.desktop?.src})` }}></a>
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default LandingSlider

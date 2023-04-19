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
import { useWindowSize } from 'hooks/useWindowSize'

function LandingSlider({ data }) {
	let { structure } = data
	const size = useWindowSize()
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
							<Link
								target={item?.url?.target ? item?.url?.target : '_self'}
								href={item?.url?.value ? item?.url?.value : ''}>
								<a
									className='w-100 h-100 '
									style={{
										background: `url(${
											size[0] < 768
												? item?.mobile?.src
												: size[0] > 768 && size[0] < 1027
												? item?.tablet?.src
												: item?.desktop?.src
										})`
									}}></a>
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default LandingSlider

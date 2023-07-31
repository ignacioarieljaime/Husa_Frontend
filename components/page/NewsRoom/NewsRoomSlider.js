import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'
import Link from 'next/link'
import CustomImage from 'components/common/CustomImage'

const NewsRoomSlider = ({ data }) => {
	let { structure } = data
	return (
		<div className='news_room_slider'>
			{/* <h3>{structure?.title?.value}</h3> */}
			<Swiper
				slidesPerView={'auto'}
				spaceBetween={30}
				navigation={true}
				centeredSlides={true}
				pagination={{
					clickable: true
				}}
				modules={[Pagination, Navigation]}
				className='news_room_slider_box'>
				{structure?.list?.value?.map((item, index) => (
					<SwiperSlide key={'slider-item-' + index}>
						<Link
							href={item?.btn?.value || '/'}
							// style={{ backgroundImage: `url(${item?.image?.src})` }}
						>
							<a className='slider_item d-block'>
								<div className='slider_bg'>
									<CustomImage
										src={item?.image?.src}
										alt={item?.image?.alt}
										wrapperWidth={'100%'}
										wrapperHeight={'100%'}
										wrapperClass={'bg'}
									/>
								</div>
								<div className='slider_content'>
									<h5>{item?.title?.value}</h5>
									<h6>{item?.subtitle?.value}</h6>
									<Link
										target={item?.btn?.target || '_self'}
										href={item?.btn?.value || '/'}>
										<a target={item?.btn?.target || '_self'}>
											{item?.btn?.title}
										</a>
									</Link>
								</div>
							</a>
						</Link>
						<h3 className='subheading'>{item?.subheading?.value}</h3>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default NewsRoomSlider

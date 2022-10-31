import React from 'react'

import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

const NewHomePageNewsSlider = ({ data }) => {
	const structure = {
		sliderList: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/8195a563af/pdp-3_6-u7-50-50-feat-1__ScaleMaxWidthWzMwNDhd.jpg-gxkl4e.jpg'
					},
					title: {
						value: 'Introducing our CMO, Mr. McHale.'
					},
					description: {
						value: ''
					},
					url: {
						value: '/',
						title: 'Learn More'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/8195a563af/pdp-3_6-u7-50-50-feat-1__ScaleMaxWidthWzMwNDhd.jpg-gxkl4e.jpg'
					},
					title: {
						value: 'TVs big on specs, low on B.S.'
					},
					description: {
						value: ''
					},
					url: {
						value: '/',
						title: 'Learn More'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/8195a563af/pdp-3_6-u7-50-50-feat-1__ScaleMaxWidthWzMwNDhd.jpg-gxkl4e.jpg'
					},
					title: {
						value: 'Kitchen-Suite that’s simply sweet.'
					},
					description: {
						value: 'Kitchen'
					},
					url: {
						value: '/',
						title: 'Learn More'
					}
				}
			]
		}
	}

	return (
		<section>
			<Swiper
				navigation={true}
				pagination={true}
				spaceBetween={8}
				slidesPerView={'auto'}
				centeredSlides={true}
				grabCursor={true}
				loop={true}
				modules={[Pagination, Navigation]}
				breakpoints={{
					768: {
						spaceBetween: 35
					}
				}}
				className='news-slider'>
				{structure?.sliderList?.value.map((item, index) => (
					<SwiperSlide key={index} className='slider-item'>
						<h3 className='slider-title fs-2'>{item?.title?.value}</h3>
						<div className='slider-body'>
							<img
								src={item?.image?.src}
								alt={item?.image?.alt}
								className='slider-image'
								width='100%'
								height='100%'
							/>
							<div className='slider-content'>
								<h5 className='description d-none d-md-block'>
									{item?.description?.value}
								</h5>
								<Link href={item?.url?.value}>
									<a className='n-btn outline-white transparent'>
										{item?.url?.title}
									</a>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default NewHomePageNewsSlider

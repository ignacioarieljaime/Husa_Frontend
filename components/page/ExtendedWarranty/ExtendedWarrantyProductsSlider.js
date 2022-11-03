import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

import 'swiper/css'

const ExtendedWarrantyProductsSlider = ({ data: { structure } }) => {
	return (
		<section>
			<div className='extended-warranty-products-slider'>
				<div className='support-products'>
					<h3 className='fs-base fw-normal text-center mb-8 container-fluid'>
						Select a product catagory or scroll down to learn more
					</h3>
					<Swiper
						navigation={false}
						pagination={false}
						spaceBetween={35}
						slidesPerView={'auto'}
						centeredSlides={true}
						grabCursor={true}
						className='support-products-slider'>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide key={index} className='slider-item'>
								<div>
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										className='slider-image'
									/>
									<Link href={item?.link?.value}>
										<a className='slider-title n-btn outline-black'>
											{item?.link?.title}
										</a>
									</Link>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyProductsSlider

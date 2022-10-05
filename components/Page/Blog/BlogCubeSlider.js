import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import Image from './../../../public/assets/images/more-tv/carousel-item.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'


// import required modules
import { EffectCoverflow, Pagination } from 'swiper'

function BlogCubeSlider() {
	const carouselItems = ['U6HF', 'U6H', 'U7G', 'U8G']

	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span className="' + className + '">' + carouselItems[index] + '</span>'
			)
		}
	}

	return (
		<section>
			<div className='bg-light-orange-gradient'>
				<div className='overflow-hidden'>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: -30,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: false
						}}
						pagination={pagination}
						modules={[EffectCoverflow, Pagination]}
						className='big-coverflow my-20'>
						<SwiperSlide>
							<div className='row align-items-center px-10'>
								<div className='col-12 col-md-5 order-2 order-md-1 text-center text-md-start'>
									<h5 className='fs-4 fw-normal mb-3'>U6HF</h5>
									<h6 className='fs-3qx fw-normal mb-4 text-break'>
										Great for entertainment
									</h6>
									<p className='text-muted fw-normal mb-5'>
										With Fire TV Built-in, get all-in-one entertainmnet
									</p>
									<a
										href='#'
										className='btn btn-outline-dark text-uppercase rounded-5 px-5 py-2 fs-8'>
										WHERE TO BUY
									</a>
								</div>
								<div className='col-12 col-md-7 order-1 order-md-2'>
									<img
										src={Image.src}
										alt='featured image'
										className='slider-media'
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='row align-items-center px-10'>
								<div className='col-12 col-md-5 order-2 order-md-1 text-center text-md-start'>
									<h5 className='fs-4 fw-normal mb-3'>U6HF</h5>
									<h6 className='fs-3qx fw-normal mb-4 text-break'>
										Great for entertainment
									</h6>
									<p className='text-muted fw-normal mb-5'>
										With Fire TV Built-in, get all-in-one entertainmnet
									</p>
									<a
										href='#'
										className='btn btn-outline-dark text-uppercase rounded-5 px-5 py-2 fs-8'>
										WHERE TO BUY
									</a>
								</div>
								<div className='col-12 col-md-7 order-1 order-md-2'>
									<img
										src={Image.src}
										alt='featured image'
										className='slider-media'
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='row align-items-center px-10'>
								<div className='col-12 col-md-5 order-2 order-md-1 text-center text-md-start'>
									<h5 className='fs-4 fw-normal mb-3'>U6HF</h5>
									<h6 className='fs-3qx fw-normal mb-4 text-break'>
										Great for entertainment
									</h6>
									<p className='text-muted fw-normal mb-5'>
										With Fire TV Built-in, get all-in-one entertainmnet
									</p>
									<a
										href='#'
										className='btn btn-outline-dark text-uppercase rounded-5 px-5 py-2 fs-8'>
										WHERE TO BUY
									</a>
								</div>
								<div className='col-12 col-md-7 order-1 order-md-2'>
									<img
										src={Image.src}
										alt='featured image'
										className='slider-media'
									/>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default BlogCubeSlider

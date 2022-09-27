import React from 'react'

//image
import Image from './../../../../public/assets/images/more-tv/carousel-item.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// import required modules
import { Pagination, EffectCoverflow } from 'swiper'

function MoreTvGrabSlider() {
	const carouselItems = ['U6HF', 'U6H', 'U7G', 'U8G']

	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span class="' + className + '">' + carouselItems[index] + '</span>'
			)
		}
	}
	return (
		<section>
			<div class='overflow-hidden my-20'>
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
					className='big-coverflow'>
					<SwiperSlide>
						{' '}
						<span>
							<img src={Image.src} alt='featured image' class='slider-media' />
						</span>
						<div class='text-center'>
							<h5 class='fs-4 fw-normal mb-3'>U6HF</h5>
							<h6 class='fs-2qx mb-4'>Great for entertainment</h6>
							<p class='text-muted fw-normal mb-5'>
								With Fire TV Built-in, get all-in-one entertainmnet
							</p>
							<a
								href='#'
								class='btn btn-info-light text-uppercase text-navy fw-bold rounded-5'>
								WHERE TO BUY
							</a>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						{' '}
						<span>
							<img src={Image.src} alt='featured image' class='slider-media' />
						</span>
						<div class='text-center'>
							<h5 class='fs-4 fw-normal mb-3'>U6HF</h5>
							<h6 class='fs-2qx mb-4'>Great for entertainment</h6>
							<p class='text-muted fw-normal mb-5'>
								With Fire TV Built-in, get all-in-one entertainmnet
							</p>
							<a
								href='#'
								class='btn btn-info-light text-uppercase text-navy fw-bold rounded-5'>
								WHERE TO BUY
							</a>
						</div>
					</SwiperSlide>{' '}
					<SwiperSlide>
						{' '}
						<span>
							<img src={Image.src} alt='featured image' class='slider-media' />
						</span>
						<div class='text-center'>
							<h5 class='fs-4 fw-normal mb-3'>U6HF</h5>
							<h6 class='fs-2qx mb-4'>Great for entertainment</h6>
							<p class='text-muted fw-normal mb-5'>
								With Fire TV Built-in, get all-in-one entertainmnet
							</p>
							<a
								href='#'
								class='btn btn-info-light text-uppercase text-navy fw-bold rounded-5'>
								WHERE TO BUY
							</a>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default MoreTvGrabSlider

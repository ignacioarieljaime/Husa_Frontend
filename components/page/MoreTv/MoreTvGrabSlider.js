import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// import required modules
import { Pagination, EffectCoverflow } from 'swiper'
import Link from 'next/link'

function MoreTVGrabSlider({ data }) {
	let { structure } = data

	const carouselItems = structure?.list?.value.map(item => item?.model?.value)

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
			<div className='overflow-hidden my-20'>
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
					className='blog-big-coverflow'>
					{structure?.list?.value.map((item, index) => (
						<SwiperSlide key={'slider' + index}>
							<span>
								<img
									src={item?.image?.src}
									alt={item?.image?.alt}
									className='slider-media'
									width={'860'}
								/>
							</span>
							<div className='text-center'>
								<h5 className='fs-4 fw-normal mb-3'>{item?.model?.value}</h5>
								<h6 className='fs-2qx mb-4'>{item?.title?.value}</h6>
								<p className='text-muted fw-normal mb-5'>
									{item?.grayTitle?.value}
								</p>
								<Link
									target={item?.link?.target ? item?.link?.target : '_self'}
									href={item?.link?.value}>
									<a
										target={item?.link?.target ? item?.link?.target : '_self'}
										className='btn btn-info-light text-uppercase text-navy fw-bold rounded-5'>
										WHERE TO BUY
									</a>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default MoreTVGrabSlider

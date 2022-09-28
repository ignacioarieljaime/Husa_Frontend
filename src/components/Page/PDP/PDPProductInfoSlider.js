import React, { useState } from 'react'

// image
import Image from './../../../../public/assets/images/pdp/U6GR-front-shadow.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Thumbs } from 'swiper'

function PDPProductInfoSlider() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<div class='col-12 col-md-8 product-gallery mb-12 mb-md-0 pe-md-10'>
			<div class='row justify-content-evenly align-items-stretch flex-nowrap'>
				<div class='col-3'>
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						direction={'vertical'}
						watchSlidesProgress={true}
						modules={[FreeMode, Thumbs]}
						className='gallery-thumbs vertical'>
						<SwiperSlide>
							<img
								src={Image.src}
								alt='featured image'
								aria-hidden='true'
								tabindex='-1'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={Image.src}
								alt='featured image'
								aria-hidden='true'
								tabindex='-1'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={Image.src}
								alt='featured image'
								aria-hidden='true'
								tabindex='-1'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={Image.src}
								alt='featured image'
								aria-hidden='true'
								tabindex='-1'
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div class='col-9'>
					<Swiper
						spaceBetween={10}
						thumbs={{
							swiper:
								thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
						}}
						modules={[FreeMode, Thumbs]}
						className='gallery-top'>
						<SwiperSlide>
							<span class='media-slider-wrapper'>
								<img
									src={Image.src}
									alt='featured image'
									class='slider-media'
								/>
							</span>
							<figcaption class='figure-caption'>
								65" 4K ULED™ Premium Hisense Android Smart TV (2021)
							</figcaption>
						</SwiperSlide>
						<SwiperSlide>
							<span class='media-slider-wrapper'>
								<img
									src={Image.src}
									alt='featured image'
									class='slider-media'
								/>
							</span>
							<figcaption class='figure-caption'>
								65" 4K ULED™ Premium Hisense Android Smart TV (2021)
							</figcaption>
						</SwiperSlide>
						<SwiperSlide>
							<span class='media-slider-wrapper'>
								<img
									src={Image.src}
									alt='featured image'
									class='slider-media'
								/>
							</span>
							<figcaption class='figure-caption'>
								65" 4K ULED™ Premium Hisense Android Smart TV (2021)
							</figcaption>
						</SwiperSlide>
						<SwiperSlide>
							<span class='media-slider-wrapper'>
								<img
									src={Image.src}
									alt='featured image'
									class='slider-media'
								/>
							</span>
							<figcaption class='figure-caption'>
								65" 4K ULED™ Premium Hisense Android Smart TV (2021)
							</figcaption>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default PDPProductInfoSlider

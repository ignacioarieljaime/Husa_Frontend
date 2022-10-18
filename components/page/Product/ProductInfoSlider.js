import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Thumbs } from 'swiper'

function ProductInfoSlider({ pim }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	return (
		<div className='col-12 col-md-6 product-gallery mb-12 mb-md-0 pe-md-10'>
			<Swiper
				spaceBetween={10}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
				}}
				modules={[FreeMode, Thumbs]}
				className=' gallery-top'>
				<SwiperSlide>
					<span className='media-slider-wrapper'>
						<img
							src={pim.image}
							alt='Front U8G Hisense s'
							className='slider-media'
						/>
					</span>
					<figcaption className='figure-caption'>
						65 4K ULED™ Premium Hisense Android Smart TV (2021)
					</figcaption>
				</SwiperSlide>
				<SwiperSlide>
					<span className='media-slider-wrapper'>
						<img
							src='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/fb706a5ece/Front-U8G-Hisense__ScaleMaxHeightWzc1MF0.png'
							data-thumbnail='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/fb706a5ece/Front-U8G-Hisense__ScaleMaxHeightWzEyOF0.png'
							data-large='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/fb706a5ece/Front-U8G-Hisense__ScaleMaxWidthWzc1MF0.png'
							alt='Front U8G Hisense'
						/>
					</span>
					<figcaption className='figure-caption'>
						65 4K ULED™ Premium Hisense Android Smart TV (2021)
					</figcaption>
				</SwiperSlide>
				<SwiperSlide>
					<span className='media-slider-wrapper'>
						<img
							src='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/d9a37d4c76/Side1-U8G-min__ScaleMaxHeightWzc1MF0.png'
							data-thumbnail='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/d9a37d4c76/Side1-U8G-min__ScaleMaxHeightWzEyOF0.png'
							data-large='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/d9a37d4c76/Side1-U8G-min__ScaleMaxWidthWzc1MF0.png'
							alt='Side1 U8G min'
						/>
					</span>
					<figcaption className='figure-caption'>
						65 4K ULED™ Premium Hisense Android Smart TV (2021)
					</figcaption>
				</SwiperSlide>
				<SwiperSlide>
					<span className='media-slider-wrapper'>
						<img
							src='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/e6d6ac9c75/Side2-U8G-min__ScaleMaxHeightWzc1MF0.png'
							data-thumbnail='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/e6d6ac9c75/Side2-U8G-min__ScaleMaxHeightWzEyOF0.png'
							data-large='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/e6d6ac9c75/Side2-U8G-min__ScaleMaxWidthWzc1MF0.png'
							alt='Side2 U8G min'
						/>
					</span>
					<figcaption className='figure-caption'>
						65 4K ULED™ Premium Hisense Android Smart TV (2021)
					</figcaption>
				</SwiperSlide>
				<SwiperSlide>
					<span className='media-slider-wrapper'>
						<img
							src='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/f18f97a790/pdp-3_4-u8-packshot-ang-port__ScaleMaxHeightWzc1MF0.png'
							data-thumbnail='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/f18f97a790/pdp-3_4-u8-packshot-ang-port__ScaleMaxHeightWzEyOF0.png'
							data-large='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/f18f97a790/pdp-3_4-u8-packshot-ang-port__ScaleMaxWidthWzc1MF0.png'
							alt='pdp 3 4 u8 packshot ang port'
						/>
					</span>
					<figcaption className='figure-caption'>
						65 4K ULED™ Premium Hisense Android Smart TV (2021)
					</figcaption>
				</SwiperSlide>
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Thumbs]}
				className='gallery-thumbs single-product-gallery-thumbs  product-gallery-thumbs'>
				<SwiperSlide aria-hidden='true' tabIndex={'-1'} aria-label='slide-1'>
					<img
						src='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/a7c5bd0fc2/Hisense-U8G-4K-ULED-Premium__ScaleMaxHeightWzEyOF0.png'
						alt='Front U8G Hisense s'
						aria-hidden='true'
						tabindex='-1'
					/>
				</SwiperSlide>
				<SwiperSlide aria-hidden='true' tabIndex={'-1'} aria-label='slide-2'>
					<img
						src='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/fb706a5ece/Front-U8G-Hisense__ScaleMaxHeightWzEyOF0.png'
						alt='Front U8G Hisense'
						aria-hidden='true'
						tabindex='-1'
					/>
				</SwiperSlide>
				<SwiperSlide aria-hidden='true' tabIndex={'-1'} aria-label='slide-3'>
					<img
						src='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/d9a37d4c76/Side1-U8G-min__ScaleMaxHeightWzEyOF0.png'
						alt='Side1 U8G min'
						aria-hidden='true'
						tabindex='-1'
					/>
				</SwiperSlide>
				<SwiperSlide aria-hidden='true' tabIndex={'-1'} aria-label='slide-4'>
					<img
						src='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/e6d6ac9c75/Side2-U8G-min__ScaleMaxHeightWzEyOF0.png'
						alt='Side2 U8G min'
						aria-hidden='true'
						tabindex='-1'
					/>
				</SwiperSlide>
				<SwiperSlide aria-hidden='true' tabIndex={'-1'} aria-label='slide-5'>
					<img
						src='https://assets.hisense-usa.com/assets/GalleryImages/Product/340/f18f97a790/pdp-3_4-u8-packshot-ang-port__ScaleMaxHeightWzEyOF0.png'
						alt='pdp 3 4 u8 packshot ang port'
						aria-hidden='true'
						tabindex='-1'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default ProductInfoSlider

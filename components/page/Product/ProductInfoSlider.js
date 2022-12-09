import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Thumbs } from 'swiper'
import CustomImage from 'components/common/CustomImage'

function ProductInfoSlider({ pim, firstImage }) {
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
				{firstImage && (
					<SwiperSlide key={'custom'}>
						<span className='media-slider-wrapper'>
							<CustomImage
								src={firstImage}
								alt='Front U8G Hisense s'
								className='slider-media'
								wrapperHeight={'100%'}
							/>
						</span>
					</SwiperSlide>
				)}
				{pim &&
					pim.map((item, index) =>
						item.type_id === 1 && item.url !== firstImage ? (
							<SwiperSlide key={index}>
								<span className='media-slider-wrapper'>
									<CustomImage
										src={item.url}
										alt='Front U8G Hisense s'
										className='slider-media'
										wrapperHeight={'100%'}
									/>
								</span>
								<figcaption className='figure-caption'>{item.title}</figcaption>
							</SwiperSlide>
						) : null
					)}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Thumbs]}
				className='gallery-thumbs single-product-gallery-thumbs  product-gallery-thumbs'>
				{firstImage && (
					<SwiperSlide
						aria-hidden='true'
						tabIndex={'-1'}
						aria-label={`slide-${0}`}>
						<CustomImage
							src={firstImage}
							alt='Front U8G Hisense s'
							aria-hidden='true'
							tabIndex='-1'
							wrapperHeight={'91px'}
						/>
					</SwiperSlide>
				)}
				{pim &&
					pim.map((item, index) =>
						item.type_id === 1 && item.url !== firstImage ? (
							<SwiperSlide
								aria-hidden='true'
								tabIndex={'-1'}
								aria-label={`slide-${index + 1}`}>
								<CustomImage
									src={item.url}
									alt='Front U8G Hisense s'
									aria-hidden='true'
									tabIndex='-1'
									wrapperHeight={'91px'}
								/>
							</SwiperSlide>
						) : null
					)}
			</Swiper>
		</div>
	)
}

export default ProductInfoSlider

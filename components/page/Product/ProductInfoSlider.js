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

function ProductInfoSlider({ pim, firstImage, allData }) {
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
				{pim && pim?.length === 0 ? (
					<SwiperSlide>
						<span className='media-slider-wrapper'>
							<CustomImage
								src={
									allData?.Category?.customFields.find(
										customFiledItem =>
											customFiledItem?.custom_field?.name === 'upload pic'
									)?.media?.external_url
								}
								className='slider-media'
								wrapperHeight={'100%'}
							/>
						</span>
					</SwiperSlide>
				) : null}
				{pim && pim.find(item => item.order === 1) ? (
					<SwiperSlide key={'custom'}>
						<span className='media-slider-wrapper'>
							<CustomImage
								src={pim.find(item => item.order === 1)?.url}
								alt={
									pim.find(item => item.order === 1)?.caption
										? pim.find(item => item.order === 1)?.caption
										: pim.find(item => item.order === 1)?.title
								}
								title={
									pim.find(item => item.order === 1)?.caption
										? pim.find(item => item.order === 1)?.caption
										: pim.find(item => item.order === 1)?.title
								}
								className='slider-media'
								wrapperHeight={'100%'}
							/>
						</span>
					</SwiperSlide>
				) : null}
				{pim &&
					pim.map((item, index) =>
						item.type_id === 1 && item.url !== firstImage ? (
							<SwiperSlide key={index}>
								<span className='media-slider-wrapper'>
									<CustomImage
										src={item?.url}
										title={item?.caption ? item?.caption : item?.title}
										alt={item?.caption ? item?.caption : item?.title}
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
									alt={item?.caption ? item?.caption : item?.title}
									title={item?.caption ? item?.caption : item?.title}
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

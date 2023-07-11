import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'

// import required modules
import { FreeMode, Thumbs, Navigation } from 'swiper'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProductInfoSlider({ pim, firstImage, allData }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [imageModal, setImageModal] = useState(false)

	return (
		<div className='product_gallery px-0'>
			<div className='px-md-10 w-100 position-relative'>
				<Swiper
					spaceBetween={20}
					navigation={true}
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
					}}
					onSlideChange={swiper => thumbsSwiper.slideTo(swiper.activeIndex)}
					modules={[FreeMode, Thumbs, Navigation]}
					className='main_frame'>
					{pim && pim?.length === 0 ? (
						<SwiperSlide>
							<figure className='image_wrapper'>
								<img
									src={
										allData?.Category?.customFields.find(
											customFiledItem =>
												customFiledItem?.custom_field?.name === 'upload pic'
										)?.media?.external_url
									}
									className='image'
								/>
								<button
									onClick={() =>
										setImageModal(
											allData?.Category?.customFields.find(
												customFiledItem =>
													customFiledItem?.custom_field?.name === 'upload pic'
											)?.media?.external_url
										)
									}
									className='resize_btn'>
									<FontAwesomeIcon icon={faExpandArrowsAlt} size={'sm'} />
								</button>
							</figure>
						</SwiperSlide>
					) : null}
					{firstImage ? (
						<SwiperSlide key={'custom'}>
							<figure className='image_wrapper'>
								<img
									src={firstImage}
									// alt={firstImage}
									// title={
									// 	pim.find(item => item.order === 1)?.caption
									// 		? pim.find(item => item.order === 1)?.caption
									// 		: pim.find(item => item.order === 1)?.title
									// }
									className='image'
								/>
								<button
									onClick={() => setImageModal(firstImage)}
									className='resize_btn'>
									<FontAwesomeIcon icon={faExpandArrowsAlt} size={'sm'} />
								</button>
							</figure>
						</SwiperSlide>
					) : null}
					{pim &&
						pim.map((item, index) =>
							item.type_id === 1 && item.url !== firstImage ? (
								<SwiperSlide key={index}>
									<figure className='image_wrapper'>
										<img
											src={item?.url}
											title={item?.caption ? item?.caption : item?.title}
											alt={item?.caption ? item?.caption : item?.title}
											className='image'
										/>
										<button
											onClick={() => setImageModal(item?.url)}
											className='resize_btn'>
											<FontAwesomeIcon icon={faExpandArrowsAlt} size={'sm'} />
										</button>
									</figure>
									<figcaption className='figure-caption'>
										{item.title}
									</figcaption>
								</SwiperSlide>
							) : null
						)}
				</Swiper>
			</div>
			<div className='px-md-10 w-100'>
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={4}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Thumbs, Navigation]}
					className='thumbs_gallery pe-14 pe-md-0'>
					{firstImage && (
						<SwiperSlide
							aria-hidden='true'
							tabIndex={'-1'}
							aria-label={`slide-${0}`}>
							<figure className='image_wrapper'>
								<img
									src={firstImage}
									aria-hidden='true'
									tabIndex='-1'
									className='image'
								/>
							</figure>
						</SwiperSlide>
					)}
					{pim &&
						pim.map((item, index) =>
							item.type_id === 1 && item.url !== firstImage ? (
								<SwiperSlide
									aria-hidden='true'
									tabIndex={'-1'}
									aria-label={`slide-${index + 1}`}>
									<figure className='image_wrapper'>
										<img
											src={item.url}
											alt={item?.caption ? item?.caption : item?.title}
											title={item?.caption ? item?.caption : item?.title}
											aria-hidden='true'
											className='image'
											tabIndex='-1'
										/>
									</figure>
								</SwiperSlide>
							) : null
						)}
				</Swiper>
			</div>
			{imageModal && (
				<div
					onClick={() => setImageModal(false)}
					className='resized_image_modal'>
					<div className='wrapper'>
						<img src={imageModal} alt='bigger image' className='image' />
					</div>
				</div>
			)}
		</div>
	)
}

export default ProductInfoSlider

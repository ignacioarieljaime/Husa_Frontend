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
import Expand from 'public/assets/images/expand.png'
import Mute from 'public/assets/images/mute.png'
import { useWindowSize } from 'hooks/useWindowSize'
function ProductInfoSlider({ pim, firstImage, allData }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [imageModal, setImageModal] = useState(false)
	const [width] = useWindowSize()
	const [thumbCanMove, setThumbCanMove] = useState(false)
	const [isMobileDragging, setIsMobileDragging] = useState(false)
	const [isMainDragging, setIsMainDragging] = useState(false)

	if (thumbsSwiper && width) {
		if (width >= 768) {
			if (thumbsSwiper?.navigation?.nextEl) {
				thumbsSwiper.navigation.nextEl.onmouseover=()=>setThumbCanMove(true)
				thumbsSwiper.navigation.nextEl.onmouseout=()=>setThumbCanMove(false)
			}
			if (thumbsSwiper?.navigation?.prevEl) {
				thumbsSwiper.navigation.prevEl.onmouseover=()=>setThumbCanMove(true)
				thumbsSwiper.navigation.prevEl.onmouseout=()=>setThumbCanMove(false)
			}
		}
	}

	const mobileDragHandler = () => {
		if (width < 768 && !thumbCanMove) {
			setThumbCanMove(true)
			if (!isMobileDragging) setIsMobileDragging(true)
		}
	}

	const mobileDragEndHandler = () => {
		if (width < 768 && thumbCanMove && isMobileDragging) {
			setThumbCanMove(false)
		}
		if (isMobileDragging) setIsMobileDragging(false)
	}

	const mainDragHandler = () => {
		if (!isMainDragging) {
			setIsMainDragging(true)
			if (!thumbCanMove) setThumbCanMove(true)
		}
	}

	const mainDragEndHandler = () => {
		if (isMainDragging) setIsMainDragging(false)
	}

	const canMoveTriggerPrevention = () => {
		if (isMainDragging) setIsMainDragging(false)
		if (thumbCanMove) setThumbCanMove(false)
	}

	return (
		<div className='product_gallery px-0'>
			<Swiper
				onSwiper={setThumbsSwiper}
				direction={width >= 768 ? 'vertical' : 'horizontal'}
				spaceBetween={4}
				slidesPerView={width >= 768 ? 'auto' : 4.45}
				freeMode={true}
				watchSlidesProgress={true}
				allowSlideNext={thumbCanMove}
				allowSlidePrev={thumbCanMove}
				onNavigationNext={() => {
					setThumbCanMove(true)
				}}
				onNavigationPrev={() => {
					setThumbCanMove(true)
				}}
				onSliderFirstMove={() => mobileDragHandler()}
				onTouchEnd={() => mobileDragEndHandler()}
				navigation={width >= 768 ? true : false}
				modules={[FreeMode, Thumbs, Navigation]}
				className='thumbs_gallery'>
				{firstImage && (
					<SwiperSlide
						aria-hidden='true'
						tabIndex={'-1'}
						className='h-fit'
						aria-label={`slide-${0}`}
						onClick={() => {
							setThumbCanMove(false)
						}}
						>
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
								key={index}
								aria-hidden='true'
								className='h-fit'
								tabIndex={'-1'}
								aria-label={`slide-${index + 1}`}
								onClick={() => {
									setThumbCanMove(false)
								}}
								>
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
						) : item.type_id === 5 ? (
							<SwiperSlide
								key={index}
								aria-hidden='true'
								className='h-fit'
								tabIndex={'-1'}
								aria-label={`slide-${index + 1}`}
								onClick={() => {
									setThumbCanMove(false)
								}}
								>
								<figure className='image_wrapper'>
									<iframe
										mute={true}
										src={item?.url}
										className='image'></iframe>
								</figure>
							</SwiperSlide>
						) : null
					)}
			</Swiper>
			<Swiper
				spaceBetween={20}
				navigation={true}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
				}}
				onSlideChange={swiper => {
					setThumbCanMove(true)
					thumbsSwiper.slideTo(swiper.activeIndex)
				}}
				onSliderFirstMove={() => mainDragHandler()}
				onTouchEnd={() => mainDragEndHandler()}
				onSnapIndexChange={() => canMoveTriggerPrevention()}
				onTransitionEnd={() => {
					if (!isMainDragging) setThumbCanMove(false)
				}}
				modules={[FreeMode, Thumbs, Navigation]}
				className='main_frame'>
				{pim && pim?.length === 0 ? (
					<SwiperSlide
					>
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
								<img src={Expand.src} width='16' />
							</button>
						</figure>
					</SwiperSlide>
				) : null}
				{firstImage ? (
					<SwiperSlide key={'custom'}
					>
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
								<img src={Expand.src} width='16' />
							</button>
						</figure>
					</SwiperSlide>
				) : null}
				{pim &&
					pim.map((item, index) =>
						item.type_id === 1 && item.url !== firstImage ? (
							<SwiperSlide key={index}
							>
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
										<img src={Expand.src} width='16' />
									</button>
								</figure>
								{/* <figcaption className='figure-caption'>
										{item.title}
									</figcaption> */}
							</SwiperSlide>
						) : item.type_id === 5 ? (
							<SwiperSlide key={index}>
								<figure className='video_wrapper'>
									{/* <video
											src={item?.url}
											title={item?.caption ? item?.caption : item?.title}
											alt={item?.caption ? item?.caption : item?.title}
											className='video'
										/> */}
									<iframe
										mute='true'
										src={item?.url}
										className='video'></iframe>
									<p>{item?.caption ? item?.caption : item?.title}</p>
									<div className='btns'>
										{/* <button
												// onClick={() => setImageModal(item?.url)}
												className='resize_btn'>
												<img src={Mute.src} width='16' />
											</button> */}
										<button
											onClick={() => setImageModal(item?.url)}
											className='resize_btn'>
											<img src={Expand.src} width='16' />
										</button>
									</div>
								</figure>
								{/* <figcaption className='figure-caption'>
										{item.title}
									</figcaption> */}
							</SwiperSlide>
						) : null
					)}
			</Swiper>
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

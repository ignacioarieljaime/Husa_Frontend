import AdditionalResourcesModuleSliderIcon from 'components/icons/AdditionalResourcesModuleSliderIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import AdditionalResourcesModuleItem from './AdditionalResourcesModuleItem'
import LightBoxModal from './LightBoxModal'

const AdditionalResourcesModule = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const [swiperInstance, setSwiperInstance] = useState(null)
	const [width] = useWindowSize()
	const [slideButtonStatus, setSlideButtonStatus] = useState({
		next: {
			disabled: false,
			lock: false
		},
		prev: {
			disabled: false,
			lock: false
		}
	})
	const [lightBoxStatus, setLightBoxStatus] = useState(false)
	const [lightBoxActiveIndex, setLightBoxActiveIndex] = useState(-1)
	const [justify, setJustify] = useState('')

	useEffect(() => {
		setContent(structure)
	}, [])

	useEffect(() => {
		if (width - content?.list?.value.length * 376 - 40 - 200 > 16)
			setJustify('justify_content_center')
		else setJustify('')
	}, [width])

	useEffect(() => {
		console.log(slideButtonStatus)
	}, [slideButtonStatus])

	const checkButtonsStatus = () => {
		let newButtonsStatus = { ...slideButtonStatus }
		const parentId = `#${data?.name + data?.id}`
		if (
			document
				.querySelector(`${parentId} .swiper-button-prev`)
				.classList.contains('swiper-button-disabled')
		) {
			console.log('prev button disabled')
			newButtonsStatus.prev.disabled = true
		} else {
			console.log('prev button enabled')
			newButtonsStatus.prev.disabled = false
		}
		if (
			document
				.querySelector(`${parentId} .swiper-button-next`)
				.classList.contains('swiper-button-disabled')
		) {
			console.log('next button disabled')
			newButtonsStatus.next.disabled = true
		} else {
			console.log('next button enabled')
			newButtonsStatus.next.disabled = false
		}

		if (
			document
				.querySelector(`${parentId} .swiper-button-prev`)
				.classList.contains('swiper-button-lock')
		) {
			console.log('prev button locked')
			newButtonsStatus.prev.lock = true
		} else {
			console.log('prev button unlocked')
			newButtonsStatus.prev.lock = false
		}
		if (
			document
				.querySelector(`${parentId} .swiper-button-next`)
				.classList.contains('swiper-button-lock')
		) {
			console.log('next button locked')
			newButtonsStatus.next.lock = true
		} else {
			console.log('next button unlocked')
			newButtonsStatus.next.lock = false
		}
		setSlideButtonStatus(newButtonsStatus)
	}

	const nextItemHandler = () => {
		document.querySelector(`#${data?.name + data?.id} .swiper-button-next`).click()
	}

	const prevItemHandler = () => {
		document.querySelector(`#${data?.name + data?.id} .swiper-button-prev`).click()
	}

	return (
		<section>
			<div
				id={data?.name + data?.id}
				className={`additional_resources_module ${
					content?.list?.value.length > 2 ? 'extra_space_bottom' : ''
				}`}>
				<h3
					className='additional_resources_module___title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
				<div className='additional_resources_module___content'>
					<Swiper
						grabCursor={true}
						roundLengths={true}
						slidesPerView={1.12}
						slidesPerGroup={1}
						onSwiper={swiper => setSwiperInstance(swiper)}
						onSlideChange={() => checkButtonsStatus()}
						onResize={() => checkButtonsStatus()}
						initialSlide={width >= 1000 ? 2 : 0}
						spaceBetween={16}
						centeredSlides={true}
						centeredSlidesBounds={true}
						navigation={true}
						pagination={{
							dynamicBullets: true,
							clickable: true
						}}
						speed={150}
						breakpoints={{
							2375: {
								slidesPerView: 'auto',
								slidesPerGroup: 7
							},
							1985: {
								slidesPerView: 6,
								slidesPerGroup: 6
							},
							1630: {
								slidesPerView: 5,
								slidesPerGroup: 5
							},
							1250: {
								slidesPerView: 4,
								slidesPerGroup: 4
							},
							875: {
								slidesPerView: 3,
								slidesPerGroup: 4
							},
							500: {
								slidesPerView: 2,
								slidesPerGroup: 2,
								centeredSlides: false
							},
							450: {
								slidesPerView: 'auto',
								slidesPerGroup: 1,
								centeredSlides: true
							}
						}}
						className={`additional_resources_module___content___slider ${justify} ${
							content?.list?.value.length > 2 ? '' : 'hide_controls'
						}`}
						modules={[Pagination, Navigation]}>
						{content?.list?.value.map((item, index) => (
							<SwiperSlide
								key={index}
								className='additional_resources_module___content___slider___item'>
								<AdditionalResourcesModuleItem
									data={item}
									index={index}
									lightboxHandler={() =>
										setLightBoxStatus(prevState => !prevState)
									}
									setLightBoxActiveIndex={setLightBoxActiveIndex}
									hasVideo={data?.structure?.list?.value[index]?.lightbox?.value?.video?.value}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div className='additional_resources_module___content___slider___controls_wrapper'>
						<button
							onClick={() => swiperInstance && prevItemHandler()}
							className={`additional_resources_module___content___slider___controls_wrapper___controls prev ${
								slideButtonStatus.prev.disabled ? 'disabled' : ''
							} ${slideButtonStatus.prev.lock ? 'd-none' : ''}`}>
							<AdditionalResourcesModuleSliderIcon />
						</button>
						<button
							onClick={() => swiperInstance && nextItemHandler()}
							className={`additional_resources_module___content___slider___controls_wrapper___controls next ${
								slideButtonStatus.next.disabled ? 'disabled' : ''
							} ${slideButtonStatus.next.lock ? 'd-none' : ''}`}>
							<AdditionalResourcesModuleSliderIcon />
						</button>
					</div>
				</div>
			</div>
			{lightBoxStatus && (
				<LightBoxModal
					id={data?.id}
					caption={
						data?.structure?.list?.value[lightBoxActiveIndex]?.lightbox?.value
							?.caption
					}
					video={
						data?.structure?.list?.value[lightBoxActiveIndex]?.lightbox?.value
							?.video
					}
					image={
						data?.structure?.list?.value[lightBoxActiveIndex]?.lightbox?.value
							?.image
					}
					link={
						data?.structure?.list?.value[lightBoxActiveIndex]?.lightbox?.value
							?.link
					}
					isVisible={lightBoxStatus}
					visibleHandler={() => setLightBoxStatus(prevState => !prevState)}
				/>
			)}
		</section>
	)
}

export default AdditionalResourcesModule

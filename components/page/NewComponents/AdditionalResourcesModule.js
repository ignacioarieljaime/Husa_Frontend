import AdditionalResourcesModuleSliderIcon from 'components/icons/AdditionalResourcesModuleSliderIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import AdditionalResourcesModuleItem from './AdditionalResourcesModuleItem'

const AdditionalResourcesModule = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const [swiperInstance, setSwiperInstance] = useState(null)
	const [width] = useWindowSize()

	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<section>
			<div id={data?.name + data?.id} className='additional_resources_module'>
				<h3
					className='additional_resources_module___title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
				<div className='additional_resources_module___content'>
					<Swiper
						onSwiper={swiper => setSwiperInstance(swiper)}
						onSlideChange={swiper => setSwiperInstance(swiper)}
						// onUpdate={swiper => console.log(swiper)}
						grabCursor={true}
						roundLengths={true}
						slidesPerView={1.1}
						slidesPerGroup={1}
						initialSlide={width >= 1000 ? 2 : 0}
						spaceBetween={16}
						centeredSlides={true}
						centeredSlidesBounds={true}
						pagination={{
							dynamicBullets: true,
							clickable: true
						}}
						breakpoints={{
							860: {
								slidesPerView: 3,
								slidesPerGroup: 3
							},
							540: {
								slidesPerView: 2,
								slidesPerGroup: 2,
								centeredSlides: false
							}
						}}
						className={`additional_resources_module___content___slider ${
							content?.list?.value.length > 4 ? '' : 'hide_controls'
						}`}
						modules={[Pagination, Navigation]}>
						{content?.list?.value.map((item, index) => (
							<SwiperSlide
								key={index}
								className='additional_resources_module___content___slider___item'>
								<AdditionalResourcesModuleItem data={item} />
							</SwiperSlide>
						))}
					</Swiper>
					<div className='additional_resources_module___content___slider___controls_wrapper'>
						<button
							onClick={() => swiperInstance && swiperInstance.slidePrev()}
							className={`additional_resources_module___content___slider___controls_wrapper___controls prev ${
								swiperInstance?.isBeginning ? 'disabled' : ''
							}`}>
							<AdditionalResourcesModuleSliderIcon />
						</button>
						<button
							onClick={() => swiperInstance && swiperInstance.slideNext()}
							className={`additional_resources_module___content___slider___controls_wrapper___controls next ${
								swiperInstance?.isEnd ? 'disabled' : ''
							}`}>
							<AdditionalResourcesModuleSliderIcon />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AdditionalResourcesModule

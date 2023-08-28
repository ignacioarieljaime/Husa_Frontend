import React, { useEffect } from 'react'
import Link from 'next/link'
import { useWindowSize } from 'hooks/useWindowSize'
import HomeAppliancesCarouselitem from './HomeAppliancesCarouselitem'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
// import { Navigation } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css/navigation'
// import 'swiper/css'
const HomeAppliancesCarousel = ({ data }) => {
	const { structure } = data

	const windowSize = useWindowSize()

	return (
		<section>
			<div className={`ha_carousel text-center ${structure?.theme?.value}`}>
				{structure?.subtitle?.value && (
					<div className='subtitle'>{structure?.subtitle?.value}</div>
				)}
				<h3
					className='title'
					dangerouslySetInnerHTML={{
						__html: structure?.title?.value
					}}></h3>
				<Swiper
					grabCursor={true}
					roundLengths={true}
					slidesPerView={'auto'}
					slidesPerGroup={1}
					initialSlide={windowSize[0] >= 1000 ? 2 : 0}
					spaceBetween={16}
					centeredSlides={true}
					centeredSlidesBounds={true}
					navigation={true}
					pagination={{
						dynamicBullets: true
					}}
					breakpoints={{
						2200: {
							slidesPerView: 'auto',
							slidesPerGroup: 6
						},
						1920: {
							slidesPerView: 4,
							slidesPerGroup: 6
						},
						1440: {
							slidesPerView: 5,
							slidesPerGroup: 3
						},
						1200: {
							slidesPerView: 4,
							slidesPerGroup: 3
						},
						1050: {
							slidesPerView: 3,
							slidesPerGroup: 3
						},
						991: {
							slidesPerView: 3,
							slidesPerGroup: 2
						},
						768: {
							slidesPerView: 3,
							slidesPerGroup: 2
						},
						550: {
							slidesPerView: 1.8,
							slidesPerGroup: 2
						}
					}}
					className={`slider ${justify} ${
						structure?.list?.value.length > 4 ? '' : 'hide_controls'
					}`}
					modules={[Pagination, Navigation]}>
					{structure?.list?.value.map((item, index) => (
						<SwiperSlide key={index} className='slider_item'>
							<HomeAppliancesCarouselitem data={item} structure={structure} />
						</SwiperSlide>
					))}
				</Swiper>
				{structure?.link?.value && (
					<div className='bottom_button'>
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value ? structure?.link?.value : '/'}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								style={{ width: '150px' }}
								className='primary text-nowrap n-btn d-block mx-auto w-fit px-5 py-3'>
								{structure?.link?.title}
								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					</div>
				)}
			</div>
		</section>
	)
}

export default HomeAppliancesCarousel

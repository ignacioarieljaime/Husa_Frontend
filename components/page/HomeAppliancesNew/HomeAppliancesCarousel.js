import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useWindowSize } from 'hooks/useWindowSize'
import HomeAppliancesCarouselitem from './HomeAppliancesCarouselitem'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

const HomeAppliancesCarousel = ({ data }) => {
	const { structure } = data
	const [justify, setJustify] = useState('')

	const windowSize = useWindowSize()

	useEffect(() => {
		if (windowSize[0] - structure?.list?.value.length * 296 - 40 > 16)
			setJustify('justify_content_center')
		else setJustify('')
	}, [windowSize])

	return (
		<section>
			<div
				className={`ha_carousel text-center ${structure?.theme?.value} ${
					structure?.list?.value.length > 4 ? 'extra_space_bottom' : ''
				}`}>
				{structure?.subtitle?.value && (
					<div className='subtitle'>{structure?.subtitle?.value}</div>
				)}
				<h3
					className='title'
					dangerouslySetInnerHTML={{
						__html: structure?.title?.value
					}}></h3>
				{/* <Splide
					options={{
						perPage: 7,
						perMove: 4,
						gap: '1rem',
						pagination: {},
						start:
							structure?.list?.value.length % 2 === 0
								? structure?.list?.value.length / 2 - 1
								: Math.floor(structure?.list?.value.length / 2),
						focus: 'center',
						classes: {
							arrows:
								structure?.list?.value.length > 4
									? 'splide__arrows'
									: 'splide__arrows hide',

							pagination:
								structure?.list?.value.length > 4
									? 'splide__pagination'
									: 'splide__pagination hide'
						},
						breakpoints: {
							1920: {
								perPage: 4,
								perMove: 6
							},
							1440: {
								perPage: 5,
								perMove: 3
							},
							1200: {
								perPage: 4,
								perMove: 3
							},
							991: {
								perPage: 3,
								perMove: 4
							},
							768: {
								perPage: 2,
								perMove: 2
							},
							575: {
								perPage: 2,
								perMove: 1
							},
							490: {
								perPage: 1,
								perMove: 1
							}
						}
					}}
					className='slider'>
					{structure?.list?.value.map((item, index) => (
						<SplideSlide key={index} className='slider_item'>
							<HomeAppliancesCarouselitem data={item} structure={structure} />
						</SplideSlide>
					))}
				</Splide> */}
				<Swiper
					grabCursor={true}
					roundLengths={true}
					slidesPerView={'auto'}
					slidesPerGroup={1}
					initialSlide={2}
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

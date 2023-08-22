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
				<Splide
					options={{
						perPage: 7,
						perMove: 3,
						gap: '1rem',
						pagination: {
							items: {}
						},
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
								perMove: 4
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
				</Splide>
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

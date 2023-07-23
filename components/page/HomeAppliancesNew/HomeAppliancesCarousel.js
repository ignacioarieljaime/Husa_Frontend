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
				<Splide
					options={{
						pagination: false,
						perPage: 1,
						perMove: 1,
						gap: '1rem',
						pagination: false
						// breakpoints: {
						// 	1200: {
						// 		perPage: 4
						// 	},
						// 	991: {
						// 		perPage: 3
						// 	},
						// 	800: {
						// 		perPage: 4
						// 	},
						// 	700: {
						// 		perPage: 3
						// 	},
						// 	680: {
						// 		perPage: 2
						// 	},
						// 	500: {
						// 		perPage: 1
						// 	}
						// }
					}}
					className='slider'>
					{windowSize[0] > 768 && (
						<SplideSlide
							className='slider_item'
							style={{ width: '260px' }}></SplideSlide>
					)}
					{structure?.list?.value.map((item, index) => (
						<SplideSlide key={index} className='slider_item'>
							<HomeAppliancesCarouselitem data={item} structure={structure} />
						</SplideSlide>
					))}
				</Splide>
				{/* <Swiper
					pagination={false}
					slidesPerView={'auto'}
					centeredSlides={false}
					modules={[Navigation]}
					navigation={true}
					spaceBetween={24}
					className='slider'>
					{windowSize[0] > 768 && (
						<SwiperSlide
							className='slider_item'
							style={{ width: '260px' }}></SwiperSlide>
					)}
					{structure?.list?.value.map((item, index) => (
						<SwiperSlide key={index} className='slider_item'>
							<HomeAppliancesCarouselitem data={item} structure={structure} />
						</SwiperSlide>
					))}
				</Swiper> */}
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

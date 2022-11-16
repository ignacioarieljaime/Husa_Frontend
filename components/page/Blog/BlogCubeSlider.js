import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper'
import BlogCubeSliderItem from './BlogCubeSliderItem'

function BlogCubeSlider({ data: { structure } }) {
	const [carouselItems, setCarouselItems] = useState()
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span className="' +
				className +
				'">' +
				carouselItems[index] +
				'</span>'
			)
		}
	}

	useEffect(() => {
		setCarouselItems(structure?.list?.value.map(item => item?.model?.value))
	}, [structure])

	return (
		<section>
			<div className='bg-light-orange-gradient'>
				<div className='overflow-hidden'>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: -30,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: false
						}}
						pagination={pagination}
						modules={[EffectCoverflow, Pagination]}
						className='blog-big-coverflow my-20'>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide key={index}>
								<BlogCubeSliderItem data={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default BlogCubeSlider

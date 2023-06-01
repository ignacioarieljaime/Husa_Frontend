import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper'
import BlogCubeSliderItem from './BlogCubeSliderItem'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'

function BlogCubeSlider({ data: { structure } }) {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [carouselItems] = useState(
		structure?.list?.value.map(item => item?.model?.value)
	)
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span class="' + className + '">' + carouselItems[index] + '</span>'
			)
		}
	}

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
						className='blog-big-coverflow mb-15 mb-md-20 mt-15'>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide key={index}>
								<BlogCubeSliderItem
									data={item}
									modalHandler={setChanelAdviserHandler}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<ModalChanelAdviser
				condition={chanelAdviserHandler}
				handler={setChanelAdviserHandler}
				model={chanelAdviserHandler}
			/>
		</section>
	)
}

export default BlogCubeSlider

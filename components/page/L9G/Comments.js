import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'
import CommentItem from './CommentItem'

const Comments = () => {
	return (
		<section className='l9g'>
			<div className='comments l-nine-g-comments'>
				<Swiper
					modules={[Navigation, Pagination]}
					centeredSlides={true}
					slidesPerView={'1'}
					navigation
					pagination={{ clickable: true }}
					className='comments-carousel'>
					<SwiperSlide className='my-auto'>
						<CommentItem
							quote="The best UST for gaming I've tried so far."
							author='Mark Henninger, ProjectorCentral.com'
						/>
					</SwiperSlide>
					<SwiperSlide className='my-auto'>
						<CommentItem
							quote='We have reviewed several good Laser TVs, but the L9G is arguably
								the best.'
							author='Phil Jones, ProjectorReviews.com'
						/>
					</SwiperSlide>
					<SwiperSlide className='my-auto'>
						<CommentItem
							quote='The screen needs to be part of the UST experience, and the
								inclusion of a high-quality, easily adjustable screen sets the
								Hisense apart.'
							author='Mark Henninger, ProjectorCentral.com'
						/>
					</SwiperSlide>
					<SwiperSlide className='my-auto'>
						<CommentItem
							quote='The color that this projector produces are just stunning.'
							author='Phil Jones, ProjectorReviews.com'
						/>
					</SwiperSlide>
					<SwiperSlide className='my-auto'>
						<CommentItem
							quote="I saw extremely rich colors and excellent rendering of fine gradation at all brightness levels, and no notion of the tonality being out of balance. It's an impressive feat of dynamic contrast picture processing that allows the L9G to rise to the top of its class."
							author='Mark Henninger, ProjectorCentral.com'
						/>
					</SwiperSlide>
					<SwiperSlide className='my-auto'>
						<CommentItem
							quote="Quite possibly, the best-designed Laser TV that I've reviewed in the last two years."
							author='Phil Jones, ProjectorReviews.com'
						/>
					</SwiperSlide>
					<SwiperSlide className='my-auto'>
						<CommentItem
							quote='A superior overall performer to the existing, competing triple laser offerings from LG and Samsung, and one of the best premium UST projectors you can buy today.'
							author='Mark Henninger, ProjectorCentral.com'
						/>
					</SwiperSlide>
					<SwiperSlide className='my-auto'>
						<CommentItem
							quote="The L9G has the sheer horsepower (brightness) needed to be a TV in a bright room and the torque (contrast and color) to look great calibrated and in a darker setting, showing high-quality SDR content. It's a real master of both trades."
							author='Mark Henninger, ProjectorCentral.com'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default Comments

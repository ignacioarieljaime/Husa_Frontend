import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper'
import CommentItem from './CommentItem'

const Comments = ({ data: { structure } }) => {
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
					{structure?.comments?.value.map((item, index) => (
						<SwiperSlide className='my-auto' key={index}>
							<CommentItem
								quote={item?.quote?.value}
								author={item?.author?.value}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Comments

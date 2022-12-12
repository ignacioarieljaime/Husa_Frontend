import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductPackageItem from './ProductPackageItem'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const ProductPackageItems = ({ data: { structure } }) => {
	return (
		<section className='day-100 eligible_models_slider kitchen_suite_carousel'>
			<div className='bg-grey px-8 px-md-13 eligble-models py-10'>
				<div className='container text-center'>
					<article className='article'>
						<h2 className='text-eggplant fw-bolder-700 mb-6'>
							{structure?.title?.value}
						</h2>
					</article>
				</div>
				<div>
					<Swiper
						grabCursor={true}
						roundLengths={true}
						slidesPerView={'auto'}
						freeMode={true}
						centeredSlides={true}
						spaceBetween={30}
						navigation={false}
						pagination={true}
						modules={[Pagination]}
						className='eligble-models-carousel kitchen_suite_items mt-10'>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide
								style={{ height: 'unset' }}
								key={'slider' + index}
								className='kitchen_suite_item'>
								<ProductPackageItem data={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default ProductPackageItems

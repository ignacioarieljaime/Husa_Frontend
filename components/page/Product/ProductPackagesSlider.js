import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import CustomImage from 'components/common/CustomImage'

const ProductPackagesSlider = ({ data: { structure } }) => {
	return (
		<section className='package_types_slider'>
			<article className='article'>
				<h2>{structure?.title?.value}</h2>
			</article>
			<div>
				<Swiper
					spaceBetween={28}
					modules={[Pagination]}
					pagination={true}
					centeredSlides={true}
					grabCursor={true}
					draggable={true}
					slidesPerView={'auto'}>
					{structure?.list?.value.map((item, index) => (
						<SwiperSlide
							aria-hidden='true'
							className='item'
							key={index}
							tabIndex={'-1'}
							aria-label={`slide-${index + 1}`}>
							<div>
								<CustomImage src={item?.image?.src} alt={item?.image?.alt} />
								<h5>{item?.title?.value}</h5>
								<Link href={item?.link?.value}>
									<a>{item?.link?.title}</a>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default ProductPackagesSlider

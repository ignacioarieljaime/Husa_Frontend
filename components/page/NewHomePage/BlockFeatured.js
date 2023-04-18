import React from 'react'

import Link from 'next/link'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CustomImage from '../../common/CustomImage'

const BlockFeatured = ({ data: { structure } }) => {
	return (
		<section>
			<Swiper
				navigation={true}
				pagination={true}
				centeredSlides={true}
				spaceBetween={8}
				slidesPerView={'auto'}
				grabCursor={true}
				loop={true}
				modules={[Pagination, Navigation]}
				breakpoints={{
					768: {
						spaceBetween: 35
					}
				}}
				className='news-slider'>
				{structure?.list?.value.map((item, index) => (
					<SwiperSlide key={index} className='slider-item'>
						<h3 className='slider-title fs-2'>{item?.title?.value}</h3>
						<div className='slider-body'>
							{item?.image ? (
								<CustomImage
									src={item?.image?.src}
									alt={item?.image?.alt}
									className='slider-image'
									wrapperWidth={'100%'}
								/>
							) : (
								<div className='slider-video'>
									<video autoPlay={true} muted={true} loop={true}>
										<source src={item?.video?.src} />
										{item?.image?.alt}
									</video>
								</div>
							)}
							<div className='slider-content'>
								<h5 className='description d-none d-md-block'>
									{item?.description?.value}
								</h5>
								<Link
									target={item?.link?.target ? item?.link?.target : '_self'}
									href={item?.link?.value ? item?.link?.value : '/'}>
									<a className='n-btn outline-white transparent d-block w-fit mx-auto'>
										{item?.link?.title}
										{item?.link?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
								{item?.video && (
									<span className='play'>
										<FontAwesomeIcon
											icon={faPlayCircle}
											size={'xl'}
											className='ms-2'
										/>
									</span>
								)}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default BlockFeatured

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import Link from 'next/link'

const BlockCategories = ({ data }) => {
	const structure = {
		title: {
			value: 'We make fantastic appliances, too.'
		},
		list: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/489/98ea03c6d7/main-img__ScaleMaxWidthWzY0MF0.png'
					},
					link: {
						title: 'Television',
						value: '/'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/488/8e357f4b93/roku__ScaleMaxWidthWzY0MF0.png'
					},
					link: {
						title: 'Television',
						value: '/'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/488/8e357f4b93/roku__ScaleMaxWidthWzY0MF0.png'
					},
					link: {
						title: 'Television',
						value: '/'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/488/8e357f4b93/roku__ScaleMaxWidthWzY0MF0.png'
					},
					link: {
						title: 'Television',
						value: '/'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/488/8e357f4b93/roku__ScaleMaxWidthWzY0MF0.png'
					},
					link: {
						title: 'Television',
						value: '/'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/488/8e357f4b93/roku__ScaleMaxWidthWzY0MF0.png'
					},
					link: {
						title: 'Television',
						value: '/'
					}
				}
			]
		}
	}

	return (
		<section>
			<div className='new-home-page-appliances mb-20'>
				<h2 className='title fs-3x mb-15'>{structure?.title?.value}</h2>
				<Swiper
					navigation={false}
					pagination={false}
					spaceBetween={16}
					slidesPerView={'auto'}
					centeredSlides={true}
					grabCursor={true}
					className='appliances-slider'>
					{structure.list.value.map((item, index) => (
						<SwiperSlide key={index} className='slider-item'>
							<img
								src={item?.image?.src}
								alt={item?.image?.alt}
								className='slider-image my-auto'
							/>
							<Link href={item?.link.value}>
								<a className='slider-title text-nowrap n-btn outline-black transparent'>
									{item?.link.title}
								</a>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default BlockCategories

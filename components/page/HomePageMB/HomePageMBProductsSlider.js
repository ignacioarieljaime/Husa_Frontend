import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const HomePageMBProductsSlider = ({ data }) => {
	let structure1 = {
		list: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg',
						alt: '',
						title: ''
					},
					title: {
						value: 'Television'
					},
					link: {
						value: '/',
						title: 'Television'
					}
				}
			]
		}
	}
	return (
		<section>
			<div className='home-page-mb-products'>
				<h3 className='section-title'>Discover the Hisense Line-up</h3>
				<Swiper
					navigation={false}
					pagination={false}
					spaceBetween={35}
					slidesPerView={'auto'}
					centeredSlides={true}
					grabCursor={true}
					className='home-page-mb-products-slider'>
					{structure1.list.value.map((item, index) => (
						<SwiperSlide key={index} className='slider-item'>
							<div>
								<img
									src={item.image.src}
									alt={item.image?.alt}
									title={item.image?.title}
									className='slider-image'
								/>
								<a
									href={item.link.value}
									className='slider-title n-btn outline-black'>
									{item.link.title}
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default HomePageMBProductsSlider

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper'

const HomePageMBSlider = ({ data }) => {
	let structure1 = {
		list: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/9ae312d30e/cat-uled-tvs-header-img__ScaleMaxWidthWzMwNDhd.jpg-er4sxv.jpg',
						alt: '',
						title: ''
					},
					title: {
						value: 'WOW'
					},
					link: {
						value: '/',
						title: 'link'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/9ae312d30e/cat-uled-tvs-header-img__ScaleMaxWidthWzMwNDhd.jpg-er4sxv.jpg',
						alt: '',
						title: ''
					},
					title: {
						value: 'WOW'
					},
					link: {
						value: '/',
						title: 'link'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/9ae312d30e/cat-uled-tvs-header-img__ScaleMaxWidthWzMwNDhd.jpg-er4sxv.jpg',
						alt: '',
						title: ''
					},
					title: {
						value: 'WOW'
					},
					link: {
						value: '/',
						title: 'link'
					}
				}
			]
		}
	}

	SwiperCore.use([Autoplay])
	return (
		<section>
			<Swiper
				navigation={false}
				pagination={true}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				modules={[Pagination]}
				className='home-page-mb-slider'>
				{structure1.list.value.map((item, index) => (
					<SwiperSlide key={index}>
						<div className='slider-item heading'>
							<img
								src={item.image.src}
								alt={item.image.alt}
								title={item.image.title}
								className='slider-image'
								width='100%'
								height='100%'
							/>
							<div className='slider-content'>
								<h2 className='mb-0'>{item.title.value}</h2>
								<a
									href={item.link.value}
									className='slider-link n-btn outline-white transparent'>
									{item.link.title}
								</a>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default HomePageMBSlider

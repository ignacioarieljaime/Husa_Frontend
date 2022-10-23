import React, { useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const SupportNewProducts = ({ data }) => {
	const [searchTerm, setSearchTerm] = useState('')
	let { structure } = data
	return (
		<section>
			<div className='support-products'>
				<h3 className='section-title container-fluid'>
					Select a product category to get started.
				</h3>
				<Swiper
					navigation={false}
					pagination={false}
					spaceBetween={35}
					slidesPerView={'auto'}
					centeredSlides={true}
					grabCursor={true}
					className='support-products-slider'>
					{structure?.list?.value.map((item, index) => (
						<SwiperSlide key={index} className='slider-item'>
							<div>
								<img
									src={item?.image?.src}
									alt={item?.image?.alt}
									title={item?.image?.title}
									className='slider-image'
								/>
								<a
									href={item?.link?.value}
									className='slider-title n-btn outline-black'>
									{item?.link?.title}
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='container-fluid'>
					<form>
						<div className='support-products-searchbox'>
							<input
								type='text'
								placeholder='please select your product'
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
							/>
							<button>
								<FontAwesomeIcon icon={faMagnifyingGlass} size={'md'} />
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default SupportNewProducts

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import EligbleModelsItem from './EligbleModelsItem'

import 'swiper/css'

const EligibleModels = () => {
	return (
		<section className='day-100'>
			<div className='bg-grey eligble-models py-20'>
				<div className='container text-center'>
					<h2 className='text-eggplant fs-2hx fw-bolder-700 mb-6'>
						ELIGIBLE MODELS
					</h2>
					<h3 className='text-purple fs-2 mb-12'>
						Hisense's Award-Winning 2022 Google TV Lineup
					</h3>
				</div>
				<div>
					<Swiper
						grabCursor={true}
						spaceBetween='30'
						centeredSlides={true}
						slidesPerView='auto'
						roundLengths={true}
						pagination={{ enabled: false }}
						navigation={{ enabled: false }}
						className='eligble-models-carousel'>
						<SwiperSlide>
							<EligbleModelsItem />
						</SwiperSlide>
						<SwiperSlide>
							<EligbleModelsItem />
						</SwiperSlide>
						<SwiperSlide>
							<EligbleModelsItem />
						</SwiperSlide>
						<SwiperSlide>
							<EligbleModelsItem />
						</SwiperSlide>
						<SwiperSlide>
							<EligbleModelsItem />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className='container text-center'>
					<button className='btn btn-primary rounded-5 py-4 px-6 mb-8'>
						Shop All Eligible Models
					</button>
					<p className='text-eggplant fs-5'>
						Offer valid from September 1st - October 31st.
					</p>
					<p className='text-eggplant fs-5'>
						For full program details, visit:{' '}
						<a href='#' className='text-purple'>
							http://hisense-promos.com/noregrets
						</a>
					</p>
				</div>
			</div>
		</section>
	)
}

export default EligibleModels

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import EligbleModelsItem from './EligbleModelsItem'

import 'swiper/css'
import Link from 'next/link'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

const EligibleModels = ({ data }) => {
	let { structure } = data
	return (
		<section className='day-100 eligible_models_slider '>
			<div className='bg-grey px-10 eligble-models py-20'>
				<div className='container text-center'>
					<h2 className='text-eggplant fs-2hx fw-bolder-700 mb-6'>
						{structure?.title?.value}
					</h2>
					<h3 className='mb-12'>
						<Link href={structure?.linkUrl?.value}>
							<a className='text-purple fs-2 '>{structure?.linkTitle?.value}</a>
						</Link>
					</h3>
				</div>
				<div>
					<Swiper
						grabCursor={true}
						roundLengths={true}
						slidesPerView={3}
						spaceBetween={50}
						pagination={{ enabled: false }}
						navigation={true}
						modules={[Navigation]}
						className='eligble-models-carousel '>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide style={{ height: '100%' }} key={'slider' + index}>
								<EligbleModelsItem data={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className='container text-center'>
					<Link href={structure?.link?.value}>
						<a className='btn btn-primary rounded-5 py-4 px-6 mb-8'>
							{structure?.link?.title}
						</a>
					</Link>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default EligibleModels

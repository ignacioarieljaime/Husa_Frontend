import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import EligbleModelsItem from './EligbleModelsItem'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import 'swiper/css'
import Link from 'next/link'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

const EligibleModels = ({ data }) => {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section className='day-100 eligible_models_slider '>
			<div className='bg-grey px-13 eligble-models py-20'>
				<div className='container text-center'>
					<h2 className='text-eggplant fs-2hx fw-bolder-700 mb-6'>
						{structure?.title?.value}
					</h2>
					<h3 className='mb-12'>
						<Link
							target={
								structure?.linkTitle?.target
									? structure?.linkTitle?.target
									: '_self'
							}
							href={structure?.linkUrl?.value}>
							<a
								target={
									structure?.linkTitle?.target
										? structure?.linkTitle?.target
										: '_self'
								}
								className='text-purple fs-2'>
								{structure?.linkTitle?.value}{' '}
								{structure?.linkTitle?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					</h3>
				</div>
				<div>
					<Swiper
						grabCursor={true}
						roundLengths={true}
						slidesPerView={3}
						spaceBetween={30}
						pagination={{ enabled: false }}
						navigation={true}
						modules={[Navigation]}
						className='eligble-models-carousel '>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide style={{ height: 'unset' }} key={'slider' + index}>
								<EligbleModelsItem data={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className='container text-center'>
					{structure?.link?.value && (
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								className='n-btn primary rounded-5 medium mb-8'>
								{structure?.link?.title}

								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					)}
					{}
					<div dangerouslySetInnerHTML={{ __html: text }}></div>
				</div>
			</div>
		</section>
	)
}

export default EligibleModels

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'
import SeasonUpgradeProductsCarouselItem from './SeasonUpgradeProductsCarouselItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons'

const SeasonUpgradeProductsCarousel = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				className={`season_upgrade_carousel ${content?.text?.value}`}>
				<div className='text_content'>
					<p className='pretitle'>{content?.subtitle?.value}</p>
					<Link href={'/'}>
						<a className='text-decoration-none'>
							<h2
								className='title'
								dangerouslySetInnerHTML={{
									__html: content?.title?.value
								}}></h2>
						</a>
					</Link>
				</div>
				<Swiper
					grabCursor={true}
					slidesPerView={'auto'}
					slidesPerGroup={1}
					spaceBetween={16}
					initialSlide={content?.direction?.value === 'left' ? 5 : 1}
					centeredSlides={true}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}}
					className={`carousel`}
					modules={[Navigation]}>
					{[{}, {}, {}, {}, {}, {}, {}].map((item, index) => (
						<SwiperSlide key={index} className='w-fit'>
							<SeasonUpgradeProductsCarouselItem data={item} />
						</SwiperSlide>
					))}
					<button className='swiper-button-next'>
						<FontAwesomeIcon icon={faChevronRight} size='2xl' />
					</button>
					<button className='swiper-button-prev'>
						<FontAwesomeIcon icon={faChevronLeft} size='2xl' />
					</button>
				</Swiper>
			</div>
		</section>
	)
}

export default SeasonUpgradeProductsCarousel

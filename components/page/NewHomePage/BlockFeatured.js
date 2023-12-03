import React, { useEffect, useState } from 'react'

import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import BlockFeaturedItem from './BlockFeaturedItem'
import LightBoxModal from '../NewComponents/LightBoxModal'

const BlockFeatured = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState()
	const [lightBoxStatus, setLightBoxStatus] = useState(false)
	const [lightBoxActiveIndex, setLightBoxActiveIndex] = useState(-1)
	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<section>
			<Swiper
				navigation={true}
				pagination={true}
				centeredSlides={true}
				spaceBetween={8}
				slidesPerView={'auto'}
				grabCursor={true}
				loop={content?.list?.value.length > 2 ? true : false}
				modules={[Pagination, Navigation]}
				breakpoints={{
					768: {
						spaceBetween: 35
					}
				}}
				className='news-slider'>
				{content?.list?.value.map((item, index) => (
					<SwiperSlide key={index} className='slider-item'>
						<BlockFeaturedItem
							data={item}
							isLightBoxValid={content?.list?.value[index]?.lightbox?.value}
							activateLightBox={() => {
								setLightBoxStatus(true)
								setLightBoxActiveIndex(index)
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			{content?.list?.value[lightBoxActiveIndex]?.lightbox?.value && (
				<LightBoxModal
					id={data?.id}
					caption={
						content?.list?.value[lightBoxActiveIndex]?.lightboxObject?.value
							?.caption
					}
					video={
						content?.list?.value[lightBoxActiveIndex]?.lightboxObject?.value
							?.video
					}
					image={
						content?.list?.value[lightBoxActiveIndex]?.lightboxObject?.value
							?.image
					}
					link={
						content?.list?.value[lightBoxActiveIndex]?.lightboxObject?.value
							?.link
					}
					isVisible={lightBoxStatus}
					visibleHandler={() => setLightBoxStatus(prevState => !prevState)}
				/>
			)}
		</section>
	)
}

export default BlockFeatured

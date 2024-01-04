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
		if (structure && structure?.list?.value.length > 0) {
			let temp = structure?.list?.value.sort(
				(a, b) =>
					parseInt(b?.itemCenter?.value) - parseInt(a?.itemCenter?.value)
			)
			temp.unshift(temp.pop())
			setContent(temp)
		}
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
				loop={content && content.length > 2 ? true : false}
				modules={[Pagination, Navigation]}
				breakpoints={{
					768: {
						spaceBetween: 35
					}
				}}
				className='news-slider'>
				{content &&
					content.length > 0 &&
					content.map((item, index) => (
						<SwiperSlide key={index} className='slider-item'>
							<BlockFeaturedItem
								data={item}
								length={content.length}
								isLightBoxValid={content[index]?.lightbox?.value}
								activateLightBox={() => {
									setLightBoxStatus(true)
									setLightBoxActiveIndex(index)
								}}
							/>
						</SwiperSlide>
					))}
			</Swiper>
			{content &&
				content.length > 0 &&
				content[lightBoxActiveIndex]?.lightbox?.value && (
					<LightBoxModal
						id={data?.id}
						caption={
							content[lightBoxActiveIndex]?.lightboxObject?.value?.caption
						}
						video={content[lightBoxActiveIndex]?.lightboxObject?.value?.video}
						image={content[lightBoxActiveIndex]?.lightboxObject?.value?.image}
						link={content[lightBoxActiveIndex]?.lightboxObject?.value?.link}
						isVisible={lightBoxStatus}
						visibleHandler={() => setLightBoxStatus(prevState => !prevState)}
					/>
				)}
		</section>
	)
}

export default BlockFeatured

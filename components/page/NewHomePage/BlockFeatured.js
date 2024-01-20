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
			const list = structure?.list?.value;
		
			// Calculate the total weight based on itemCenter values
			const totalWeight = list.reduce(
			(sum, item) => sum + parseInt(item?.itemCenter?.value || 0),
			0
			);
		
			// Weighted random index
			const getRandomWeightedIndex = () => {
			let randomValue = Math.random() * totalWeight;
			for (let i = 0; i < list.length; i++) {
				randomValue -= parseInt(list[i]?.itemCenter?.value || 0);
				if (randomValue <= 0) {
				return i;
				}
			}
			return list.length - 1;
			};
		
			for (let i = list.length - 1; i > 0; i--) {
			const j = getRandomWeightedIndex();
			[list[i], list[j]] = [list[j], list[i]];
			}
		
			setContent([...list]);
		}
	}, [structure]);

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

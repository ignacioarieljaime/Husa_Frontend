import React, { useState } from 'react'
import { useEffect } from 'react'

import img1 from 'public/assets/images/lockup_NH.png'
import img2 from 'public/assets/images/lockup_US.png'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper'

const SeasonUpgradeHeaderBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])

	const sample = [
		{
			image: {
				src: img1.src
			}
		},
		{
			image: {
				src: img2.src
			}
		}
	]

	return (
		<section>
			<div id={data?.name + data?.id} className='season_upgrade_header_banner'>
				<Swiper
					autoplay={{
						delay: -500,
						disableOnInteraction: false
					}}
					loop={true}
					speed={3000}
					slidesPerView={'auto'}
					slidesPerGroup={1}
					spaceBetween={48}
					grabCursor={false}
					allowTouchMove={false}
					modules={[Autoplay]}>
					{new Array(10).fill({}).map(_ =>
						sample.map((_item, index) => (
							<SwiperSlide key={index} className='w-fit'>
								<img src={_item.image.src} alt='featured' />
							</SwiperSlide>
						))
					)}
				</Swiper>
			</div>
		</section>
	)
}

export default SeasonUpgradeHeaderBanner

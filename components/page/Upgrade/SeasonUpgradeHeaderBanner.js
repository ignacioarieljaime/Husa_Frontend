import React, { useState } from 'react'
import { useEffect } from 'react'

import { SwiperSlide, Swiper, useSwiper } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useRef } from 'react'

const SeasonUpgradeHeaderBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	const splideRef = useRef()

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	useEffect(() => {
		console.log(splideRef.current.splide.Components.Autoplay.play())
		splideRef.current.splide.Components.Autoplay.play()
	}, [content])

	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='season_upgrade_header_banner'
				style={{ backgroundColor: content?.backgroundColor?.value }}>
				<Splide
					ref={splideRef}
					options={{
						type: 'loop',
						autoplay: true,
						arrows: false,
						pagination: false,
						clones: 8,
						gap: '48px',
						perPage: 1,
						pauseOnHover: false,
						speed: 1100,
						interval: 700,
						easing: 'linear'
					}}>
					{content?.list?.value.map((_item, index) => (
						<SplideSlide key={index} className='w-fit'>
							<img src={_item.image.src} alt='featured' />
						</SplideSlide>
					))}
				</Splide>
			</div>
		</section>
	)
}

export default SeasonUpgradeHeaderBanner

import { Splide, SplideSlide } from '@splidejs/react-splide'
import React, { useState } from 'react'
import { useEffect } from 'react'

import img1 from 'public/assets/images/lockup_NH.png'
import img2 from 'public/assets/images/lockup_US.png'
import '@splidejs/react-splide/css'

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
				{new Array(10)
					.fill({})
					.map(_ =>
						sample.map((_item, index) => (
							<img key={index} src={_item.image.src} alt='featured' />
						))
					)}
			</div>
		</section>
	)
}

export default SeasonUpgradeHeaderBanner

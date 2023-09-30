import RedScratch from 'components/icons/ScratchVector'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSwiper } from 'swiper/react'

const SeasonUpgradeDealCounterBlockWeekItem = ({
	active,
	title,
	past,
	activeIndex
}) => {
	const swiper = useSwiper()

	useEffect(() => {
		swiper.slideTo(
			window.innerWidth <= 440 && activeIndex > 1
				? activeIndex - 1
				: window.innerWidth <= 768 && activeIndex > 2
				? activeIndex - 1
				: 0
		)
	}, [activeIndex])

	return (
		<div className={`${active ? 'active' : ''}`}>
			{title}
			{past && <RedScratch />}
		</div>
	)
}

export default SeasonUpgradeDealCounterBlockWeekItem

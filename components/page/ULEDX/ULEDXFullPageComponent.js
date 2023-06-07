import React, { useState } from 'react'
import ProductHeader from './New/ProductHeader'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import ProductHero from './New/ProductHero'
import FullWidthVideo from './New/FullVideo'
import MiniLED from './New/MiniLED'
import TechFeatures from './New/TechFeatures'
import EngineX from './New/EngineX'
import DynamicDisplay from './New/DynamicDisplay'
import HighDynamicContrast from './New/HighDynamicContrast'
import CinemaQuality from './New/CinemaQuality'
import CineStageX from './New/CineStageX'
import { ParallaxProvider } from 'react-scroll-parallax'
import PlaceholderHeader from './New/PlaceholderHeader'
import PlaceholderFooter from './New/PlaceholderFooter'

const ULEDXFullPageComponent = ({ data, pim }) => {
	const [scrollPosY, setScrollPosY] = useState(0)
	const userPrefersReducedMotion = useMediaQuery({
		query: '(prefers-reduced-motion)'
	})

	const onScroll = useCallback(event => {
		const { pageYOffset, scrollY } = window
		setScrollPosY(window.pageYOffset)
	}, [])

	useEffect(() => {
		//add eventlistener to window
		window.addEventListener('scroll', onScroll, { passive: true })
		// remove event on unmount to prevent a memory leak with the cleanup
		return () => {
			window.removeEventListener('scroll', onScroll, { passive: true })
		}
	}, [])

	return (
		<ParallaxProvider isDisabled={userPrefersReducedMotion}>
			<main className='uled-wrapper'>
				<ProductHeader pin={scrollPosY > 64} />
				<ProductHero />
				<FullWidthVideo
					heading='<span>Marks</span>  <span>the spot</span>'
					ariaLabel='X marks the spot'
					videoSrc='/assets/uledx-assets/videos/peak-brightness.mp4'
					variant='MarksTheSpot'
					poster='/assets/uledx-assets/videos/peak-brightness-poster@3x.webp'
				/>
				<MiniLED />
				<TechFeatures />
				<FullWidthVideo
					heading='The power of ‘X’'
					hasAnimation={true}
					videoSrc='/assets/uledx-assets/videos/HiView.mp4'
					poster='/assets/uledx-assets/videos/HiView-poster@3x.webp'
				/>
				<EngineX />
				<DynamicDisplay />
				<HighDynamicContrast />
				<CinemaQuality />
				<CineStageX />
			</main>
		</ParallaxProvider>
	)
}

export default ULEDXFullPageComponent

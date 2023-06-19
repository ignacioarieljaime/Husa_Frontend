import React, { useRef, useState } from 'react'
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
import L9GProductDetailsBox from '../L9G/L9GProductDetailsBox'
import TechnicalSpecs from './New/TechnicalSpecs'
import CompareLineup from './New/CompareLineup'
import { useWindowSize } from 'hooks/useWindowSize'

const ULEDXFullPageComponent = ({ data, pim }) => {
	const { structure } = data
	const productHeroContent = useRef()
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
		<>
			<ParallaxProvider isDisabled={userPrefersReducedMotion}>
				<main ref={productHeroContent} className='uled-wrapper'>
					{structure?.template?.value === 'v1' ? (
						<>
							<ProductHeader
								pin={scrollPosY > productHeroContent.current?.offsetTop}
								pim={pim}
							/>
							<ProductHero />
							<FullWidthVideo
								heading='<span>Marks</span>  <span>the spot</span>'
								ariaLabel='X marks the spot'
								videoSrc='/assets/uledx-assets/videos/x-marks-the-spot.mp4'
								variant='MarksTheSpot'
								poster='/assets/uledx-assets/videos/peak-brightness-poster@3x.webp'
							/>
							<MiniLED />
							<TechFeatures button={structure.template.value === 'v2'} />
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
						</>
					) : (
						<>
							<ProductHeader
								pin={scrollPosY > productHeroContent.current?.offsetTop}
								pim={pim}
							/>
							<ProductHero />
							<FullWidthVideo
								heading='<span>Marks</span>  <span>the spot</span>'
								ariaLabel='X marks the spot'
								videoSrc='/assets/uledx-assets/videos/x-marks-the-spot.mp4'
								variant='MarksTheSpot'
								poster='/assets/uledx-assets/videos/peak-brightness-poster@3x.webp'
							/>
							<MiniLED />
							<TechFeatures button={structure?.template?.value === 'v2'} />
							<FullWidthVideo
								heading='The power of ‘X’'
								hasAnimation={true}
								videoSrc='/assets/uledx-assets/videos/HiView.mp4'
								poster='/assets/uledx-assets/videos/HiView-poster@3x.webp'
							/>
							<EngineX />
							<DynamicDisplay />
							<FullWidthVideo
								preheader='A DISPLAY CRAFTED FOR NEXT GEN GAMING'
								heading='Game like a pro.'
								subtext='Slide into first place with 120Hz Game Mode Pro and all the game-ready features you’ll need for the optimal gaming experience.'
								videoSrc='/assets/uledx-assets/videos/UX-Micro-Gaming.mp4'
								poster='/assets/uledx-assets/videos/micro-gaming@3x.webp'
								showLogos={true}
								hasAnimation={true}
							/>
							<HighDynamicContrast />
							<CinemaQuality />\
							<FullWidthVideo
								heading='Boom, Boom'
								hasAnimation={true}
								videoSrc='/assets/uledx-assets/videos/boom.mp4'
								poster='/assets/uledx-assets/videos/boom-poster@3x.webp'
							/>
							<CineStageX />
							<TechnicalSpecs />
							<CompareLineup />
						</>
					)}
				</main>
			</ParallaxProvider>
			<L9GProductDetailsBox
				data={{
					...data,
					id: 0,
					name: 'L9GProductDetailsBox',
					structure: {
						...data.structure,
						title: {
							...data.structure.title,
							value: "Now, here's the technical bit..."
						}
					}
				}}
				pim={pim}
			/>
		</>
	)
}

export default ULEDXFullPageComponent

import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/DynamicDisplay.module.scss'
import FeatureCard from '../FeatureCard/'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import ProductDetail from './ProductDetail/'
import dynamic from 'next/dynamic'

const DynamicDisplay = () => {
	const [ref, inView] = useInView()
	const isMobileTablet = useMediaQuery({ query: '(max-width: 768px)' })

	const cards = [
		{
			background: 'assets/uledx-assets/images/cards/billions-of-colors@3x.webp',
			title: 'Quantum color.',
			copy: 'A billion plus colors to fawn over.'
		},
		{
			background: 'assets/uledx-assets/images/cards/scene-by-scene@3x.webp',
			title: 'Scene-by-scene PQ',
			copy: 'Intuitively optimizing PQ every scene',
			video: {
				src: 'assets/uledx-assets/videos/succession-pq.mp4'
			}
		}
	]

	const features = [
		{
			title: 'Ultra Wide viewing angle',
			copy: 'No bad seats allowed'
		},
		{
			title: 'Anti-glare screen',
			copy: 'Low reflection panel'
		}
	]

	return (
		<section className={clsx(styles.dynamicDisplay)}>
			<div className={clsx(styles.wrapper)}>
				<div className={clsx('container')}>
					{/* Heading and intro */}
					<div className={clsx('row')}>
						<div className={clsx('col-12 col-xl-10')}>
							<p className={'preheader'} style={{ color: '#d5b879' }}>
								DISPLAY TECHNOLOGY
							</p>
							<h2>
								Dynamic X <br className={clsx('d-sm-none')} /> Display
							</h2>
						</div>
						<div className={clsx('col-12 col-lg-10 col-xl-7', styles.intro)}>
							<p style={{ color: '#c9c8c8', fontWeight: 300 }}>
								Packed with technology that brings an undeniable level of
								vibrance, color, and detail — the Dynamic X Display on the ULED
								X delivers dreamy image quality at any angle and under any light
								condition. A symphony of picture enhancing features that deliver
								the perfect picture any time, any place.
							</p>
						</div>
					</div>

					{/* Product details */}
					<ProductDetail />

					{/* Large gradient copy */}
					<div className={clsx('row')}>
						<div
							className={clsx('col-12 col-xl-10', styles.gradientCopyWrapper)}>
							<p ref={ref} className={clsx(styles.gradientCopy)}>
								<span
									className={clsx(
										styles.gradientCopyOne,
										inView ? 'fadeIn' : null
									)}
									style={{ animationDelay: '.25s' }}>
									4k
								</span>
								<br />

								<span
									className={clsx(
										styles.gradientCopyTwo,
										inView ? 'fadeIn' : null
									)}
									style={{ animationDelay: '.50s' }}>
									Billions
									<br />
									of colors
								</span>
								<br />

								<span
									className={clsx(
										styles.gradientCopyThree,
										inView ? 'fadeIn' : null
									)}
									style={{ animationDelay: '.75s' }}>
									Anti-glare
								</span>
								<br />

								<span
									className={clsx(
										styles.gradientCopyFour,
										inView ? 'fadeIn' : null
									)}
									style={{ animationDelay: '1s' }}>
									Wide viewing
								</span>
								<br />

								<span
									className={clsx(
										styles.gradientCopyFive,
										inView ? 'fadeIn' : null
									)}
									style={{ animationDelay: '1.25s' }}>
									Intuitive auto PQ
								</span>
							</p>
						</div>
					</div>

					{/* Cards */}
					<div className={clsx('row')}>
						<div className={clsx('col-12', styles.cardWrapper)}>
							{cards.map((card, index) => {
								return isMobileTablet ? (
									<FeatureCard
										key={`${card.title}-mobile`}
										background={card.background}
										title={card.title}
										copy={card.copy}
										video={card.video}
										titleAlt={index === 0}
									/>
								) : (
									<Parallax speed={index ? 10 : -10} key={card.copy}>
										<FeatureCard
											background={card.background}
											title={card.title}
											copy={card.copy}
											video={card.video}
											titleAlt={index === 0}
										/>
									</Parallax>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default dynamic(() => Promise.resolve(DynamicDisplay), { ssr: false })

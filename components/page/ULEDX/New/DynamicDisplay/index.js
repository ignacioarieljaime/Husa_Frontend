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
			title: 'Color us crazy.',
			copy: 'A billion plus colors to fawn over.'
		},
		{
			background: 'assets/uledx-assets/images/cards/scene-by-scene@3x.webp',
			title: 'Scene-by-scene PQ',
			copy: 'Intuitively optimizing PQ every scene'
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
								Always keep a cinema-level experience on hand with Hisense’s
								Dynamic X-Display. A symphony of picture enhancing features that
								deliver the perfect picture any time, any place.
							</p>
						</div>
					</div>

					{/* Product details */}
					<ProductDetail />

					{/* Large gradient copy */}
					<div className={clsx('row')}>
						<div
							className={clsx('col-12 col-xl-10', styles.gradientCopyWrapper)}>
							<p
								ref={ref}
								className={clsx(styles.gradientCopy, inView ? 'fadeIn' : null)}>
								4k <br />
								Billions
								<br /> of colors <br />
								Anti-glare <br />
								Wide viewing <br />
								Intuitive auto PQ
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
									/>
								) : (
									<Parallax speed={index ? 10 : -10} key={card.copy}>
										<FeatureCard
											background={card.background}
											title={card.title}
											copy={card.title}
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

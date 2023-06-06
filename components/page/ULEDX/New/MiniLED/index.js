import React, { useEffect } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import styles from 'styles/components/modules/ULEDX/MiniLED.module.scss'
import clsx from 'clsx'
import productImg from 'public/assets/uledx-assets/images/product/king-mini-tv@3x.webp'

const MiniLED = () => {
	const [ref, inView] = useInView({
		threshold: 0.8
	})

	return (
		<section className={clsx(styles.miniLed)}>
			<ParallaxBanner
				layers={[
					{
						image:
							'/assets/uledx-assets/images/backgrounds/mini-wave-background.png',
						speed: -10,
						opacity: [0.5, 1]
					}
				]}
				className={clsx(styles.parallax)}>
				<div className={clsx('container', styles.content)}>
					<div className={clsx('row')}>
						<div className={clsx('col', 'col-lg-7')}>
							<p className={'preheader'} style={{ color: '#d5b879' }}>
								The King of Mini-Led
							</p>
							<h2>
								More than your everyday <br /> MINI-LED TV
							</h2>
						</div>
						<div className={clsx('col', 'col-12', 'col-lg-9')}>
							<img
								src={productImg.src}
								alt=''
								className={clsx(styles.productImage)}
							/>
						</div>
					</div>
				</div>
			</ParallaxBanner>

			<div className={clsx('container', styles.content)}>
				<div className={clsx('row')}>
					<div className={clsx('col', 'col-12', 'col-lg-9')}>
						<p className={clsx('p--large', styles.copy)} ref={ref}>
							The{' '}
							<span className={inView ? styles.textAnimate : null}>ULED X</span>{' '}
							is an entirely new class of QLED. Powered by a groundbreaking
							chipset & our{' '}
							<span
								className={inView ? styles.textAnimate : null}
								style={{ animationDelay: '1s' }}>
								MINI-LED X
							</span>{' '}
							technology, the new ULED X brings together outrageous performance,
							superior contrast, best-in-class brightness, and brilliant color
							accuracy into the{' '}
							<span
								className={inView ? styles.textAnimate : null}
								style={{ animationDelay: '2s' }}>
								ultimate MINI-LED home entertainment solution
							</span>
							.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MiniLED

import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/ProductHero.module.scss'
import hisenseLogo from 'public/assets/uledx-assets/images/hero/hisense.svg'
import productLogo from 'public/assets/uledx-assets/images/hero/uled@3x.webp'
import productImage from 'public/assets/uledx-assets/images/product/slide-tv-frame@3x.webp'
import tvGraphic from 'public/assets/uledx-assets/images/hero/hero-background.png'

gsap.registerPlugin(ScrollTrigger)

const ProductHero = () => {
	const main = useRef()
	const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

	useLayoutEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: main.current,
				start: 0,
				end: isMobile ? '100px' : '25%',
				scrub: 4,
				pin: true
				//markers: true
			}
		})

		tl.to('.tv', { opacity: 0, duration: 1.5 }, 'start')
		tl.to('.graphic', { scale: 3.5, duration: 4 }, 'start')
		tl.from('.dividerLine', { height: '0', opacity: 0 })
		tl.set('.dividerLine', {
			height: 'auto',
			opacity: 1,
			css: { borderColor: 'transparent' },
			duration: 5
		})

		return () => tl.revert()
	}, [])

	return (
		<>
			<section className={clsx(styles.hero)} ref={main}>
				<div className={clsx('container mt-8 mt-md-0')}>
					<div className={clsx('row')}>
						<div className={clsx('col', styles.heroWrapper)}>
							{/* background images */}
							<div className={clsx(styles.animations)}>
								<img
									src={tvGraphic.src}
									width={720}
									height={435}
									alt=''
									className={clsx('graphic', styles.graphic)}
								/>
								<img
									src={productImage.src}
									width={720}
									height={435}
									alt=''
									className={clsx('tv', styles.tv)}
								/>
							</div>

							{/* content */}
							<div className={styles.heroContent}>
								<img
									src={hisenseLogo.src}
									width={150}
									height={24}
									alt='Hisense'
									className={clsx(styles.logo)}
								/>

								<img
									src={productLogo.src}
									width={352}
									height={77}
									alt='Uled X'
									className={clsx(styles.uled)}
								/>

								<p className={clsx('mb-3')}>Limited Release</p>
								<div className={clsx(styles.fakeCta)}>MINI-LED</div>
								<p className={clsx(styles.decorative)}>85UX</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className={clsx(styles.line, 'dividerLine')} />
		</>
	)
}

export default ProductHero

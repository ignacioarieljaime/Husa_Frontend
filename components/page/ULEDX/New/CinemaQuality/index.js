import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/CinemaQuality.module.scss'
import { Parallax } from 'react-scroll-parallax'
import imaxIcon from 'public/assets/uledx-assets/images/icons/imax@3x.webp'
import filmIcon from 'public/assets/uledx-assets/images/icons/filmmaker-mode@3x.webp'
import productImage from 'public/assets/uledx-assets/images/product/cinema-quality@3x.webp'
import { ParallaxBanner, useParallax } from 'react-scroll-parallax'

const CinemaQuality = ({}) => {
	const parallax = useParallax({
		opacity: [0, 2]
	})

	const features = [
		{
			icon: imaxIcon,
			iconAlt: 'IMAX Enhanced',
			copy: 'The U6H generates up to 600-nits peak brightness. What the heck does that mean?  Well, we won’t try to explain what a “nit” is here, but for reference...the average TV is around 250-350 nits. The U6H can give you almost double the brightness.'
		},
		{
			icon: filmIcon,
			iconAlt: 'Filmmaker Mode',
			copy: 'The U6 series has brightness control across up-to-48 local dimming zones. Local dimming, in combination with peak brightness are critical to correctly reproducing HDR content.'
		}
	]

	return (
		<section className={clsx(styles.cinemaQuality)}>
			<div className={clsx('container')}>
				<div className={clsx('row d-flex justify-content-center')}>
					<div className={clsx('col', 'col-md-8 col-lg-9')}>
						<h2>
							The ultimate movie going experience - <span>from home</span>.
						</h2>
					</div>
				</div>
			</div>

			<div className={styles.inner}>
				<div className={clsx(styles.productWrapper)}>
					<div className={clsx('col-lg-6')} ref={parallax.ref}>
						<img src={productImage.src} alt='HiSense ULED X MINI-LED 85UX' />
					</div>
				</div>

				<div className={styles.content}>
					<div className={clsx('container')}>
						<div
							className={clsx(
								'row d-flex justify-content-md-center justify-content-lg-end'
							)}>
							<div
								className={clsx(
									'col-12 col-md-8 col-lg-6',
									styles.featureWrapper
								)}>
								{features.map(feature => {
									return (
										<div key={feature.copy} className={clsx(styles.feature)}>
											<img
												src={feature.icon.src}
												alt={feature.iconAlt}
												width={181}
												height={101}
											/>
											<p className='p--small'> {feature.copy}</p>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CinemaQuality

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
			copy: 'IMAX Enhanced offers the most immersive viewing experience outside of a theatre by bringing together best-in-class certified devices, remastered content and elevated streaming. Get more of what you love about IMAX on the biggest streaming platforms worldwide.'
		},
		{
			icon: filmIcon,
			iconAlt: 'Filmmaker Mode',
			copy: 'By disabling all post-processing (e.g. motion smoothing) and preserving the correct aspect ratios, colors and frame rates, Filmmaker Mode enables your TV to display the movie or television show’s content precisely as it was intended by the filmmaker.'
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
								{features.map((feature, index) => {
									return (
										<div key={feature.copy} className={clsx(styles.feature)}>
											<img
												src={feature.icon.src}
												alt={feature.iconAlt}
												width={181}
												height={index > 0 ? 101 : 60}
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

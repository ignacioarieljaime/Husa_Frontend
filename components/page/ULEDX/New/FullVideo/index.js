import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/FullVideo.module.scss'

const FullWidthVideo = ({
	videoSrc,
	heading,
	hasAnimation,
	variant,
	poster,
	ariaLabel,
	preheader,
	subtext,
	showLogos
}) => {
	const [ref, inView] = useInView()
	let theme
	const shouldAnimate = inView && hasAnimation

	switch (variant) {
		case 'MarksTheSpot':
			theme = clsx(styles.content, styles.contentMark)
			break
		default:
			theme = clsx(styles.content)
	}

	const logos = [
		{
			logo: '/assets/uledx-assets/images/logos/dolby-logo@3x.webp',
			alt: 'Dolby Vision',
			width: 81,
			height: 30
		},
		{
			logo: '/assets/uledx-assets/images/logos/ALLM@3x.webp',
			alt: 'ALLM',
			width: 81,
			height: 22
		},
		{
			logo: '/assets/uledx-assets/images/logos/4k@3x.webp',
			alt: '4K 120Hz VRR',
			width: 74,
			height: 33
		},
		{
			logo: '/assets/uledx-assets/images/logos/freesync-premium-proe@3x.webp',
			alt: 'Free Sync Premium Pro',
			width: 68,
			height: 38
		},
		{
			logo: '/assets/uledx-assets/images/logos/game-mode-pro@3x.webp',
			alt: 'Game Mode Pro',
			width: 132,
			height: 35
		}
	]

	return (
		<section
			className={clsx(
				styles.videoWrapper,
				variant === 'MarksTheSpot' ? styles.paddingLarge : null,
				subtext && preheader ? styles.paddingSmall : null
			)}
			style={{ backgroundImage: !videoSrc ? `url(${poster})` : null }}>
			{videoSrc && (
				<video
					autoPlay
					muted
					loop
					className={clsx(styles.video)}
					poster={poster}
					preload='none'>
					<source src={videoSrc} type='video/mp4' />
				</video>
			)}

			<div className={clsx('container')}>
				<div
					className={clsx(
						'row d-flex justify-content-center',
						styles.contentWrapper
					)}>
					{preheader && (
						<div className={clsx('col-12 col-md-9 col-lg-7')}>
							<p
								className={clsx(
									'preheader',
									shouldAnimate ? 'fadeIn' : null,
									styles.preheader
								)}>
								{preheader}
							</p>
						</div>
					)}

					<div className={clsx('col-12', theme)}>
						<h2
							ref={ref}
							className={clsx(
								shouldAnimate ? 'fadeIn' : null,
								styles.heading,
								shouldAnimate ? styles.headingOpacity : null
							)}
							dangerouslySetInnerHTML={{ __html: heading }}
							aria-label={ariaLabel ? ariaLabel : null}
							style={{ animationDelay: preheader ? '.5s' : null }}
						/>
					</div>

					{subtext && (
						<div className={clsx('col-12 col-md-9 col-lg-7')}>
							<p
								className={clsx(
									styles.subText,
									shouldAnimate ? 'fadeIn' : null
								)}
								style={{ animationDelay: heading ? '1s' : null }}>
								{subtext}
							</p>
						</div>
					)}

					{showLogos && (
						<div
							className={clsx(
								'col-12 col-md-9 col-lg-7',
								styles.logoWrapper,
								shouldAnimate ? 'fadeIn' : null
							)}
							style={{ animationDelay: subtext ? '.75s' : null }}>
							{logos.map((logo, index) => {
								return (
									<div className={styles.logo} key={index}>
										<img
											src={logo.logo}
											width={logo.width}
											height={logo.height}
											alt={logo.alt}
										/>
									</div>
								)
							})}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default FullWidthVideo

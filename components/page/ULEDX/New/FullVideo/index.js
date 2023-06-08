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
	ariaLabel
}) => {
	const [ref, inView] = useInView()
	let theme

	switch (variant) {
		case 'MarksTheSpot':
			theme = clsx(styles.content, styles.contentMark)
			break
		default:
			theme = clsx(styles.content)
	}

	return (
		<section
			className={clsx(
				styles.videoWrapper,
				variant === 'MarksTheSpot' ? styles.paddingLarge : null
			)}>
			<video
				autoPlay
				muted
				loop
				className={clsx(styles.video)}
				poster={poster}
				preload='none'>
				<source src={videoSrc} type='video/mp4' />
			</video>

			<div className={clsx('container')}>
				<div className={clsx('row')}>
					<div className={clsx('col', theme)}>
						<h2
							ref={ref}
							className={clsx(
								inView && hasAnimation ? 'fadeIn' : null,
								styles.heading
							)}
							dangerouslySetInnerHTML={{ __html: heading }}
							aria-label={ariaLabel ? ariaLabel : null}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FullWidthVideo

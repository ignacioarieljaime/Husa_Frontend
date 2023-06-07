import React, { useRef, useEffect } from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/FeatureCard.module.scss'
import { useInView } from 'react-intersection-observer'

const FeatureCard = ({ background, title, copy, video }) => {
	const videoRef = useRef(null)
	const [ref, inView] = useInView({
		threshold: 0.5
	})

	useEffect(() => {
		let isScrolling

		const handleScroll = e => {
			if (videoRef.current) {
				// Clear our timeout throughout the scroll
				videoRef.current.play()
				window.clearTimeout(isScrolling)

				// Set a timeout to run after scrolling ends
				isScrolling = setTimeout(function () {
					videoRef.current.pause()
				}, 66)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [inView])

	return (
		<div
			className={clsx(styles.featureCard, video ? styles.videoWrapper : null)}
			style={{ backgroundImage: `url(${background})` }}
			ref={ref}>
			{video && (
				<video
					muted
					loop
					className={clsx(styles.video)}
					poster={video.poster}
					preload='none'
					ref={videoRef}>
					<source src={video.src} type='video/mp4' />
				</video>
			)}

			<div className={clsx(styles.content)}>
				<div>
					<h3 className={styles.contentHeading}>{title}</h3>
				</div>
				<div className={clsx(styles.contentBottom)}>
					<p className={clsx(styles.copy)}>{copy}</p>

					{/* does this open a modal... ? */}
					{/* <button
						className={clsx(styles.button, 'spin')}
						aria-label='Open'
						style={{ marginBottom: !copy ? '16px' : null }}></button> */}
				</div>
			</div>
		</div>
	)
}

export default FeatureCard

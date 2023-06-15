import React, { useRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/FeatureCard.module.scss'
import { useInView } from 'react-intersection-observer'
import ModalWrapper from '../ModalWrapper'

const FeatureCard = ({ background, title, titleAlt, copy, video, modal }) => {
	const videoRef = useRef(null)
	const [visible, setVisible] = useState(false)
	const handleClose = () => setVisible(false)
	const handleShow = () => setVisible(true)
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
		<>
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
						<h3
							className={styles.contentHeading}
							style={{ backgroundImage: titleAlt ? 'none' : null }}
							dangerouslySetInnerHTML={{ __html: title }}
						/>
					</div>
					<div className={clsx(styles.contentBottom)}>
						<p className={clsx(styles.copy)}>{copy}</p>

						{/* {modal && (
							<button
								className={clsx(styles.button, 'spin')}
								aria-label='Open'
								style={{ marginBottom: !copy ? '16px' : null }}
								onClick={() => handleShow()}></button>
						)} */}
					</div>
				</div>
			</div>
			{modal && (
				<ModalWrapper
					visible={visible}
					handleClose={handleClose}
					content={modal.content}
					backgroundImage={modal.background.src}
					backgroundMobile={modal.backgroundMobile?.src}
					backgroundMobileContain={modal.backgroundMobileContain}
				/>
			)}
		</>
	)
}

export default FeatureCard

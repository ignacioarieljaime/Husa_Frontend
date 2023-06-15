import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/TechFeatures.module.scss'
import FeatureCard from '../FeatureCard/'
import { Parallax } from 'react-scroll-parallax'
import snowflakeMobile from 'public/assets/uledx-assets/images/backgrounds/snowflake-mobile@2x.jpg'
import DayAndNight from './Modals/DayAndNight'
import DayAndNightBackground from 'public/assets/uledx-assets/images/modals/day-and-night@3x.webp'
import DayAndNightBackgroundMobile from 'public/assets/uledx-assets/images/modals/day-and-night-mobile@3x.webp'

const TechFeatures = ({ button }) => {
	const [ref, inView] = useInView()

	const cards = [
		{
			background: '/assets/uledx-assets/images/cards/led-lights@3x.webp',
			title: '20,000 MINI-LED Lights'
		},
		{
			background: '/assets/uledx-assets/images/cards/dimming-zones@3x.webp',
			title: '5000+ Local Dimming Zones',
			copy: 'Unmatched backlight control',
			video: {
				src: '/assets/uledx-assets/videos/dimming-zones.mp4',
				poster: '/assets/uledx-assets/images/cards/dimming-zones@3x.webp'
			}
		},
		{
			background: '/assets/uledx-assets/images/cards/peak-brightness@3x.webp',
			title: 'Peak Brightness 2500',
			copy: 'Shine bright inany room - day or night.',
			video: {
				src: '/assets/uledx-assets/videos/peak-brightness.mp4#t=1',
				poster: '/assets/uledx-assets/images/cards/peak-brightness@3x.webp'
			},
			modal: {
				content: <DayAndNight />,
				background: DayAndNightBackground,
				backgroundMobile: DayAndNightBackgroundMobile
			}
		},
		{
			background: '/assets/uledx-assets/images/cards/contrast-ratio@3x.webp',
			title: '150,000:1 contrast ratio',
			copy: 'X-treme black levels & highlights'
		}
	]

	return (
		<section className={clsx(styles.techFeatures)}>
			<div className={clsx('container')}>
				<div
					className={clsx('row d-flex justify-content-center', styles.intro)}>
					<div className={clsx('col', 'col-md-11 col-lg-9')}>
						<p className={'preheader'} style={{ color: '#d5b879' }}>
							PURE BACKLIGHT CONTROL
						</p>
						<h2>MINI-LED X</h2>
						<p className={clsx(styles.introCopy)}>
							Mini-LED X takes contrast & complete backlight control to a whole
							new level. With over 20,000 Mini-LEDs, up to 2500 Peak Brightness
							and over 5000 local dimming zones, you will experience the finest
							detail in both the brightest and darkest areas of the picture.
						</p>
					</div>
				</div>
				<div className={clsx('row', styles.snowflakeWrapper)}>
					<div className={clsx('col d-lg-none')}>
						<img
							src={snowflakeMobile.src}
							alt=''
							width={375}
							height={300}
							className={styles.snowflakeImageMobile}
						/>
					</div>
					<div className={clsx('col d-none d-lg-block')}>
						<Parallax translateY={[-20, 10]} scale={[1, 1.2]} speed={-20}>
							<img
								src='/assets/uledx-assets/images/backgrounds/snowflake@3x.webp'
								alt=''
								width={'100%'}
								loading='lazy'
							/>
						</Parallax>
					</div>
				</div>
				{/* Cards */}
				<div className={clsx('row d-flex justify-content-center')}>
					<div className={clsx('col-12 col-lg-10', styles.cardWrapper)}>
						{cards.map((card, index) => {
							return (
								<FeatureCard
									key={card.title}
									background={card.background}
									title={card.title}
									copy={card.copy}
									button={button}
									video={card.video}
									modal={card.modal}
								/>
							)
						})}
					</div>
				</div>
			</div>
			<div
				className={clsx(styles.line, inView ? styles.animateLine : null)}
				ref={ref}
			/>
		</section>
	)
}

export default TechFeatures

'use client'
import React from 'react'
import styles from 'styles/components/modules/ULEDX/DayAndNight.module.scss'
import Image from 'next/image'

const DayAndNight = () => {
	const icons = [
		{
			src: '/images/logos/dobly-vision-iq@3x.webp',
			width: 81,
			height: 29,
			alt: 'Dolby Vision IQ'
		},
		{
			src: '/images/logos/hdr@3x.webp',
			width: 106,
			height: 31,
			alt: 'HDR Adaptive'
		},
		{
			src: '/images/logos/adaptive-light@3x.webp',
			width: 117,
			height: 25,
			alt: 'Adaptive Light Sensor'
		}
	]

	return (
		<div className={styles.content}>
			<div className={styles.header}>
				<h2 id='heading'>
					Fit for{' '}
					<span>
						both day
						<br className='d-sm-none' /> and night
					</span>
				</h2>
				<div className={styles.icons}>
					{icons.map((icon, index) => {
						return (
							<div key={index}>
								<img
									src={icon.src}
									width={icon.width}
									height={icon.height}
									alt={icon.alt}
								/>
							</div>
						)
					})}
				</div>
			</div>

			<p className='p--med'>
				By monitoring the lighting conditions of the room, your TV automatically
				selects the best brightness viewing level. It makes sure that the blacks
				are as detailed at night and the whites are not washed out during the
				day.
			</p>
		</div>
	)
}

export default DayAndNight

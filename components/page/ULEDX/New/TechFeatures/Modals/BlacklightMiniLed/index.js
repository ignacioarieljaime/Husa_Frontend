'use client'
import React from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/BlacklightMiniLed.module.scss'

const BlacklightMiniLed = () => {
	// this modal is not currently being used
	const stats = [
		{
			num: '20,000',
			text: 'Mini-LED lights'
		},
		{
			num: '5,000+',
			text: 'Local Dimming Zones'
		},
		{
			num: '2,500',
			text: 'Peak Brightness'
		}
	]

	return (
		<div className={styles.content}>
			<h2 id='heading'>
				Backlight: <br className='d-sm-none' /> Mini-LED X
			</h2>
			<p className='p--med'>
				Take contrast to the final extreme with extreme brights and haunting
				blacks so detailed you can tell the shades apart, and all the fantastic
				details in between. Make out the arms of a snowflake, or the fuzz on a
				sweater, and every other detail you may have missed, for a picture that
				truly breaks the limits of reality with over 5,000 full array local
				dimming zones.
			</p>

			<div className={styles.statsWrapper}>
				{stats.map((stat, index) => {
					return (
						<div key={index} className={styles.stats}>
							<p className='p--med'>
								<span>{stat.num}</span> {stat.text}
							</p>
						</div>
					)
				})}
			</div>

			<p className={styles.disclaimer}>
				*Data varies by screen size. 5,000+ zones is the figure of 85" UX.
			</p>
		</div>
	)
}

export default BlacklightMiniLed

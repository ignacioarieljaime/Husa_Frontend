'use client'
import React from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/CompareLineup.module.scss'
import TechCard from './TechCard'

const CompareLineup = ({}) => {
	const cards = [
		{
			productImage: '/assets/uledx-assets/images/product/U6@3x.webp',
			title: '<span>U6</span> Series',
			series: ['55"', '65"', '75"'],
			link: 'https://www.hisense-usa.com/televisions/hisense-75-u6-series-mini-led-uled-4k-google-tv-(75u6k)'
		},
		{
			productImage: '/assets/uledx-assets/images/product/U7@3x.webp',
			title: '<span>U7</span> Series',
			series: ['55"', '65"', '75"', '85"'],
			link: 'https://www.hisense-usa.com/televisions/hisense-75-u7-series-mini-led-uled-4k-google-tv-(75u7k)'
		},
		{
			productImage: '/assets/uledx-assets/images/product/U8@3x.webp',
			title: '<span>U8</span> Series',
			series: ['55"', '65"', '75"', '85"', '100"'],
			link: 'https://www.hisense-usa.com/televisions/hisense-75-u8-series-mini-led-uled-4k-google-tv-(75u8k)'
		}
	]

	return (
		<section className={clsx(styles.compareLineup)}>
			<div className={clsx('container')}>
				<div className={clsx('row d-flex justify-content-center')}>
					<div
						className={clsx(
							'col-12 col-md-10 col-lg-8 col-xl-7',
							styles.content
						)}>
						<h2 className={styles.preHeader}>2023 MINI-LED LINEUP</h2>
						<h3>Still looking for the perfect Mini-LED TV for you?</h3>
						<p className={styles.subText}>Great options await.</p>
					</div>
				</div>
			</div>
			<div className={clsx('container')}>
				<div className={clsx('row')}>
					<div className={clsx('col', styles.cardWrapper)}>
						{cards.map(card => {
							return (
								<TechCard
									productImage={card.productImage}
									title={card.title}
									series={card.series}
									link={card.link}
									key={card.title}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default CompareLineup

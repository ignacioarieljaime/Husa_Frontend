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
			link: 'https://www.hisense-usa.com/televisions/75-u6-series-mini-led-uled-google-tv'
		},
		{
			productImage: '/assets/uledx-assets/images/product/U7@3x.webp',
			title: '<span>U7</span> Series',
			link: 'https://www.hisense-usa.com/televisions/75-u7-series-mini-led-uled-hisense-google-tv'
		},
		{
			productImage: '/assets/uledx-assets/images/product/U8@3x.webp',
			title: '<span>U8</span> Series',
			link: 'https://www.hisense-usa.com/televisions/hisense-75-mini-led-uled-4k-smart-google-tv'
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

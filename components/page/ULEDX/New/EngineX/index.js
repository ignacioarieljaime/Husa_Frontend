import React from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/EngineX.module.scss'
import Card from './Card/'

const EngineX = () => {
	const cards = [
		{
			icon: '/assets/uledx-assets/images/icons/picture-processing.svg',
			copy: 'AI Picture Processing'
		},
		{
			icon: '/assets/uledx-assets/images/icons/16-bit.svg',
			copy: '16-bit AI Mini-LED Light Management'
		},
		{
			icon: '/assets/uledx-assets/images/icons/chipset.svg',
			copy: 'Hisense self-developed 8107 chipset'
		}
	]

	return (
		<section className={clsx(styles.engineX)}>
			<div className={clsx('container')}>
				<div className={clsx('row')}>
					<div className={clsx('col col-md-9 col-xl-7', styles.copy)}>
						<p className={'preheader'} style={{ color: '#d5b879' }}>
							PROCESSING POWER
						</p>
						<h2>HI-VIEW Engine X</h2>
						<p style={{ color: '#c9c8c8', fontWeight: 300 }}>
							Elevate your viewing experience to new heights with Hisense's
							proprietary Hi-View Engine X — a 16-bit AI neural chipset that
							provides unmatched visual processing that can articulate up to
							65,536 brightness levels.
						</p>
					</div>
				</div>
				<div className={clsx('row')}>
					<div className={clsx('col', styles.cardWrapper)}>
						{cards.map((card, index) => {
							return (
								<Card
									key={card.copy}
									icon={card.icon}
									copy={card.copy}
									index={index}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default EngineX

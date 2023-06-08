import React from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/SpecCard.module.scss'

const SpecCard = ({
	background,
	title,
	percentageHeight = 110.5,
	index,
	align = 'bottom'
}) => {
	return (
		<div
			className={clsx(
				styles.specCard,
				(index + 1) % 2 === 0 ? styles.specCardEven : ''
			)}
			style={{ backgroundImage: `url(${background})` }}>
			<div
				className={clsx(styles.content)}
				style={{ paddingBottom: `${percentageHeight}%` }}>
				<h4
					className={clsx(
						styles.contentHeading,
						align === 'top' ? styles.contentHeadingTop : ''
					)}>
					{title}
				</h4>
			</div>
		</div>
	)
}

export default SpecCard

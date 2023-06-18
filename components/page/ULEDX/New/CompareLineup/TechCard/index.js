'use client'
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/TechCard.module.scss'

const TechCard = ({ productImage, title, link }) => {
	return (
		<div className={clsx(styles.techCard)}>
			<h2 className={clsx('preheader', styles.preHeader)}>MINI-LED</h2>
			<img
				src={productImage}
				alt='HiSense ULED X MINI-LED 85UX'
				width={220}
				height={141}
			/>
			<h3 dangerouslySetInnerHTML={{ __html: title }} />
			<p className={styles.subText}>55" 65" 75" 85"</p>
			<a href={link} className='button--rounded'>
				Explore
			</a>
		</div>
	)
}

export default TechCard

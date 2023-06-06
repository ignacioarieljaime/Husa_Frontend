import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/Card.module.scss'

const Card = ({ icon, copy, index }) => {
	const [ref, inView] = useInView()

	return (
		<div
			className={clsx(styles.cardWrapper, inView ? 'fadeIn' : null)}
			style={{ animationDelay: index == 1 ? '1s' : index == 2 ? '2s' : null }}
			ref={ref}>
			<img src={icon} width={97} height={97} alt='' />
			<p>{copy}</p>
		</div>
	)
}

export default Card

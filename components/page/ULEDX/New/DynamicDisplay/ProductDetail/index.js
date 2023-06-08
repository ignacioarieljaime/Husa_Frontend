import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/ProductDetail.module.scss'
import Image from 'next/image'
import productImg from 'public/assets/uledx-assets/images/product/dynamic-display-tv-desktop@3x.webp'

const ProductDetail = () => {
	const [first, setFirst] = useState(0)
	const [second, setSecond] = useState(0)
	const firstRef = useRef(first)
	const secondRef = useRef(second)

	const groupOne = [
		{
			title: 'Ultra Wide viewing angle',
			copy: 'No bad seats allowed'
		},
		{
			title: 'Quantum Dot Color',
			copy: 'Over a billion plus colors'
		},
		{
			title: '85-inch X Display',
			copy: ''
		}
	]

	const groupTwo = [
		{
			title: 'Anti-glare screen',
			copy: 'Low Reflection Panel'
		},
		{
			title: '4K Ultra HD',
			copy: '8.3 million pixels'
		}
	]

	useEffect(() => {
		let groupTwoTimeout
		const interval = setInterval(() => {
			const i = firstRef.current
			const num = i + 1 === groupOne.length ? 0 : i + 1
			setFirst(num)

			groupTwoTimeout = setTimeout(() => {
				const i = secondRef.current
				const num = i + 1 === groupTwo.length ? 0 : i + 1
				setSecond(num)
			}, 2000)
		}, 5000)

		return () => {
			clearInterval(interval)
			clearTimeout(groupTwoTimeout)
		}
	}, [])

	useEffect(() => {
		firstRef.current = first
		secondRef.current = second
	}, [first, second])

	return (
		<div className={clsx('row')}>
			<div className={clsx('col', styles.productWrapper)}>
				<div className={clsx(styles.featureWrapper)}>
					<div className={clsx(styles.feature)}>
						<p className={clsx(styles.featureTitle)}>
							<Fact key={`group-one-title-${first}`}>
								{groupOne[first].title}
							</Fact>
						</p>
						<p className={clsx(styles.featureCopy)}>
							<Fact key={`group-one-copy-${first}`}>
								{groupOne[first].copy}
							</Fact>
						</p>
					</div>
					<div className={clsx(styles.feature)}>
						<p className={clsx(styles.featureTitle)}>
							<Fact key={`group-two-title-${second}`}>
								{groupTwo[second].title}
							</Fact>
						</p>
						<p className={clsx(styles.featureCopy)}>
							<Fact key={`group-two-copy-${second}`}>
								{groupTwo[second].copy}
							</Fact>
						</p>
					</div>
				</div>
				<div className={clsx(styles.productImgWrapper)}>
					<img
						src={productImg.src}
						alt='HiSense ULED X MINI-LED 85UX'
						className={clsx(styles.productImg)}
					/>
				</div>
			</div>
		</div>
	)
}

const Fact = ({ children }) => (
	<span
		className='fadeIn'
		style={{ minHeight: '1em', display: 'inline-block' }}>
		{children}
	</span>
)

export default ProductDetail

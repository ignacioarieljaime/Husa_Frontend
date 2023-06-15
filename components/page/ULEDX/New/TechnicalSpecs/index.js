'use client'
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/TechnicalSpecs.module.scss'
import productImg from 'public/assets/uledx-assets/images/product/UX-Tatum-Product@3x.webp'

const TechnicalSpecs = ({}) => {
	return (
		<section className={clsx(styles.technicalSpecs)}>
			<div className={clsx('container')}>
				<div
					className={clsx(
						'row d-flex justify-content-center align-items-center'
					)}>
					<div className={clsx('col-12 col-md-6')}>
						<img
							src={productImg.src}
							alt='HiSense ULED X MINI-LED 85UX'
							width={'100%'}
						/>
					</div>
					<div className={clsx('col-12 col-md-6 col-lg-4', styles.content)}>
						<h2>Want to get technical?</h2>

						<a
							href='/assets/uledx-assets/pdf/2023 UX Spec Sheet_Release.pdf'
							target='_blank'
							className='button--rounded button--rounded-xl'
							aria-label='See Full Specs - opens a new  tab'>
							See full specs
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TechnicalSpecs

import React from 'react'
import Image from 'next/image'

import productLogo from 'public/assets/uledx-assets/images/header/Logo@3x.webp'
import styles from 'styles/components/modules/ULEDX/ProductHeader.module.scss'
import clsx from 'clsx'

const ProductHeader = ({ pin = false }) => {
	return (
		<header
			className={clsx(
				styles.productHeader,
				pin ? styles.productHeaderFixed : ''
			)}>
			<div className='container'>
				<div className='d-flex justify-content-between align-items-center'>
					<div>
						<img src={productLogo.src} width={178} alt='ULED X 85UX' />
					</div>

					<div>
						<nav className={styles.productHeaderNav}>
							<ul>
								<li
									className={clsx(
										styles.productHeaderNavItem,
										'd-none d-sm-flex'
									)}>
									<a href='#'>Overview</a>
								</li>
								<li
									className={clsx(
										styles.productHeaderNavItem,
										'd-none d-sm-flex'
									)}>
									<a href='#'>Specs</a>
								</li>
								<li
									className={clsx(
										styles.productHeaderNavItem,
										styles.productHeaderCta
									)}>
									<a href='#'>Buy Now</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

export default ProductHeader

import React from 'react'
import Image from 'next/image'

import productLogo from 'public/assets/uledx-assets/images/header/Logo@3x.webp'
import styles from 'styles/components/modules/ULEDX/ProductHeader.module.scss'
import clsx from 'clsx'
import ModalChanelAdviser from 'components/page/Product/ModalChanelAdviser'
import { useState } from 'react'

const ProductHeader = ({ pin = false, pim }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)

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
									<a href='#MiniLED'>Overview</a>
								</li>
								<li
									className={clsx(
										styles.productHeaderNavItem,
										'd-none d-sm-flex'
									)}>
									<a href='#L9GProductDetailsBox0'>Specs</a>
								</li>
								<li
									onClick={() => setChanelAdviserHandler(true)}
									disabled={
										pim?.buy_status === 'ChannelAdvisor' ||
										pim?.buy_status === 'Internal'
											? false
											: true
									}
									className={clsx(
										styles.productHeaderNavItem,
										styles.productHeaderCta
									)}>
									<button href='#'>Buy Now</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			{pim && (
				<ModalChanelAdviser
					product={pim}
					productId={pim.id}
					type={pim.buy_status}
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={pim?.model}
				/>
			)}
		</header>
	)
}

export default ProductHeader

'use client'
import React from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/BuyNow.module.scss'
import hisenseLogo from 'public/assets/uledx-assets/images/hero/hisense.svg'
import productLogo from 'public/assets/uledx-assets/images/hero/uled@3x.webp'
import productImage from 'public/assets/uledx-assets/images/product/slide-tv-frame@3x.webp'
import { useState } from 'react'

const BuyNow = ({ pim }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)

	return (
		<section className={clsx(styles.buyNow)}>
			<div className={clsx('container', styles.container)}>
				<div className={clsx('row')}>
					<div className={clsx('col', styles.buyNowWrapper)}>
						<div className={clsx('fadeIn', styles.buyNowContent)}>
							<img
								src={hisenseLogo.src}
								width={150}
								height={24}
								alt='Hisense'
								className={clsx(styles.logo)}
							/>

							<img
								src={productLogo.src}
								width={352}
								height={77}
								alt='Uled X'
								className={clsx(styles.uled)}
							/>

							<p className={clsx('mb-1')}>Limited Release</p>
							<div className={clsx(styles.ctaWrapper)}>
								<button
									onClick={() => setChanelAdviserHandler(true)}
									className={clsx(styles.cta)}>
									Buy Now
								</button>
							</div>
						</div>
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
		</section>
	)
}

export default BuyNow

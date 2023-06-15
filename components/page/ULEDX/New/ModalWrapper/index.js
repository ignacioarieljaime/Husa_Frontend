'use client'
import React from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/ModalWrapper.module.scss'
import ReactModal from 'react-modal'
import { useMediaQuery } from 'react-responsive'

ReactModal.setAppElement('body')

const ModalWrapper = ({
	content,
	visible,
	backgroundImage,
	backgroundMobile,
	backgroundMobileContain,
	...props
}) => {
	const isMobileTablet = useMediaQuery({ query: '(max-width: 768px)' })

	return (
		<ReactModal
			isOpen={visible}
			className={clsx(
				styles.modalWrapper,
				visible ? styles.slideInUp : styles.slideOutDown
			)}
			overlayClassName={styles.modalOverlay}
			onRequestClose={() => props.handleClose()}
			aria={{ labelledby: 'heading' }}
			closeTimeoutMS={700}>
			<div
				className={clsx(styles.modalContent)}
				style={{
					backgroundImage:
						isMobileTablet && backgroundMobile
							? `url(${backgroundMobile})`
							: backgroundImage
							? `url(${backgroundImage})`
							: null,
					backgroundSize:
						isMobileTablet && backgroundMobileContain ? 'contain' : null
				}}>
				<div className={clsx('row')}>
					<div className={clsx('col')}>{content}</div>
				</div>
				<button
					onClick={() => props.handleClose()}
					aria-label='Close'
					className={styles.modalCloseButton}></button>
			</div>
		</ReactModal>
	)
}

export default ModalWrapper

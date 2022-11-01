import React from 'react'

const ExtendedWarrantyModelNumberDialog = ({ product, image, onClose }) => {
	return (
		<div className='extended-warranty-dialog'>
			<div
				className='extended-warranty-dialog-backdrop'
				onClick={onClose}></div>
			<div className='extended-warranty-dialog-content'>
				<div className='title'>
					Locate Your
					<br /> Model Number
				</div>
				<div className='image-container'>
					<img src={Image?.src} alt={image?.alt} width='100%' />
				</div>
				<p className='description'>{product}</p>
			</div>
		</div>
	)
}

export default ExtendedWarrantyModelNumberDialog

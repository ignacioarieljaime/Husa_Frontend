import React from 'react'
import Image from "public/assets/images/where_is_serial_number.jpg"

const ExtendedWarrantyModelNumberDialog = ({ product, onClose }) => {
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
					<img src={Image?.src} alt={"serial"} />
				</div>
				{/*<p className='description'>{product}</p>*/}
			</div>
		</div>
	)
}

export default ExtendedWarrantyModelNumberDialog

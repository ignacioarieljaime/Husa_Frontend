import React from 'react'
import Image from 'public/assets/images/where_is_serial_number.jpg'

const FirmwareBannerModelNumberDialog = ({ text, onClose }) => {
	return (
		<div className='extended-warranty-dialog'>
			<div
				className='extended-warranty-dialog-backdrop'
				onClick={onClose}></div>
			<div className='extended-warranty-dialog-content firmware_modal_content'>
				<article className='small_article'>
					<div
						dangerouslySetInnerHTML={{
							__html: text
						}}></div>
				</article>
			</div>
		</div>
	)
}

export default FirmwareBannerModelNumberDialog

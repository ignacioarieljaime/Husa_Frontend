import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideClick from 'hooks/useOutsideClick'
import React, { useRef } from 'react'

function RoleModal({ modalHandler, data }) {
	const modal = useRef()
	const outSide = useOutsideClick(modal)
	return (
		<div
			onClick={() => outSide && modalHandler(false)}
			className='modal d-block '
			tabIndex='2000'
			role='dialog'>
			<div
				ref={modal}
				className='modal-dialog modal-dialog-centered modal-lg'
				role='document'>
				<div className='modal-content border-0 bg-white p-6 d-block serial-number-modal'>
					<button
						className='btn modal-close-btn'
						type='button'
						data-dismiss='modal'
						onClick={() => modalHandler(false)}
						aria-label='Close'>
						<FontAwesomeIcon icon={faXmark} />
					</button>
					<div dangerouslySetInnerHTML={{ __html: data }}></div>
				</div>
			</div>
		</div>
	)
}

export default RoleModal

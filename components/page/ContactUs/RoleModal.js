import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideClick from 'hooks/useOutsideClick'
import React, { useRef, useState, useEffect } from 'react'

function RoleModal({ modalHandler, data, greenText, extra }) {
	const modal = useRef()
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(data)
	}, [])
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
					<div>
						<div
							dangerouslySetInnerHTML={
								extra ? { __html: text + extra } : { __html: text }
							}></div>
						{greenText && (
							<p style={{ color: '#009c9b' }}>
								<strong style={{ fontWeight: '500' }}>
									Split AC & Heat Pump:
								</strong>
								<span style={{ marginLeft: '10px' }}>
									Side of outdoor unit​
								</span>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default RoleModal

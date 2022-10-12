import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideClick from 'hooks/useOutsideClick'
import React, { useRef } from 'react'

function RoleModal({ modalHandler }) {
	const modal = useRef()
	const outSide = useOutsideClick(modal)
	return (
		<div
			onClick={() => outSide && modalHandler(false)}
			className='modal d-block '
			tabindex='2000'
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
						<h3>we know those suckers can be hard to find</h3>
						<p>
							Check this list for the general location of your model number
							sticker. If youre still stumped, contact us and well sort you out.
						</p>
						<ul>
							<li>television</li>
							<li>Back of the unit</li>
							<li>wine cooler</li>
							<li>Back of the unit</li>
							<li>compact refrigeration</li>
							<li>Back of the unit</li>
							<li>chest freezer</li>
							<li>Back of the unit</li>
							<li>full size refrigeration</li>
							<li>Back of the unit</li>
							<li>portable AC</li>
							<li>Left side of the unit</li>
							<li>beverage chiller</li>
							<li>Back of the unit</li>
							<li>dehumidifier</li>
							<li>Back of the unit</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RoleModal

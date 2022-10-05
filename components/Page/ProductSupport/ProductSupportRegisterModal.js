import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideClick from './../../../hooks/useOutsideClick'
import React, { useRef } from 'react'

function ProductSupportRegisterModal({ handler }) {
	const modal = useRef(false)
	let outside = useOutsideClick(modal)
	return (
		<div
			onClick={() => outside && handler(false)}
			style={{ background: 'rgba($color: #000000, $alpha: 0.3)' }}
			className='modal fade show d-block'
			id='serial-numbers-1'
			tabindex='-1'
			role='dialog'
			aria-labelledby='exampleModalLabel'>
			<div
				className='modal-dialog modal-dialog-centered modal-lg'
				role='document'
				ref={modal}>
				<div className='modal-content border-0 bg-white p-6 d-block serial-number-modal'>
					<button
						className='btn modal-close-btn'
						onClick={() => handler(false)}
						type='button'
						data-dismiss='modal'
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

export default ProductSupportRegisterModal

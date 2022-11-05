import React, { useRef } from 'react'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExtendedWarrantyFileInput = ({
	label,
	boxContent,
	onChange,
	modalOnClick,
	id,
	name
}) => {
	const inputRef = useRef(null)

	return (
		<div className='extended-warranty-file-input'>
			<div className='d-flex justify-content-start align-items-start align-items-md-center flex-column flex-md-row p-4'>
				<label>{label}</label>
				{modalOnClick && (
					<button
						className='n-btn modal-btn ms-0 ms-md-3 mt-3 mt-md-0'
						type='button'
						onClick={modalOnClick}>
						<FontAwesomeIcon icon={faCircleInfo} className='me-2' size='xl' />
						Where do i find my model number?
					</button>
				)}
			</div>
			<div className='input' onClick={() => inputRef.current.click()}>
				<div className='content'>{boxContent}</div>
				<input
					type='file'
					ref={inputRef}
					onChange={e => {
						const file = e.target.files && e.target.files[0]
						file.type.startsWith('image') &&
							onChange({
								id: id,
								asset: e.target.files && e.target.files[0],
								name: name
							})
					}}
				/>
			</div>
		</div>
	)
}

export default ExtendedWarrantyFileInput

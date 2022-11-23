import React, { useRef } from 'react'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from '../../common/Spinner'

const ExtendedWarrantyFileInput = ({
																		 label,
																		 boxContent,
																		 onChange,
																		 modalOnClick,
																		 id,
																		 name,
																		 value, loading
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
			<div
				className={`input ${value === '' ? '' : 'activated'}`}
				onClick={() => inputRef.current.click()}>
				{
					loading === name && <div className={'position-absolute top-50 '}
																	 style={{ left: '50%', transform: 'translate(-50%,-50%)', zIndex: '2' }}>
						<Spinner size={30} />
					</div>
				}
				<div className='content'>
					{value === '' ? boxContent : 'Image Uploaded'}
				</div>
				<input
					type='file'
					ref={inputRef}
					onChange={e => {
						const file = e.target.files && e.target.files[0]
						file?.type.startsWith('image') &&
						onChange(name, {
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

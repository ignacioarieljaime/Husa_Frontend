import React, { useRef, useState } from 'react'
import { faCircleInfo, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from '../../common/Spinner'

const ExtendedWarrantyFileInput = ({
	label,
	boxContent,
	onChange,
	modalOnClick,
	id,
	name,
	value,
	loading
}) => {
	const inputRef = useRef(null)
	const [file, setFile] = useState()

	const clearField = () => {
		onChange(
			name,
			{
				id: id,
				asset: '',
				name: name
			},
			true
		)
		setFile('')
	}

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
				className={`input ${!value || value === '' ? '' : 'activated'}`}
				onClick={() => inputRef.current.click()}>
				{loading === name && (
					<div
						className={'position-absolute top-50 '}
						style={{
							left: '50%',
							transform: 'translate(-50%,-50%)',
							zIndex: '2'
						}}>
						<Spinner size={30} />
					</div>
				)}
				<div className='content'>
					<div>{!value || value === '' ? boxContent : 'Image Uploaded'}</div>
					{file?.name && loading !== name && (
						<div
							className='file-delete'
							onClick={e => {
								e.stopPropagation()
								clearField()
							}}>
							<FontAwesomeIcon icon={faXmarkCircle} className='me-2' />
							{file?.name}
						</div>
					)}
				</div>
				<input
					type='file'
					ref={inputRef}
					onChange={e => {
						const file = e.target.files && e.target.files[0]
						if (file?.type.startsWith('image')) {
							onChange(name, {
								id: id,
								asset: e.target.files && e.target.files[0],
								name: name
							})
							setFile(e.target.files && e.target.files[0])
						}
					}}
				/>
			</div>
		</div>
	)
}

export default ExtendedWarrantyFileInput

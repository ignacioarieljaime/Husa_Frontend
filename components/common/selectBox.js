import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function CustomSelectBox({
	required = false,
	title,
	options,
	onChange,
	className = ''
}) {
	const [value, setValue] = useState(title)
	return (
		<div className={`custom-select-box ${className}`}>
			<div
				className={`form-container-inner-input select-container ${className}`}
				tabIndex='1'>
				<div className={`select-box-item ${className}`}>
					<input
						className='input'
						type='radio'
						id='product'
						value='1'
						name='product'
						checked='checked'
						disabled
					/>
					<p
						className={`input-text d-flex align-items-center justify-content-between ${className}`}>
						{options === 'loading' ? (
							'loading ...'
						) : (
							<>
								{value}
								<FontAwesomeIcon
									style={{ width: '10px' }}
									icon={faChevronDown}
									size={'1x'}
								/>
							</>
						)}
					</p>
				</div>
			</div>
			<ul className='select-box-list top-100 w-100'>
				{options && Array.isArray(options) ? (
					<>
						{options.length === 0 ? (
							<li>empty</li>
						) : (
							options.map((item, index) => (
								<li
									onClick={() => {
										onChange(item)
										setValue(item?.name)
									}}
									key={index}>
									<label
										className='option'
										htmlFor='tv'
										aria-hidden='aria-hidden'>
										{item?.name}
									</label>
								</li>
							))
						)}
					</>
				) : null}
			</ul>
			{required && <span className='input-error'>This field is required.</span>}
		</div>
	)
}

export default CustomSelectBox

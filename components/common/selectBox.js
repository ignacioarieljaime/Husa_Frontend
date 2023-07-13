import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useEffect } from 'react'

function CustomSelectBox({
	required = false,
	title,
	options,
	onChange,
	className = '',
	isSearchable,
	placeholder,
	rightText
}) {
	const [value, setValue] = useState()
	useEffect(() => {
		setValue(title)
	}, [title])

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
					{isSearchable && options !== 'loading' ? (
						<div className='search_box__arrow'>
							<input
								placeholder={placeholder}
								onInput={e => setInputSearch(e.target.value)}
								onBlur={() =>
									setTimeout(() => {
										optionBox.current.style.opacity = '0'
										optionBox.current.style.animation = 'HideList'
									}, 200)
								}
								value={inputSearch}
								onFocus={() => {
									optionBox.current.style.opacity = '1'
									optionBox.current.style.animation = 'none'
								}}
							/>
							{rightText && <span>{rightText}</span>}

							<FontAwesomeIcon
								style={{ width: '10px' }}
								icon={faChevronDown}
								size={'1x'}
							/>
						</div>
					) : (
						<p
							className={`input-text d-flex align-items-center justify-content-between ${className}`}>
							{options === 'loading' ? (
								'loading ...'
							) : (
								<>
									{value}
									{rightText && <span>{rightText}</span>}
									<FontAwesomeIcon
										style={{ width: '10px' }}
										icon={faChevronDown}
										size={'1x'}
									/>
								</>
							)}
						</p>
					)}
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

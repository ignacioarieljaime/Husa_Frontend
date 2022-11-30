import React, { useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomCheckBox from './CustomCheckBox'

const DropDownSelectBox = ({ options, value, title, onChange }) => {
	const [show, setShow] = useState(false)

	const newValueHandler = newValue => {
		if (Array.isArray(value)) {
			if (value.some(item => item.value === newValue.value)) {
				let index = value.indexOf(newValue)
				let tempArr = value.splice(index, 1)
				onChange([...tempArr])
			} else {
				onChange([...value, newValue])
			}
		} else {
			onChange(newValue)
			setShow(false)
		}
	}

	return (
		<div className={`dropdown-select-box ${show ? 'show' : ''}`}>
			<button
				className='dropdown-select-box-button'
				type='button'
				onClick={() => setShow(!show)}>
				{title && title + ': '}
				{typeof value === 'string'
					? value
					: value?.name
					? value.name
					: options[0].name}
				<span className='ms-5'>
					<FontAwesomeIcon icon={faChevronDown} />
				</span>
			</button>
			{show && (
				<div className='dropdown-select-box-options'>
					<ul>
						{options?.map((option, index) => {
							return (
								<li key={index} onClick={() => newValueHandler(option)}>
									{Array.isArray(value) ? (
										<CustomCheckBox
											checked={value.some(item => item.id === option.id)}
											className='me-3'
										/>
									) : (
										''
									)}
									{typeof option === 'string' ? option : option.name}
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</div>
	)
}

export default DropDownSelectBox

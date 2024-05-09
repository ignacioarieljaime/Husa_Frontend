import { string } from 'joi'
import React, { useState } from 'react'
import { faChevronDown, faCalendar, faCalendarDay, faCalendarWeek, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomInput({
	placeholder,
	disabled = false,
	required = false,
	className,
	type = 'text',
	defaultValue,
	onChange,
	value,
	onFocus,
	onBlur,
	rightText
}) {
	const convertData = (_date, _reverse) => {
		let array = _date.split('-')
		if (_reverse) {
			return `${array[1]}-${array[2]}-${array[0]}`
		}
		return `${array[2]}-${array[0]}-${array[1]}`
	}

	const typeEnglishHandler = e => {
		let _value = e.target.value
		if (!isNaN(Number(_value))) return onChange(_value)
	}

	if (type === 'date') {
		return (
			<div className='position-relative'>
				<span
					className="date-placeholder"
					style={{
							position: 'absolute',
							background: 'white',
					}}>
					{value || (
							<>
									<FontAwesomeIcon
											style={{ width: '15px',marginRight:"5px" }}
											icon={faCalendarAlt}
											size={'2x'}
									/>
									Purchased Date
							</>
					)}
				</span>
				<input
					disabled={disabled}
					type={type}
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={e => {
						onChange(convertData(e.target.value, 'revers'))
					}}
					className={`form-control form-container-inner-input ${className}`}
					placeholder={placeholder}
					required={required}
					defaultValue={defaultValue && defaultValue}
					value={value && convertData(value)}
				/>
				{required && (
					<span className='input-error'>This field is required.</span>
				)}
			</div>
		)
	}
	return (
		<div className={`field ${rightText ? 'taller_field' : ''}`}>
			<input
				disabled={disabled}
				type={type === 'number' ? 'text' : type}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={e =>
					type === 'number' ? typeEnglishHandler(e) : onChange(e.target.value)
				}
				className={`form-container-inner-input ${className}`}
				placeholder={placeholder}
				required={required}
				defaultValue={defaultValue && defaultValue}
				value={value && value}
			/>
			{rightText && <span className='right_text'>{rightText}</span>}{' '}
			{required && <span className='input-error'>This field is required.</span>}
		</div>
	)
}

export default React.memo(CustomInput)

import React, { useState } from 'react'

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
	onBlur
}) {
	const convertData = _date => {
		let array = _date.split('-')
		return `${array[1]}-${array[2]}-${array[0]}`
	}
	if (type === 'date') {
		return (
			<div className='position-relative'>
				<span
					style={{
						position: 'absolute',
						left: 0,
						top: '3px',
						background: 'white',
						padding: '5px 20px'
					}}>
					{value || 'MM-DD-YYYY'}
				</span>
				<input
					disabled={disabled}
					type={type}
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={e => {
						onChange(convertData(e.target.value))
					}}
					className={`form-container-inner-input ${className}`}
					placeholder={placeholder}
					required={required}
					defaultValue={defaultValue && defaultValue}
					value={value && value}
				/>
				{required && (
					<span className='input-error'>This field is required.</span>
				)}
			</div>
		)
	}
	return (
		<div>
			<input
				disabled={disabled}
				type={type}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={e => onChange(e.target.value)}
				className={`form-container-inner-input ${className}`}
				placeholder={placeholder}
				required={required}
				defaultValue={defaultValue && defaultValue}
				value={value && value}
			/>
			{required && <span className='input-error'>This field is required.</span>}
		</div>
	)
}

export default React.memo(CustomInput)

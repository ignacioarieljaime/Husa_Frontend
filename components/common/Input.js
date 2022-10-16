import React from 'react'

function CustomInput({
	placeholder,
	required = false,
	className,
	type = 'text'
}) {
	return (
		<div>
			<input
				type={type}
				className={`form-container-inner-input ${className}`}
				placeholder={placeholder}
				required={required}
			/>
			{required && <span className='input-error'>This field is required.</span>}
		</div>
	)
}

export default CustomInput

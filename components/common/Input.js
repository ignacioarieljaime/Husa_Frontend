import React from 'react'

function CustomInput({ placeholder, required = false }) {
	return (
		<div>
			<input
				type='text'
				className='form-container-inner-input'
				placeholder={placeholder}
				required={required}
			/>
			{required && <span className='input-error'>This field is required.</span>}
		</div>
	)
}

export default CustomInput

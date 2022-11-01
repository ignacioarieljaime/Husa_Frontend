import React, { useRef } from 'react'

const RadioCheckBox = ({ label, onChange, checked }) => {
	const inputRef = useRef(null)

	return (
		<div className='radio-checkbox'>
			<div
				className={`checkbox ${checked ? 'checked' : ''}`}
				onClick={() => inputRef.current.click()}>
				<input
					type='checkbox'
					ref={inputRef}
					value={checked}
					onChange={() => onChange(!checked)}
				/>
			</div>
			{label}
		</div>
	)
}

export default RadioCheckBox

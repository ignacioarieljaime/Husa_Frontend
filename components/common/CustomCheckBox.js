import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomCheckBox = ({ checked, className, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`custom-checkbox ${checked ? 'checked' : ''} ${className}`}>
			{checked && <FontAwesomeIcon icon={faCircleCheck} color={'#00A29C'} />}
		</button>
	)
}

export default CustomCheckBox

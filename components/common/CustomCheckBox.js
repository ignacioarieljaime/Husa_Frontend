import React from 'react'
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomCheckBox = ({ checked, className, onClick, square }) => {
	return (
		<button
			onClick={onClick}
			className={`custom-checkbox ${checked ? 'checked' : ''} ${
				square ? 'square' : ''
			} ${className}`}>
			{checked ? (
				square ? (
					<FontAwesomeIcon icon={faCheck} color={'#fff'} size='2xs' />
				) : (
					<FontAwesomeIcon icon={faCircleCheck} color={'#00A29C'} size='lg' />
				)
			) : null}
		</button>
	)
}

export default CustomCheckBox

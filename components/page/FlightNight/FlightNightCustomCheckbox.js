import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FlightNightCustomCheckbox = ({ children, status, onClick }) => {
	return (
		<div className='check_box'>
			<div onClick={onClick} className={`button ${status ? 'active' : ''}`}>
				{status && <FontAwesomeIcon icon={faCheck} />}
			</div>
			<div className='text'>{children}</div>
		</div>
	)
}

export default FlightNightCustomCheckbox

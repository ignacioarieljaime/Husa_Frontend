import React from 'react'

const FlightNightCustomCheckbox = ({ children, status, onClick }) => {
	return (
		<div className='check_box'>
			<div
				onClick={onClick}
				className={`button ${status ? 'active' : ''}`}></div>
			<div className='text'>{children}</div>
		</div>
	)
}

export default FlightNightCustomCheckbox

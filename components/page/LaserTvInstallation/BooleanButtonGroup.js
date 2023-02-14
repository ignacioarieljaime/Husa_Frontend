import React from 'react'

const BooleanButtonGroup = ({ status, onClick }) => {
	return (
		<div className='button_group'>
			<button
				type='button'
				onClick={() => onClick(true)}
				className={`me-4 my-4 ${status ? 'active' : ''}`}>
				<span></span> Yes
			</button>
			<button
				type='button'
				onClick={() => onClick(false)}
				className={`my-4 ${status === false ? 'active' : ''}`}>
				<span></span> No
			</button>
		</div>
	)
}

export default BooleanButtonGroup

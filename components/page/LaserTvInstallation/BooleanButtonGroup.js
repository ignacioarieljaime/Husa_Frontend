import React from 'react'

const BooleanButtonGroup = ({ status, onClick }) => {
	return (
		<div className='button_group'>
			<button
				type='button'
				onClick={() => onClick('yes')}
				className={`me-4 my-4 ${status === 'yes' ? 'active' : ''}`}>
				<span></span> Yes
			</button>
			<button
				type='button'
				onClick={() => onClick('no')}
				className={`my-4 ${status === 'no' ? 'active' : ''}`}>
				<span></span> No
			</button>
		</div>
	)
}

export default BooleanButtonGroup

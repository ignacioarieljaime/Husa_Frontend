import React from 'react'

const CardLayout = ({ title, icon, children }) => {
	return (
		<div className='card_layout'>
			<div className='d-flex justify-content-center flex-column flex-md-row justify-content-md-start align-items-center gap-4 px-md-8 py-md-4 mb-8'>
				{icon}
				<h4 className='title'>{title}</h4>
			</div>
			{children}
		</div>
	)
}

export default CardLayout

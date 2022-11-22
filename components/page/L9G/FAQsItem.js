import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const FAQsItem = ({ question, answer }) => {
	const [collapsed, setCollapsed] = useState(false)

	return (
		<div className={`question-wrapper ${collapsed ? 'open' : ''}`}>
			<div
				className='question p-3 px-xxl-6 py-6'
				onClick={() => setCollapsed(collapsed => !collapsed)}>
				<span>{question}</span>
				<FontAwesomeIcon icon={faChevronDown} size='sm' />
			</div>
			<div className='answer'>
				<span className='p-6 d-block'>{answer}</span>
			</div>
		</div>
	)
}

export default FAQsItem

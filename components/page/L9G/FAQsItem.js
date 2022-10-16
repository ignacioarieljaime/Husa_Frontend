import React, { useState } from 'react'

const FAQsItem = ({ question, answer }) => {
	const [collapsed, setCollapsed] = useState(false)

	return (
		<div className={`question-wrapper ${collapsed ? 'open' : ''}`}>
			<div
				className='question'
				onClick={() => setCollapsed(collapsed => !collapsed)}>
				{question}
			</div>
			<div className='answer'>
				<span className='p-6 d-block'>{answer}</span>
			</div>
		</div>
	)
}

export default FAQsItem

import React, { useState, useRef, useEffect } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronCircleDown,
	faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

const ExtendedWarrantyFAQAccordion = ({ title, questions }) => {
	const [collapsed, setCollapsed] = useState(true)
	const windowSize = useWindowSize()
	const accordionContent = useRef()

	useEffect(() => {
		if (!collapsed) {
			accordionContent.current.style.maxHeight =
				accordionContent.current.scrollHeight + 'px'
		} else {
			accordionContent.current.style.maxHeight = '0px'
		}
	}, [collapsed, windowSize])

	return (
		<div className={`faq-accordion-item ${collapsed ? 'collapsed' : ''}`}>
			<button
				className='faq-accordion-button'
				onClick={() => setCollapsed(collapsed => !collapsed)}>
				{title}
				<span>
					<FontAwesomeIcon
						icon={faChevronCircleDown}
						size={'xl'}
						className='ms-2'
					/>
				</span>
			</button>
			<div className='faq-accordion-content' ref={accordionContent}>
				{questions.map((question, index) => (
					<div key={index} className='faq-accordion-question-item'>
						<h4 className='faq-accordion-question'>
							{question?.question?.value}
							<span>
								<FontAwesomeIcon
									icon={faCircleXmark}
									size={'xl'}
									className='ms-2'
								/>
							</span>
						</h4>
						<p className='faq-accordion-answer'>{question?.answer?.value}</p>
						<div className='faq-accordion-extras'>{question?.extra?.value}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ExtendedWarrantyFAQAccordion

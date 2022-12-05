import React, { useState, useRef, useEffect } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChampagneGlasses,
	faChevronCircleDown,
	faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

const ExtendedWarrantyFAQAccordion = ({ title, questions }) => {
	const [collapsed, setCollapsed] = useState(true)
	const windowSize = useWindowSize()
	const accordionContent = useRef()
	const accordionContentHeight = useRef()

	useEffect(() => {
		if (!collapsed) {
			accordionContent.current.style.maxHeight =
				accordionContentHeight.current.offsetHeight + 'px'
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
				{questions.map((item, index) => (
					<div
						key={index}
						ref={accordionContentHeight}
						className='faq-accordion-question-item'>
						<h4 className='faq-accordion-question'>
							{item?.question?.value}
							<button onClick={() => setCollapsed(collapsed => !collapsed)}>
								<FontAwesomeIcon
									icon={faCircleXmark}
									size={'xl'}
									className='ms-2'
								/>
							</button>
						</h4>
						<div
							className='faq-accordion-answer'
							dangerouslySetInnerHTML={{ __html: item?.answer?.value }}></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ExtendedWarrantyFAQAccordion

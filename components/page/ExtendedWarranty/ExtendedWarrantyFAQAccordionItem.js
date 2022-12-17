import React, { useEffect, useState, useRef } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleXmark,
	faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons'

const ExtendedWarrantyFAQAccordionItem = ({ data, onClick }) => {
	const [itemCollapsed, setItemCollapsed] = useState(true)
	const accordionItem = useRef()
	const accordionItemHeight = useRef()
	const accordionButtonHeight = useRef()
	const windowSize = useWindowSize()

	useEffect(() => {
		if (!itemCollapsed) {
			accordionItem.current.style.maxHeight =
				accordionItemHeight.current.offsetHeight +
				accordionButtonHeight.current.offsetHeight +
				85 +
				'px'
		} else {
			accordionItem.current.style.maxHeight =
				accordionButtonHeight.current.offsetHeight + 60 + 'px'
		}
		onClick()
	}, [itemCollapsed, windowSize])

	return (
		<div className='faq-accordion-question-item' ref={accordionItem}>
			<h4 className='faq-accordion-question' ref={accordionButtonHeight}>
				{data?.question?.value}
				<button
					onClick={() => {
						setItemCollapsed(itemCollapsed => !itemCollapsed)
					}}>
					<FontAwesomeIcon
						icon={itemCollapsed ? faChevronCircleDown : faCircleXmark}
						size={'xl'}
						className='ms-2'
					/>
				</button>
			</h4>
			<div
				ref={accordionItemHeight}
				className='faq-accordion-answer pt-11'
				dangerouslySetInnerHTML={{ __html: data?.answer?.value }}></div>
		</div>
	)
}

export default ExtendedWarrantyFAQAccordionItem

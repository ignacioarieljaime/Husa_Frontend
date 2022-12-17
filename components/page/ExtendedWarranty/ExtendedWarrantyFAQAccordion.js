import React, { useState, useRef, useEffect } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronCircleDown,
	faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import ExtendedWarrantyFAQAccordionItem from './ExtendedWarrantyFAQAccordionItem'

const ExtendedWarrantyFAQAccordion = ({ title, questions }) => {
	const [collapsed, setCollapsed] = useState(true)
	const [checkHeight, setCheckHeight] = useState(true)
	const windowSize = useWindowSize()
	const accordionContent = useRef()
	const accordionContentHeight = useRef()
	const [h, sh] = useState(0)
	const [list, setList] = useState([])
	useEffect(() => {
		setList(questions)
	}, [])
	useEffect(() => {
		setTimeout(() => {
			if (!collapsed) {
				accordionContent.current.style.maxHeight =
					accordionContentHeight.current.offsetHeight + 'px'
				sh(accordionContentHeight.current.offsetHeight)
			} else {
				accordionContent.current.style.maxHeight = '0px'
			}
		}, 50)
		setCheckHeight(false)
	}, [collapsed, windowSize, checkHeight])

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
				<div ref={accordionContentHeight}>
					{' '}
					{list.map((item, index) => (
						<ExtendedWarrantyFAQAccordionItem
							key={index}
							data={item}
							onClick={() => setCheckHeight(true)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default ExtendedWarrantyFAQAccordion

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronCircleDown,
	faChevronCircleUp,
	faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'
import { useEffect } from 'react'
import { useRef } from 'react'
import Link from 'next/link'
import CareersAccordionItemSublist from './CareersAccordionItemSublist'

const CareersAccordionItem = ({ data }) => {
	const [collapsed, setCollapsed] = useState(true)
	const windowSize = useWindowSize()
	const accordionContent = useRef()
	const accordionContentHeight = useRef()
	const [h, sh] = useState(0)
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
	}, [collapsed, windowSize])

	return (
		<div className={`faq-accordion-item mb-4 ${collapsed ? 'collapsed' : ''}`}>
			<button
				className='faq-accordion-button'
				onClick={() => setCollapsed(collapsed => !collapsed)}>
				{data?.title?.value}
				<span>
					<FontAwesomeIcon
						icon={faChevronCircleUp}
						size={'xl'}
						className='ms-2'
					/>
				</span>
			</button>
			<div className='faq-accordion-content' ref={accordionContent}>
				<div ref={accordionContentHeight}>
					{data?.list?.value.map((item, index) => (
						<CareersAccordionItemSublist
							key={index}
							data={item}
							collapsed={collapsed}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CareersAccordionItem

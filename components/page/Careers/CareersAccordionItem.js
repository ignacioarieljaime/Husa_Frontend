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
					<svg
						width='21'
						height='13'
						viewBox='0 0 21 13'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M10.4605 0.994667L0.732877 10.7464C0.620826 10.8587 0.654702 11.0756 0.805841 11.2271L2.09313 12.5176C2.24687 12.6717 2.46316 12.7057 2.57521 12.5933L10.6638 4.48471L18.768 12.609C18.8722 12.7135 19.078 12.6717 19.2318 12.5176L20.5191 11.2271C20.6728 11.073 20.7119 10.8666 20.6103 10.7621L10.94 1.06781C10.7862 0.913684 10.5726 0.882337 10.4605 0.994667Z'
						/>
					</svg>
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

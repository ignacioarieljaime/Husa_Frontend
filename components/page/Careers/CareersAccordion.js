import React from 'react'
import CareersAccordionItem from './CareersAccordionItem'

const CareersAccordion = ({ data: { structure } }) => {
	return (
		<section>
			<div className='extended-warranty-faq container careers_accordion'>
				<div className='faq-accordion-container'>
					{structure?.list?.value.map((item, index) => (
						<CareersAccordionItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default CareersAccordion

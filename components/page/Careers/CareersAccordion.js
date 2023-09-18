import React from 'react'
import CareersAccordionItem from './CareersAccordionItem'

const CareersAccordion = ({ data: { structure } }) => {
	return (
		<section>
			<div
				className={`extended-warranty-faq container careers_accordion ${
					structure?.singleItem?.value ? 'version_2' : ''
				}`}>
				<div className='faq-accordion-container'>
					{structure?.list?.value.map((item, index) => (
						<CareersAccordionItem
							key={index}
							data={item}
							singleItem={structure?.singleItem?.value}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default CareersAccordion

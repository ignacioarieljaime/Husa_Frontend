import React from 'react'
import ExtendedWarrantyFAQAccordion from './ExtendedWarrantyFAQAccordion'

const ExtendedWarrantyFAQ = ({ data: { structure } }) => {
	return (
		<section>
			<div className='extended-warranty-faq container'>
				<h2 className='fs-2hx fw-normal mb-15'>{structure?.title?.value}</h2>
				<div className='faq-accordion-container'>
					{structure?.list?.value.map((item, index) => (
						<ExtendedWarrantyFAQAccordion
							key={index}
							title={item?.title?.value}
							questions={item?.questions?.value}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyFAQ

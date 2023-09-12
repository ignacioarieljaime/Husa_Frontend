import React from 'react'
import CareersAccordionItem from './CareersAccordionItem'

const CareersAccordion = ({ data: { structure } }) => {
	return (
		<section>
			<div
				className={`extended-warranty-faq container careers_accordion ${
					structure?.template?.value === 'v2' ? 'version_2' : ''
				}`}>
				<div className='faq-accordion-container'>
					{structure?.template?.value === 'v2'
						? structure?.listv2?.value.map((item, index) => (
								<CareersAccordionItem
									key={index}
									data={item}
									template={structure?.template?.value}
								/>
						  ))
						: structure?.list?.value.map((item, index) => (
								<CareersAccordionItem
									key={index}
									data={item}
									template={structure?.template?.value}
								/>
						  ))}
				</div>
			</div>
		</section>
	)
}

export default CareersAccordion

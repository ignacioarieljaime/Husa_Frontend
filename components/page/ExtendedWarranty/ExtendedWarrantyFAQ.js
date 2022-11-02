import React from 'react'
import ExtendedWarrantyFAQAccordion from './ExtendedWarrantyFAQAccordion'

const ExtendedWarrantyFAQ = ({ data }) => {
	const structure = {
		list: {
			value: [
				{
					title: {
						value: 'General'
					},
					questions: {
						value: [
							{
								question: {
									value: 'What is a Hisense Extended Service Plan?'
								},
								answer: {
									value:
										"With our Hisense Extended Service Plan, you get either a repair or replacement if your Hisense product experiences an electrical or mechanical malfunction due to a manufacturing defect after the manufacturer's warranty expires."
								},
								extra: {
									value:
										"Note: If your device is lost, stolen or damaged, it won't be covered under Extended Service Plan."
								}
							},
							{
								question: {
									value: 'What is a Hisense Extended Service Plan?'
								},
								answer: {
									value:
										"With our Hisense Extended Service Plan, you get either a repair or replacement if your Hisense product experiences an electrical or mechanical malfunction due to a manufacturing defect after the manufacturer's warranty expires."
								},
								extra: {
									value:
										"Note: If your device is lost, stolen or damaged, it won't be covered under Extended Service Plan."
								}
							}
						]
					}
				},
				{
					title: {
						value: 'General'
					},
					questions: {
						value: [
							{
								question: {
									value: 'What is a Hisense Extended Service Plan?'
								},
								answer: {
									value:
										"With our Hisense Extended Service Plan, you get either a repair or replacement if your Hisense product experiences an electrical or mechanical malfunction due to a manufacturing defect after the manufacturer's warranty expires."
								},
								extra: {
									value:
										"Note: If your device is lost, stolen or damaged, it won't be covered under Extended Service Plan."
								}
							},
							{
								question: {
									value: 'What is a Hisense Extended Service Plan?'
								},
								answer: {
									value:
										"With our Hisense Extended Service Plan, you get either a repair or replacement if your Hisense product experiences an electrical or mechanical malfunction due to a manufacturing defect after the manufacturer's warranty expires."
								},
								extra: {
									value:
										"Note: If your device is lost, stolen or damaged, it won't be covered under Extended Service Plan."
								}
							}
						]
					}
				}
			]
		}
	}

	return (
		<section>
			<div className='extended-warranty-faq container'>
				<h2 className='fs-2hx fw-normal mb-15'>Extended Service Plan FAQ</h2>
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

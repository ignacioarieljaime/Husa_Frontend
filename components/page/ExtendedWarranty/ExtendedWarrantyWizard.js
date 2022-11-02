import React, { useState } from 'react'
import ExtendedWarrantyFormStep from './ExtendedWarrantyFormStep'
import ExtendedWarrantyPurchasedPriceStep from './ExtendedWarrantyPurchasedPriceStep'
import ExtendedWarrantySevicePlansStep from './ExtendedWarrantySevicePlansStep'

import ExtendedWarrantyWizardStepper from './ExtendedWarrantyWizardStepper'

const ExtendedWarrantyWizard = ({ data }) => {
	const [step, setStep] = useState({
		title: 'Products',
		id: 0
	})
	const [price, setPrice] = useState()
	const [plan, setPlan] = useState({
		id: 0,
		price: '$56 USD',
		duration: '2 Years'
	})

	const structure = {
		product: {
			title: { value: '47-Decibel Top Control 24" Built-In Dishwasher' },
			model: { value: 'HUI6220XCUS' },
			image: {
				src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/278/e7a660ef50/Artboard-1__ScaleMaxWidthWzY0MF0.png'
			}
		},
		plans: {
			value: [
				{
					id: 0,
					price: '$56 USD',
					duration: '2 Years'
				},
				{
					id: 1,
					price: '$86 USD',
					duration: '3 Years'
				},
				{
					id: 2,
					price: '$106 USD',
					duration: '4 Years'
				}
			]
		}
	}

	const steps = [
		<ExtendedWarrantyPurchasedPriceStep
			product={structure?.product}
			price={price}
			onChange={setPrice}
			stepHandler={setStep}
		/>,
		<ExtendedWarrantySevicePlansStep
			product={structure?.product}
			plans={structure?.plans}
			onChange={setPlan}
			stepHandler={setStep}
		/>,
		<ExtendedWarrantyFormStep product={structure?.product} plan={plan} />
	]

	return (
		<section>
			<div className='wizard'>
				<ExtendedWarrantyWizardStepper step={step} />
				{steps[step.id]}
			</div>
		</section>
	)
}

export default ExtendedWarrantyWizard

import React, { useState } from 'react'
import ExtendedWarrantyFinalStatusStep from './ExtendedWarrantyFinalStatusStep'
import ExtendedWarrantyFormStep from './ExtendedWarrantyFormStep'
import ExtendedWarrantyPurchasedPriceStep from './ExtendedWarrantyPurchasedPriceStep'
import ExtendedWarrantySevicePlansStep from './ExtendedWarrantySevicePlansStep'

import ExtendedWarrantyWizardStepper from './ExtendedWarrantyWizardStepper'

const ExtendedWarrantyWizard = () => {
	const [step, setStep] = useState({
		title: 'Products',
		id: 1
	})

	const steps = [
		<ExtendedWarrantyPurchasedPriceStep />,
		<ExtendedWarrantySevicePlansStep />,
		<ExtendedWarrantyFormStep />,
		<ExtendedWarrantyFinalStatusStep />
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

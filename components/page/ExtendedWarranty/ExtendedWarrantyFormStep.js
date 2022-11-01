import React from 'react'
import ExtendedWarrantyFormStepForm from './ExtendedWarrantyFormStepForm'
import ExtendedWarrantyFormStepSelectionCard from './ExtendedWarrantyFormStepSelectionCard'

const ExtendedWarrantyFormStep = ({ product, plan }) => {
	return (
		<section className='extended-warranty-form-step'>
			<ExtendedWarrantyFormStepSelectionCard
				image={product?.image}
				title={product?.title?.value}
				model={product?.model?.value}
				plan={plan}
			/>
			<section>
				<div className='container'>
					<ExtendedWarrantyFormStepForm />
				</div>
			</section>
		</section>
	)
}

export default ExtendedWarrantyFormStep

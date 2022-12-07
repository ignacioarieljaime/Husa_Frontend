import React, { useState, useEffect } from 'react'
import ExtendedWarrantyFormStep from './ExtendedWarrantyFormStep'
import ExtendedWarrantyPurchasedPriceStep from './ExtendedWarrantyPurchasedPriceStep'
import ExtendedWarrantySevicePlansStep from './ExtendedWarrantySevicePlansStep'
import ExtendedWarrantyWizardStepper from './ExtendedWarrantyWizardStepper'

import { GetSingleProduct } from 'services/Product'
import { GetProductPlans } from 'services/ExtendedWarranty'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const ExtendedWarrantyWizard = ({ data: { structure } }) => {
	const [step, setStep] = useState({
		title: 'Products',
		id: 0
	})
	const [product, setProduct] = useState()
	const [plans, setPlans] = useState()
	const [loading, setLoading] = useState(false)
	const [price, setPrice] = useState()
	const [plan, setPlan] = useState({
		id: 0,
		price: '$56 USD',
		duration: '2 Years'
	})

	const router = useRouter()

	const getProduct = async () => {
		try {
			let response = await GetSingleProduct(router, router?.query?.product)
			setProduct(response?.data?.data)
		} catch (error) {
			console.log(error)
		}
	}

	const getPlans = async _price => {
		setLoading(true)
		try {
			let response = await GetProductPlans(_price)
			setPrice(_price)
			setPlans(response?.data?.price_range?.plans)
			setStep({
				id: 1,
				title: 'Purchased Price'
			})
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
			toast.error('Entered price is not valid')
		}
	}

	const planSelectionHandler = _plan => {
		setPlan(_plan)
		setStep({ title: 'Service Plans', id: 2 })
	}

	useEffect(() => {
		getProduct()
	}, [])

	const steps = [
		<ExtendedWarrantyPurchasedPriceStep
			product={product}
			getPlans={getPlans}
			loading={loading}
		/>,
		<ExtendedWarrantySevicePlansStep
			product={product}
			plans={plans}
			price={price}
			onClick={planSelectionHandler}
		/>,
		<ExtendedWarrantyFormStep
			product={product}
			plan={plan}
			terms={structure?.terms.value}
		/>
	]

	return (
		<section>
			<div className='wizard'>
				<ExtendedWarrantyWizardStepper step={step} stepHandler={setStep} />
				{steps[step.id]}
			</div>
		</section>
	)
}

export default ExtendedWarrantyWizard

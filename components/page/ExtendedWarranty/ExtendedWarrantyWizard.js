import React, { useState, useEffect } from 'react'
import ExtendedWarrantyFormStep from './ExtendedWarrantyFormStep'
import ExtendedWarrantyPurchasedPriceStep from './ExtendedWarrantyPurchasedPriceStep'
import ExtendedWarrantySevicePlansStep from './ExtendedWarrantySevicePlansStep'
import ExtendedWarrantyWizardStepper from './ExtendedWarrantyWizardStepper'

import { GetSingleProduct } from 'services/Product'
import { GetProductPlans } from 'services/ExtendedWarranty'
import { useRouter } from 'next/router'

const ExtendedWarrantyWizard = ({ data }) => {
	const [step, setStep] = useState({
		title: 'Products',
		id: 0
	})
	const [product, setProduct] = useState()
	const [plans, setPlans] = useState()
	const [price, setPrice] = useState()
	const [plan, setPlan] = useState({
		id: 0,
		price: '$56 USD',
		duration: '2 Years'
	})

	const router = useRouter()

	const getProduct = async () => {
		try {
			let response = await GetSingleProduct(router, router?.query?._id)
			setProduct(response?.data?.data)
		} catch (error) {
			console.log(error)
		}
	}

	const getPlans = async _price => {
		try {
			let response = await GetProductPlans(_price)
			setPrice(_price)
			setPlans(response?.data?.price_range?.plans)
			setStep({
				id: 1,
				title: 'Purchased Price'
			})
		} catch (error) {
			console.log(error)
		}
	}

	const planSelectionHandler = _plan => {
		setPlan(_plan)
		setStep({ title: 'Service Plans', id: 2 })
	}

	useEffect(() => {
		getProduct()
	}, [])

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
			product={product}
			getPlans={getPlans}
		/>,
		<ExtendedWarrantySevicePlansStep
			product={product}
			plans={plans}
			price={price}
			onClick={planSelectionHandler}
		/>,
		<ExtendedWarrantyFormStep product={product} plan={plan} />
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

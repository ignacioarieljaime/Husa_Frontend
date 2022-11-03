import React, { useState, useEffect } from 'react'
import ExtendedWarrantyFormStepForm from './ExtendedWarrantyFormStepForm'
import ExtendedWarrantyFormStepSelectionCard from './ExtendedWarrantyFormStepSelectionCard'

import {
	postFormAssets,
	submitForm,
	GetPaymentUrl
} from 'services/ExtendedWarranty'
import { useRouter } from 'next/router'

const ExtendedWarrantyFormStep = ({ product, plan }) => {
	const [formBody, setFormBody] = useState({
		product: {
			id: product.id
		},
		plan_id: plan.id
	})
	const [assets, setAssets] = useState([])
	const [acceptTerms, setAcceptTerms] = useState(false)
	const [token, setToken] = useState()
	const router = useRouter()

	const assetsUploadHandler = _asset => {
		let temp = assets
		if (temp.length > 0 && temp.some(item => item.id === _asset.id))
			temp.splice(
				temp.findIndex(item => item.id === _asset.id),
				1
			)
		temp.push(_asset)
		setAssets(temp)
	}

	const submitAssets = async asset => {
		const formData = new FormData()
		formData.append('attachment', asset)
		let response = await postFormAssets(formData)
		return response?.data?.view_link
	}

	const submitFormData = async () => {
		let response = await submitForm(formBody)
		setToken(response?.data?.invoice?.token)
	}

	const redirectToPayment = async token => {
		let route = await GetPaymentUrl(token)
		router.push(route)
	}

	const submitFormHandler = async () => {
		if (acceptTerms) {
			assets.forEach(async item => {
				try {
					let link = await submitAssets(item.asset)
					setFormBody(prevState => ({
						...prevState,
						product: {
							...prevState.product,
							[item.name]: link
						}
					}))
				} catch (error) {
					console.log(error)
				}
			})
			await submitFormData()
			if (token) redirectToPayment(token)
		}
	}

	return (
		<section className='extended-warranty-form-step'>
			<ExtendedWarrantyFormStepSelectionCard
				image={product?.image}
				title={product?.name}
				model={product?.model}
				plan={plan}
			/>
			<section>
				<div className='container'>
					<ExtendedWarrantyFormStepForm
						onChange={setFormBody}
						onUpload={assetsUploadHandler}
						acceptTerms={acceptTerms}
						setAcceptTerms={setAcceptTerms}
						onSubmit={submitFormHandler}
					/>
				</div>
			</section>
		</section>
	)
}

export default ExtendedWarrantyFormStep

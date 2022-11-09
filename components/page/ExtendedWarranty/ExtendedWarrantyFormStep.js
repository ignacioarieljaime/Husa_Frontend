import React, { useState, useEffect } from 'react'
import ExtendedWarrantyFormStepForm from './ExtendedWarrantyFormStepForm'
import ExtendedWarrantyFormStepSelectionCard from './ExtendedWarrantyFormStepSelectionCard'

import {
	postFormAssets,
	submitForm,
	GetPaymentUrl
} from 'services/ExtendedWarranty'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Joi from 'joi'

const ExtendedWarrantyFormStep = ({ product, plan }) => {
	const [formBody, setFormBody] = useState({
		product: {
			id: product.id,
			model_plate_sticker: '',
			receipt_photo: '',
			serial_number: ''
		},
		plan_id: plan.id,
		first_name: '',
		last_name: '',
		phone: '',
		email: '',
		address: '',
		purchase_date: ''
	})
	const [assets, setAssets] = useState([])
	const [acceptTerms, setAcceptTerms] = useState(false)
	const router = useRouter()

	const schema = Joi.object({
		first_name: Joi.string()
			.messages({ 'string.empty': 'Name field is empty' })
			.required(),
		last_name: Joi.string()
			.messages({ 'string.empty': 'Last name is not entered' })
			.required(),
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.messages({ 'string.empty': 'Email field is empty' })
			.required(),
		phone: Joi.number()
			.integer()
			.messages({ 'number.empty': 'Phone number field is empty' })
			.required(),
		address: Joi.string()
			.messages({ 'string.empty': 'Address field is empty' })
			.required(),
		purchase_date: Joi.date()
			.messages({ 'date.empty': 'Purchase date field is empty' })
			.required(),
		plan_id: Joi.number(),
		product: Joi.object({
			serial_number: Joi.string()
				.messages({ 'string.empty': 'Serial number field is empty' })
				.required(),
			model_plate_sticker: Joi.string()
				.messages({ 'string.empty': 'Please upload model plate sticker' })
				.required(),
			receipt_photo: Joi.string()
				.messages({ 'string.empty': 'Please upload receipt photo' })
				.required(),
			id: Joi.number()
		})
	})

	const assetsUploadHandler = _asset => {
		let temp = assets
		if (temp.length > 0 && temp.some(item => item.id === _asset.id))
			temp.splice(
				temp.findIndex(item => item.id === _asset.id),
				1
			)
		temp.push(_asset)
		setAssets(temp)
		submitFormAssets(_asset)
	}

	const submitAssets = async asset => {
		const formData = new FormData()
		formData.append('attachment', asset)
		try {
			let response = await postFormAssets(formData)
			return response?.data?.view_link
		} catch (err) {}
	}

	const submitFormData = async () => {
		if (acceptTerms) {
			try {
				if (schema.validate(formBody)?.error) {
					toast.error(schema.validate(formBody)?.error?.details[0]?.message)
				} else {
					let response = await submitForm(formBody)
					redirectToPayment(response?.data?.invoice?.token)
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	const redirectToPayment = async token => {
		try {
			let link = await GetPaymentUrl(token)
			router.push(link.data.url)
		} catch (error) {
			console.log(error)
			if (error.response.status === 401)
				toast.error('Submission failed', {
					autoClose: true
				})
			else
				toast.error('Something went wrong', {
					autoClose: true
				})
		}
	}

	const submitFormAssets = async _asset => {
		try {
			let link = await submitAssets(_asset.asset)
			setFormBody(prevState => ({
				...prevState,
				product: {
					...prevState.product,
					[_asset.name]: link
				}
			}))
			toast.success(_asset.name.replace(/_+/g, ' ') + ' uploaded successfuly')
		} catch (error) {
			toast.error(_asset.name.replace(/_+/g, ' ') + ' upload failed')
			console.log(error)
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
						onSubmit={submitFormData}
						formBody={formBody}
					/>
				</div>
			</section>
		</section>
	)
}

export default ExtendedWarrantyFormStep

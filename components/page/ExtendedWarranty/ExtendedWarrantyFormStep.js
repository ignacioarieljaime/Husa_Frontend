import React, { useState } from 'react'
import ExtendedWarrantyFormStepForm from './ExtendedWarrantyFormStepForm'
import ExtendedWarrantyFormStepSelectionCard from './ExtendedWarrantyFormStepSelectionCard'

import {
	postFormAssets, submitForm, GetPaymentUrl
} from 'services/ExtendedWarranty'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
const ExtendedWarrantyFormStep = ({ product, plan }) => {
	const [formBody, setFormBody] = useState({
		product: {
			id: product.id, model_plate_sticker: null, receipt_photo: null, serial_number: null
		}, plan_id: plan.id, first_name: null, last_name: '', phone: null, email: null, address: null, purchase_date: null
	})
	const [assets, setAssets] = useState([])
	const [acceptTerms, setAcceptTerms] = useState(false)
	const [loading, setLoading] = useState(null)
	const router = useRouter()


	const assetsUploadHandler = (name, _asset) => {
		let temp = assets
		if (temp.length > 0 && temp.some(item => item.id === _asset.id)) temp.splice(temp.findIndex(item => item.id === _asset.id), 1)
		temp.push(_asset)
		setAssets(temp)
		submitFormAssets(name, _asset)
	}

	const submitAssets = async asset => {
		const formData = new FormData()
		formData.append('attachment', asset)
		try {
			let response = await postFormAssets(formData)
			if (response.status === 200) {
				return response?.data?.view_link
			}
		} catch (err) {
			toast.error(err.response.data.message, { toastId: 'upload file' })
		}
	}

	const submitFormData = async (e) => {
		e.preventDefault()

		if (!formBody.product.model_plate_sticker) {
			toast.error('please upload model plate sticker', { toastId: 'model_plate_sticker' })
		} else if (!formBody.product.receipt_photo) {
			toast.error('please upload receipt photo', { toastId: 'receipt_photo' })
		} else {
			setLoading('button')
			try {
				let response = await submitForm(formBody)
				await redirectToPayment(response?.data?.invoice?.token)
				setLoading(null)
			} catch (error) {
				setLoading(null)
				if (error?.response?.data?.errors?.last_name) {
					toast.error('Please enter your full name')
				}
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
			if (error.response.status === 401) {
				toast.error('Submission failed', {
					autoClose: true
				})
			} else toast.error('Something went wrong', {
				autoClose: true
			})
		}
	}

	const submitFormAssets = async (name, _asset) => {
		setLoading(name)
		try {
			let link = await submitAssets(_asset.asset)
			setFormBody(prevState => ({
				...prevState, product: {
					...prevState.product, [_asset.name]: link
				}
			}))
			toast.success(_asset.name.replace(/_+/g, ' ') + ' uploaded successfuly')
			setLoading(null)

		} catch (error) {
			setLoading(null)
			toast.error(_asset.name.replace(/_+/g, ' ') + ' upload failed')
			console.log(error)
		}
	}

	return (<section className='extended-warranty-form-step'>
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
					loading={loading}
				/>
			</div>
		</section>
	</section>)
}

export default ExtendedWarrantyFormStep

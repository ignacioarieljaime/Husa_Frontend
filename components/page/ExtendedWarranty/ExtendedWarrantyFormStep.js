import React, { useEffect, useState } from 'react'
import ExtendedWarrantyFormStepForm from './ExtendedWarrantyFormStepForm'
import ExtendedWarrantyFormStepSelectionCard from './ExtendedWarrantyFormStepSelectionCard'

import {
	postFormAssets,
	submitForm,
	GetPaymentUrl
} from 'services/ExtendedWarranty'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { GetProductRetailersApi } from '../../../services/Product'

const ExtendedWarrantyFormStep = ({ product, plan, terms }) => {
	const router = useRouter()
	const [retailers, setRetailers] = useState([])
	const [assets, setAssets] = useState([])
	const [acceptTerms, setAcceptTerms] = useState(false)
	const [loading, setLoading] = useState(null)
	const [error, setError] = useState(null)
	const [formBody, setFormBody] = useState({
		product: {
			id: product.id,
			model_plate_sticker: null,
			receipt_photo: null,
			serial_number: null,
			retailer: null,
			purchase_date: null
		},
		plan_id: plan.id,
		first_name: null,
		last_name: '',
		phone: null,
		email: null,
		address: null,
		postal_code: null
	})

	useEffect(() => {
		getRetailers(product.id)
	}, [])

	const assetsUploadHandler = (name, _asset) => {
		let temp = assets
		if (!_asset) {
			setAssets([])
			if (name === 'model_plate_sticker') {
				setFormBody({
					...formBody,
					product: { ...formBody.product, model_plate_sticker: null }
				})
			}
			if (name === 'receipt_photo') {
				setFormBody({
					...formBody,
					product: { ...formBody.product, receipt_photo: null }
				})
			}
		} else {
			if (temp.length > 0 && temp.some(item => item.id === _asset.id))
				temp.splice(
					temp.findIndex(item => item.id === _asset.id),
					1
				)
			temp.push(_asset)
			setAssets(temp)
			submitFormAssets(name, _asset)
		}
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

	const submitFormData = async e => {
		setError(null)
		e.preventDefault()
		if (!formBody.product.model_plate_sticker) {
			toast.error('please upload model plate sticker', {
				toastId: 'model_plate_sticker'
			})
		} else if (!formBody.product.receipt_photo) {
			toast.error('please upload receipt photo', { toastId: 'receipt_photo' })
		} else if (!formBody.product.retailer) {
			toast.error('please select retailer', { toastId: 'retailer_id' })
		} else {
			setLoading('button')
			try {
				let response = await submitForm(formBody)
				await redirectToPayment(response?.data?.invoice?.token)
				setLoading(null)
			} catch (error) {
				setLoading(null)
				if (error?.response?.status === 422) {
					setError(error?.response?.data?.errors)
				}
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
			} else
				toast.error('Something went wrong', {
					autoClose: true
				})
		}
	}

	const submitFormAssets = async (name, _asset, isCleanup) => {
		setLoading(name)

		if (isCleanup) {
			toast.success('Image deleted successfully')
			setFormBody(prevState => ({
				...prevState,
				product: {
					...prevState.product,
					[_asset.name]: ''
				}
			}))
			setLoading(null)
			return
		}

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
			setLoading(null)
		} catch (error) {
			setLoading(null)
			_asset?.name &&
				toast.error(_asset.name.replace(/_+/g, ' ') + ' upload failed')
			console.error(error)
		}
	}

	const getRetailers = async _productId => {
		try {
			let response = await GetProductRetailersApi(router, _productId)
			setRetailers(response.data)
		} catch (e) {
			console.log(e)
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
						loading={loading}
						retailers={retailers}
						terms={terms}
						errors={error}
					/>
				</div>
			</section>
		</section>
	)
}

export default ExtendedWarrantyFormStep

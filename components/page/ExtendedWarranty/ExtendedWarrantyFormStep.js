import React, { useState, useEffect } from 'react'
import ExtendedWarrantyFormStepForm from './ExtendedWarrantyFormStepForm'
import ExtendedWarrantyFormStepSelectionCard from './ExtendedWarrantyFormStepSelectionCard'

import { postFormAssets, submitForm } from 'services/ExtendedWarranty'
import { useRouter } from 'next/router'

const ExtendedWarrantyFormStep = ({ product, plan, stepHandler }) => {
	const [formData, setFormData] = useState({
		product: {
			id: product.id
		}
	})
	const [assets, setAssets] = useState([])
	const [acceptTerms, setAcceptTerms] = useState(false)
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
		const data = {
			attachment: asset,
			keep_original_name: 0
		}
		console.log(data)
		let response = await postFormAssets(data)
		return response?.data?.view_link
	}

	const submitFormHandler = async () => {
		const returnedValue = assets.map(item => {
			return submitAssets(item.asset)
		})
		console.log(returnedValue)
		// setFormData(prevState => ({
		// 	...prevState,
		// 	product: {
		// 		...prevState.product,
		// 		model_plate_sticker: returnedValue[0],
		// 		receipt_photo: returnedValue[1]
		// 	}
		// }))
		// let response = await submitForm(formData)
		// let route = response?.data?.data?.invoice?.tokens
		// router.push(route)
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
						formData={formData}
						onChange={setFormData}
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

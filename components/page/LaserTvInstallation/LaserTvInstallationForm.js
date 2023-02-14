import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import InstallationInfoForm from './InstallationInfoForm'
import PersonalInfoForm from './PersonalInfoForm'
import ProductInfoForm from './ProductInfoForm'

const LaserTvInstallationForm = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState(null)
	const [formBody, dispatch] = useReducer(
		(state, update) => {
			console.log(state)
			console.log(update)
			return {
				...state,
				...update
			}
		},
		{
			first_name: '',
			last_name: '',
			phone_number: '',
			email: '',
			address: '',
			city: '',
			state: '',
			zip_code: '',
			screen_size: '',
			model_number: '',
			retailer: '',
			receipt_photo: '',
			install_location: '',
			install_location_photo: '',
			wall_material: '',
			floor_type: '',
			internet_type: '',
			installation_date: '',
			tv_stand: null,
			power_outlet: null,
			wall_space: null
		}
	)

	const submitForm = async e => {
		e.preventDefault()
		setLoading(true)
		setErrors(null)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F63eb5ac8e78b1`,
				formBody
			)
			if (response.status === 200) {
				toast.success('successful')
				e.target.reset()
			} else {
				toast.error('is not true')
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			if (error?.response?.status === 422) {
				setErrors(error?.response?.data?.errors)
			}
			console.log(error)
		}
	}

	useEffect(() => {
		setText(structure?.text?.value)
	}, [])

	return (
		<section>
			<div className='laser_installation_form'>
				<h3 className='title'>{structure?.title?.value}</h3>
				<div
					className='subtitle'
					dangerouslySetInnerHTML={{ __html: text }}></div>
				<form onSubmit={e => submitForm(e)}>
					<PersonalInfoForm data={formBody} dispatch={dispatch} />
					<ProductInfoForm data={formBody} dispatch={dispatch} />
					<InstallationInfoForm data={formBody} dispatch={dispatch} />
					<div className='text-center m-15'>
						<button className='n-btn primary py-4 px-6'>Submit</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default LaserTvInstallationForm

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
			PostalZipCode: '',
			laser_tv_screen_size: '',
			laser_tv_model_number: '',
			purchased_from: '',
			receipt_image: '',
			where_to_install: '',
			installation_location_photo: '',
			material_of_wall: '',
			floor_type: '',
			wireless_wired_internet: '',
			expected_date: '',
			do_you_have_tv_stand: null,
			power_outlet_available: null,
			sufficient_wall_space: null
		}
	)

	const submitForm = async e => {
		e.preventDefault()
		setLoading(true)
		setErrors(null)
		try {
			let response = await axios.post(
				'https://imcrm2.dev-api.hisenseportal.com/api/v1/form/fill/F63eb5ac8e78b1',
				// `${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F63eb5ac8e78b1`,
				formBody
			)
			if (response.data.id && response.data.created_at) {
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

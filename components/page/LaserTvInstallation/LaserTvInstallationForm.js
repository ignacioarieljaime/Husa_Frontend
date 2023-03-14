import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useReducer, useState } from 'react'
import { toast } from 'react-toastify'
import InstallationInfoForm from './InstallationInfoForm'
import PersonalInfoForm from './PersonalInfoForm'
import ProductInfoForm from './ProductInfoForm'

const LaserTvInstallationForm = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState(null)
	const route = useRouter()
	const [formBody, dispatch] = useReducer(
		(state, update) => ({
			...state,
			...update
		}),
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
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F63f10369a2bac`,
				formBody
			)
			if (response.data.userForm.id && response.data.userForm.created_at) {
				toast.success('Submission successful')
				route.push(
					{
						pathname: structure?.link?.value,
						query: { token: response.data.userForm.id }
					},
					structure?.link?.value
				)
				e.target.reset()
			} else {
				toast.error('Submission failed')
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
					{/* <PersonalInfoForm
						data={formBody}
						dispatch={dispatch}
						errors={errors}
					/> */}
					{/* <ProductInfoForm
						data={formBody}
						dispatch={dispatch}
						errors={errors}
					/> */}
					{/* <InstallationInfoForm
						data={formBody}
						dispatch={dispatch}
						errors={errors}
					/> */}
					<div className='text-center mb-0 mb-md-15 m-15'>
						<button className='n-btn primary py-4 px-6 mb-7'>Submit</button>
						{errors ? (
							<p className='submission_error'>
								Error: Please check to make sure all the information has been
								provided.
							</p>
						) : null}
					</div>
				</form>
			</div>
		</section>
	)
}

export default LaserTvInstallationForm

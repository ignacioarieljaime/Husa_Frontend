import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import NbaFormHisense from './NbaFormHisense'
import NbaFormPersonal from './NbaFormPersonal'

const NbaForm = ({ data }) => {
	const router = useRouter()
	let { structure } = data
	const [errors, setErrors] = useState()
	const [loading, setLoading] = useState(false)
	const [dataSchema, setDataSchema] = useState({
		first_name: null,
		last_name: null,
		email: null,
		how_familiar_hisense: null,
		consider_hisense_tv: null,
		which_brand_own: [],
		future_news: 0
	})

	const dataSchemaHandler = (_key, _value) => {
		setDataSchema({ ...dataSchema, [_key]: _value })
		if (errors || errors?.length > 0) {
			let errorsData = errors
			delete errorsData[_key]
			setErrors(errorsData)
		}
	}

	const submitData = async e => {
		e.preventDefault()

		setLoading(true)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F640a037f4a62a`,
				{ ...dataSchema }
			)
			e.target.reset()

			setDataSchema({
				first_name: null,
				last_name: null,
				phone_number: null,
				social_media_handle: null,
				how_familiar_hisense: null,
				consider_hisense_tv: null,
				consider_hisense_tv: null,
				how_likely_tv_next6: null,
				how_likely_lasertv_next: null,
				what_like_abt_lasertv: null,
				which_brand_own: [],
				email: null,
				future_news: 0
			})
			if (response.status === 200) {
				toast.success('form submitted', {
					toastId: 'submit_success'
				})
				if (structure?.submitText?.value) {
					router.push(structure?.submitText?.value)
				}
			}
			setLoading(false)
		} catch (error) {
			toast.error("form didn't submit", { toastId: 'submit_failed' })
			if (error.response.status === 422) {
				setErrors(error.response.data.errors)
			}
			setLoading(false)
		}
	}

	return (
		<section>
			<form onSubmit={submitData} className='flight_night_form'>
				<NbaFormPersonal
					title={structure?.title?.value}
					data={dataSchema}
					onChange={dataSchemaHandler}
					errors={errors}
				/>
				<NbaFormHisense
					loading={loading}
					title={structure?.secondTitle?.value}
					submitText={structure?.submitLink?.title}
					termsData={structure?.terms?.value}
					data={dataSchema}
					errors={errors}
					onChange={dataSchemaHandler}
				/>
			</form>
		</section>
	)
}

export default NbaForm

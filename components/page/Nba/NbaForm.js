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
		were_you_familiar: null,
		are_you_more_likely: null,
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
				`https://imcrm2.dev-api.hisenseportal.com/api/v1/form/fill/${process.env.NEXT_PUBLIC_NBA_FORM_TOKEN}`,
				{ ...dataSchema }
			)

			setDataSchema({
				first_name: null,
				last_name: null,
				email: null,
				were_you_familiar: null,
				are_you_more_likely: null,
				future_news: 0
			})
			if (response.status === 200) {
				toast.success('form submitted', {
					toastId: 'submit_success'
				})
				e.target.reset()
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

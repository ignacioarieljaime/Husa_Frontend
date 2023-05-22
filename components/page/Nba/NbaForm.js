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
	const [terms, setTerms] = useState(false)
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
		if (!terms) {
			toast.error('Please accept Terms & Conditions  ', {
				toastId: 'submit_error'
			})
			return
		}

		setLoading(true)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/${process.env.NEXT_PUBLIC_NBA_FORM_TOKEN}`,
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
				setTerms(false)
				e.target.reset()
				if (structure?.submitLink?.value) {
					router.push(structure?.submitLink?.value)
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
			<form onSubmit={submitData} className='flight_night_form nba'>
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
					terms={terms}
					setTerms={setTerms}
				/>
			</form>
		</section>
	)
}

export default NbaForm

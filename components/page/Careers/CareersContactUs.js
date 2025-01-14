import React, { useEffect, useState } from 'react'
import CustomInput from 'components/common/Input'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'
import { schema } from '../HVAC/ContactUsFormSchema'
import axios from 'axios'

const CareersContactUs = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState(null)
	const [body, setBody] = useState({
		company: null,
		first_name: null,
		LastName: null,
		phone: null,
		email: null,
		message: null
	})

	useEffect(() => {
		setText(structure?.subtitle?.value)
	})

	const dataInsertionHandler = (_key, _value) => {
		setBody({ ...body, [_key]: _value })
	}

	const submitData = async e => {
		e.preventDefault()
		setLoading(true)
		setErrors(null)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/${process.env.NEXT_PUBLIC_CONTACTUS_TOKEN}`,
				body
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
			toast.error('Submission Failed')
			console.log(error)
		}
	}

	return (
		<section>
			<div className='hvac_contact_us'>
				<div className='content'>
					<h2 className='title'>{structure?.title?.value}</h2>
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{ __html: text }}></div>
					<form
						action=''
						onSubmit={e => submitData(e)}
						className='form-container form-container-inner-group active row'>
						<div className='col-12 mb-7'>
							<CustomInput
								placeholder={'Company'}
								onChange={_value => dataInsertionHandler('company', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.company && errors?.company[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-7'>
							<CustomInput
								placeholder={'First Name'}
								onChange={_value => dataInsertionHandler('first_name', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.first_name && errors?.first_name[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-7'>
							<CustomInput
								placeholder={'Last Name'}
								onChange={_value => dataInsertionHandler('LastName', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.LastName && errors?.LastName[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-7'>
							<CustomInput
								placeholder={'Phone number'}
								onChange={_value => dataInsertionHandler('phone', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.phone && errors?.phone[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-7'>
							<CustomInput
								placeholder={'Email'}
								onChange={_value => dataInsertionHandler('email', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.email && errors?.email[0]}
							</div>
						</div>
						<div className='col-12' style={{ marginBottom: '30px' }}>
							<textarea
								name=''
								required
								onChange={e => dataInsertionHandler('message', e.target.value)}
								placeholder='Message'
								className='form-container-inner-input pt-0'
							/>
							<div className='input_error_message'>
								{errors?.message && errors?.message[0]}
							</div>
						</div>
						<div className='col-12 text-center '>
							<button
								type='submit'
								disabled={loading}
								className={`d-flex mx-auto align-items-center n-btn outline-white transparent medium`}>
								<span> SUBMIT</span>
								{loading && <Spinner className={'ms-2'} size={25} />}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default CareersContactUs

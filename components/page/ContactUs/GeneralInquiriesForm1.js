import axios from 'axios'
import CustomInput from 'components/common/Input'
import CustomSelectBox from 'components/common/selectBox'
import Spinner from 'components/common/Spinner'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

let selectBoxOption = [
	{ name: 'Marketing or PR', value: 1 },
	{ name: 'Customer Support', value: 2 },
	{ name: 'Human Resources', value: 3 }
]

function GeneralInquiriesForm({ btnClass, formHandler }) {
	const [loading, setLoading] = useState(false)
	const [dataSchema, setDataSchema] = useState({
		first_name: null,
		last_name: null,
		email: null,
		phone_number: null,
		department: null,
		message: null
	})

	const dataSchemaHandler = (_title, _value) => {
		setDataSchema({ ...dataSchema, [_title]: _value })
	}

	const submitData = async e => {
		e.preventDefault()
		setLoading(true)
		try {
			let response = await axios.post(
				'https://imcrm.dev-api.hisenseportal.com/api/hisense/contact/inquery',
				dataSchema
			)

			if (response.status === 200) {
				toast.success('successful')
				formHandler(true)
			} else {
				toast.error('is not true')
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	return (
		<form
			action=''
			onSubmit={submitData}
			className='form-container-inner-group row active'
			id='form-tab-2'>
			<div className='col-12 mb-10 '>
				<CustomSelectBox
					options={selectBoxOption}
					onChange={_value => dataSchemaHandler('department', _value.value)}
					title={'WHAT IS YOUR INQUIRY RELATED TO?'}
				/>
			</div>
			<div className='col-12 col-md-6 mb-10'>
				<CustomInput
					placeholder={'FIRST NAME'}
					onChange={_value => dataSchemaHandler('first_name', _value)}
					required={true}
				/>
			</div>
			<div className='col-12 col-md-6 mb-10'>
				<CustomInput
					placeholder={'LAST NAME'}
					onChange={_value => dataSchemaHandler('last_name', _value)}
					required={true}
				/>
			</div>
			<div className='col-12 col-md-6 mb-10'>
				<CustomInput
					placeholder={'EMAIL'}
					onChange={_value => dataSchemaHandler('email', _value)}
					required={true}
				/>
			</div>
			<div className='col-12 col-md-6 mb-10'>
				<CustomInput
					placeholder={'PHONE'}
					onChange={_value => dataSchemaHandler('phone_number', _value)}
					required={true}
				/>
			</div>
			<div className='col-12 mb-10'>
				<textarea
					name=''
					cols='30'
					rows='1'
					required
					onChange={e => dataSchemaHandler('message', e.target.value)}
					placeholder='MESSAGE'
					className='form-container-inner-input'></textarea>
				<span className='input-error'>This field is required.</span>
			</div>
			<div className='col-12 text-center '>
				<button
					type='submit'
					disabled={loading}
					className={`d-flex mx-auto align-items-center ${
						btnClass ? btnClass : 'form-submit-btn '
					}`}>
					<span > SUBMIT</span>
					{loading && <Spinner className={"ms-2"} size={25} />}
				</button>
			</div>
		</form>
	)
}

export default GeneralInquiriesForm

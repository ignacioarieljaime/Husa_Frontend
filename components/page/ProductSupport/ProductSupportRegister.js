import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCheck,
	faChevronDown,
	faCircleInfo,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import ProductSupportRegisterModal from './ProductSupportRegisterModal'
import CustomSelectBox from 'components/common/selectBox'
import CustomInput from 'components/common/Input'
import RoleModal from '../ContactUs/RoleModal'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'

function ProductSupportRegister({ pim, data }) {
	let { structure } = data
	const [acceptRole, setAcceptRole] = useState(false)
	const [modalCondition, setModalCondition] = useState(false)
	const [dataSchema, setDataSchema] = useState({
		first_name: null,
		last_name: null,
		email: null,
		phone_number: null,
		postal_code: null,
		product_category: pim?.Category?.name,
		product_model: pim?.model,
		product_series: pim?.custom_fields.find(item => item.title === 'h2 Title')
			?.value,
		product_serial_number: null,
		purchased_from: null,
		date_of_purchase: null,
		receipt_image: null,
		future_news: acceptRole ? '0' : '1'
	})
	const [loading, setLoading] = useState(false)
	const [file, setFile] = useState(null)

	const dataSchemaHandler = (_title, _value) => {
		setDataSchema({ ...dataSchema, [_title]: _value })
	}

	const submitData = async e => {
		e.preventDefault()
		setLoading(true)
		try {
			let fileUploadCondition = await uploadFile()
			let response = await axios.post(
				'https://imcrm.dev-api.hisenseportal.com/api/hisense/contact/register-product',
				{ ...dataSchema, receipt_image: fileUploadCondition }
			)
			if (response.status === 200) {
				toast.success('ticket sended')
			} else {
				toast.error('ticket didn"t sended')
			}
			setLoading(false)
		} catch (error) {
			toast.error('ticket didn"t sended')
			setLoading(false)
			console.log(error)
		}
	}

	const uploadFile = async () => {
		const formData = new FormData()
		formData.append('attachment', file)

		try {
			let response = await axios({
				method: 'post',
				url: 'https://assets.dev-api.hisenseportal.com/api/v1/upload/d6357c2807362f',
				data: formData,
				headers: { 'Content-Type': 'multipart/form-data' }
			})
			if (response.status === 200) {
				dataSchemaHandler('receipt_image', response.data.view_link)
				return response.data.view_link
			}
			return null
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<section id={data.name + data.id} className='border-bottom border-dark'>
			<div className='container py-20'>
				<div className='form-container mx-auto'>
					<h3 className='text-center title mb-4'>{structure?.title?.value}</h3>
					<p className='text-center fs-5 fw-normal mb-15'>
						{structure?.subtitle?.value}
					</p>
					<form
						onSubmit={submitData}
						action=''
						className='form-container-inner row active'
						id='form-tab-1'>
						<div className='col-12 mb-10 custom-select-box'>
							<CustomInput
								disabled={true}
								placeholder={'PLEASE SELECT YOUR PRODUCT'}
								defaultValue={dataSchema.product_category}
							/>
						</div>
						<div className='col-12 mb-10 custom-select-box'>
							<CustomInput
								disabled={true}
								placeholder={'PLEASE SELECT YOUR MODEL'}
								defaultValue={dataSchema.product_model}
							/>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								placeholder={'SERIAL NUMBER'}
								required={true}
								onChange={_value =>
									dataSchemaHandler('product_serial_number', _value)
								}
							/>
						</div>
						<div className='col-12 col-md-6 mb-10 d-flex'>
							<button
								className='modal-btn'
								type='button'
								onClick={() => setModalCondition(state => !state)}>
								<FontAwesomeIcon icon={faCircleInfo} size={'xl'} />
								<span className='ms-2'>Where do I find the serial number?</span>
							</button>
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
								type={'email'}
								onChange={_value => dataSchemaHandler('email', _value)}
								required={true}
							/>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								placeholder={'POSTAL CODE/ZIP'}
								onChange={_value => dataSchemaHandler('postal_code', _value)}
								required={true}
							/>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								onChange={_value => dataSchemaHandler('phone_number', _value)}
								placeholder={'PHONE NUMBER'}
								required={true}
							/>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								onChange={_value => dataSchemaHandler('purchased_from', _value)}
								placeholder={'PURCHASED FROM'}
								required={true}
							/>
						</div>
						<div className='col-12 mb-10'>
							<CustomInput
								type={'date'}
								onChange={_value =>
									dataSchemaHandler('date_of_purchase', _value)
								}
								required={true}
								placeholder={'PURCHASED FROM'}
							/>
						</div>
						<div className='col-12 mb-10 file-upload position-relative'>
							<input
								type='file'
								id='contact-file-input'
								accept='.jpg, .png, .jpeg, .pdf, .docx, .doc'
								multiple='multiple'
								className='position-absolute top-0 right-0 w-100 h-100 opacity-0'
								style={{ zIndex: 9 }}
								onChange={e => setFile(e.target.files[0])}
							/>
							<div className='file-upload-box' onclick='triggerFileUpload()'>
								<div>Drag & Drop a File Here</div>
								<p>Upload Images</p>
							</div>
						</div>
						<div className='col-12 mb-10 news-check'>
							<span
								className='form-checkbox-span'
								onClick={() => setAcceptRole(state => !state)}>
								{acceptRole && <FontAwesomeIcon icon={faCheck} />}
							</span>
							<label htmlFor='news'>
								<input
									type='checkbox'
									name='news'
									id='form-checkbox-input'
									className='d-none'
								/>
								Sign me up for future news
							</label>
						</div>
						<div className='col-12 text-center'>
							<button
								type='submit'
								disabled={loading}
								className='n-btn outline-black transparent py-4 px-9'>
								<span className='me-2'>REGISTER</span>
								{loading && <Spinner size={25} />}
							</button>
						</div>
					</form>
				</div>
				{modalCondition && (
					<RoleModal modalHandler={() => setModalCondition(false)} />
				)}
			</div>
		</section>
	)
}

export default ProductSupportRegister

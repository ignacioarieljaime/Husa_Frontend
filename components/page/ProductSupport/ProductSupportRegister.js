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
		product_id: pim?.id,
		product_name: pim?.name,
		model_number: pim?.model,
		serial_number: null,
		purchase_date: null,
		retailer: null,
		image: null,
		site_name: null
	})

	const dataSchemaHandler = (_title, _value) => {
		setDataSchema({ ...dataSchema, [_title]: _value })
	}

	const submitData = async e => {
		e.preventDefault()
		try {
			let response = await axios.post(
				'https://imcrm.dev-api.hisenseportal.com/api/hisense/contact/register-product',
				{ ...dataSchema }
			)
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}

	const getBase64 = (file, cb) => {
		let reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = function () {
			cb(reader.result)
			console.log(reader.result)
		}
		reader.onerror = function (error) {
			console.log('Error: ', error)
		}
	}
	return (
		<section id={data.name + data.id} className='border-bottom border-dark'>
			<div className='container py-20'>
				<h3 className='mb-4 fs-2'>{structure?.title?.value}</h3>
				<p className='fs-8 fw-normal mb-15'>{structure?.subtitle?.value}</p>
				<div className='form-container mx-auto'>
					<form
						onSubmit={submitData}
						action=''
						className='form-container-inner row active'
						id='form-tab-1'>
						<div className='col-12 mb-10 custom-select-box'>
							<CustomInput
								disabled={true}
								placeholder={'PLEASE SELECT YOUR PRODUCT'}
								required={true}
							/>
						</div>
						<div className='col-12 mb-10 custom-select-box'>
							<CustomInput
								disabled={true}
								placeholder={'PLEASE SELECT YOUR MODEL'}
								required={true}
								defaultValue={dataSchema.model_number}
							/>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								placeholder={'SERIAL NUMBER'}
								onChange={_value => dataSchemaHandler('serial_number', _value)}
								required={true}
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
								required={true}
								onChange={_value => dataSchemaHandler('first_name', _value)}
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
								onChange={_value => dataSchemaHandler('purchase_date', _value)}
								placeholder={'PURCHASED FROM'}
								required={true}
							/>
						</div>
						<div className='col-12 mb-10'>
							<CustomInput
								type={'date'}
								onChange={_value => dataSchemaHandler('purchase_date', _value)}
								placeholder={'PURCHASED FROM'}
								required={true}
							/>
						</div>
						<div className='col-12 mb-10 file-upload'>
							<input
								type='file'
								id='contact-file-input'
								accept='.jpg, .png, .jpeg, .pdf, .docx, .doc'
								multiple='multiple'
								onChange={e => getBase64(e.target.files[0])}
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
								className='btn btn-outline-dark px-5 py-2 rounded-5'>
								REGISTER
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

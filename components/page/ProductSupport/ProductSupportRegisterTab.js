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
import CustomImage from 'components/common/CustomImage'

const ProductSupportRegisterTab = ({ pim, data }) => {
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
		series: pim?.series[0]?.title,
		product_serial_number: null,
		purchased_from: null,
		date_of_purchase: null,
		receipt_image: null,
		future_news: acceptRole ? '0' : '1'
	})
	const [imageLoading, setImageLoading] = useState(false)
	const [loading, setLoading] = useState(false)
	const [file, setFile] = useState(null)
	const [errors, setErrors] = useState(null)
	const [tickedSended, setTickedSended] = useState(null)

	const dataSchemaHandler = (_title, _value) => {
		setDataSchema({ ...dataSchema, [_title]: _value })
	}

	const submitData = async e => {
		e.preventDefault()
		setLoading(true)
		setErrors(null)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F639711a39b936`,
				{ ...dataSchema }
			)
			if (response.status === 200) {
				toast.success('Registered Successfully', {
					toastId: 'ticket-sended'
				})
				setTickedSended(true)
				e.target.reset()
				resetData()
			} else {
				setTickedSended(false)
				toast.error("Register wasn't Successfully", {
					toastId: 'ticket-error'
				})
			}
			setLoading(false)
		} catch (error) {
			setTickedSended(false)
			toast.error("Register wasn't Successfully", { toastId: 'ticket-error' })
			setLoading(false)
			if (error?.response?.status === 422) {
				setErrors(error?.response?.data?.errors)
			}
			console.log(error)
		}
		setTimeout(() => {
			setTickedSended(null)
		}, 3000)
	}

	const resetData = () => {
		setAcceptRole(false)
		setFile(null)
		setDataSchema({
			first_name: null,
			last_name: null,
			email: null,
			phone_number: null,
			postal_code: null,
			product_category: pim?.Category?.name,
			product_model: pim?.model,
			series: pim?.custom_fields.find(item => item.title === 'h2 Title')?.value,
			product_serial_number: null,
			purchased_from: null,
			date_of_purchase: null,
			receipt_image: null,
			future_news: acceptRole ? '0' : '1'
		})
	}

	const uploadFile = async _file => {
		const formData = new FormData()
		setFile(_file)
		formData.append('attachment', _file)
		setImageLoading(true)

		try {
			let response = await axios({
				method: 'post',
				url: process.env.NEXT_PUBLIC_ASSETS_API_ROUTE,
				data: formData,
				headers: { 'Content-Type': 'multipart/form-data' }
			})
			if (response.status === 200) {
				toast.success('file uploaded')
				dataSchemaHandler('receipt_image', response.data.view_link)
				setImageLoading(false)
			}
		} catch (error) {
			setImageLoading(false)
			console.log(error)
		}
	}
	return (
		<section id={data.name + data.id} className='border-bottom border-dark'>
			<div className='container py-10'>
				<div className='form-container mx-auto'>
					<h3 className='text-center title mb-4'>{data?.title?.value}</h3>
					<p className='text-center fs-5 fw-normal mb-15'>
						{data?.subtitle?.value}
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
							<div className='input_error_message'>
								{errors?.product_category && errors?.product_category[0]}
							</div>
						</div>

						{pim?.series.length !== 0 && (
							<div className='col-12 mb-10 custom-select-box'>
								<CustomInput
									disabled={true}
									placeholder={'PLEASE SELECT YOUR MODEL'}
									defaultValue={pim?.series[0]?.title}
								/>
								<div className='input_error_message'>
									{errors?.series && errors?.series[0]}
								</div>
							</div>
						)}

						<div className='col-12 mb-10 custom-select-box'>
							<CustomInput
								disabled={true}
								placeholder={'PLEASE SELECT YOUR MODEL'}
								defaultValue={pim?.model}
							/>
							<div className='input_error_message'>
								{errors?.product_model && errors?.product_model[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								placeholder={'SERIAL NUMBER'}
								required={true}
								onChange={_value =>
									dataSchemaHandler('product_serial_number', _value)
								}
							/>
							<div className='input_error_message'>
								{errors?.product_serial_number &&
									errors?.product_serial_number[0]}
							</div>
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
							<div className='input_error_message'>
								{errors?.first_name && errors?.first_name[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								placeholder={'LAST NAME'}
								onChange={_value => dataSchemaHandler('last_name', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.last_name && errors?.last_name[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								placeholder={'EMAIL'}
								type={'email'}
								onChange={_value => dataSchemaHandler('email', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.email && errors?.email[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								placeholder={'POSTAL CODE/ZIP'}
								onChange={_value => dataSchemaHandler('postal_code', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.postal_code && errors?.postal_code[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								onChange={_value => dataSchemaHandler('phone_number', _value)}
								placeholder={'PHONE NUMBER'}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.phone_number && errors?.phone_number[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput
								onChange={_value => dataSchemaHandler('purchased_from', _value)}
								placeholder={'PURCHASED FROM'}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.purchased_from && errors?.purchased_from[0]}
							</div>
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
							<div className='input_error_message'>
								{errors?.date_of_purchase && errors?.date_of_purchase[0]}
							</div>
						</div>
						<div className='col-12 mb-10 '>
							<div className='file-upload position-relative'>
								{imageLoading && (
									<div className='image_loading_spinner_box position-absolute'>
										<Spinner size={35} />
									</div>
								)}
								{file ? (
									<>
										<CustomImage
											src={URL.createObjectURL(file)}
											wrapperWidth={'100%'}
											wrapperHeight={'270px'}
										/>
										<button
											className='remove_image_button'
											type='button'
											onClick={() => {
												setFile()
												dataSchemaHandler('receipt_image', null)
											}}>
											<FontAwesomeIcon icon={faXmark} />
										</button>
									</>
								) : (
									<>
										<input
											type='file'
											id='contact-file-input'
											accept='.jpg, .png, .jpeg'
											multiple='multiple'
											className='position-absolute curser-pointer top-0 right-0 w-100 h-100 opacity-0'
											style={{ zIndex: 9 }}
											onChange={e => uploadFile(e.target.files[0])}
										/>
										<div className='file-upload-box'>
											<div>Drag & Drop a File Here</div>
											<p>Upload receipt here</p>
										</div>
									</>
								)}
							</div>
							<div className='input_error_message'>
								{errors?.receipt_image && errors?.receipt_image[0]}
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
								className='n-btn outline-black d-flex mx-auto transparent py-2 px-4'>
								<span>Register</span>
								{loading && <Spinner className='ms-2' size={25} />}
							</button>
							{tickedSended === true ? (
								<div style={{ color: 'green', marginTop: '10px' }}>
									Registered Successfully
								</div>
							) : tickedSended === false ? (
								<div style={{ color: 'red', marginTop: '10px' }}>
									Register wasn't Successfully
								</div>
							) : null}
						</div>
					</form>
				</div>

				{modalCondition && (
					<RoleModal
						data={data?.modelText?.value}
						modalHandler={() => setModalCondition(false)}
					/>
				)}
			</div>
		</section>
	)
}

export default ProductSupportRegisterTab

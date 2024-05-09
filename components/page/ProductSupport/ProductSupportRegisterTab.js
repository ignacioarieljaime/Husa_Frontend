import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCheck,
	faChevronDown,
	faCircleInfo,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import ProductSupportRegisterModal from './ProductSupportRegisterModal'
import PurchasedFromSelectBox from '../Register/PurchasedFromSelectBox'
import CustomInput from 'components/common/Input'
import RoleModal from '../ContactUs/RoleModal'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'
import CustomImage from 'components/common/CustomImage'
import { uploadToS3 } from 'services/s3'

const ProductSupportRegisterTab = ({ pim, data }) => {
	let { structure } = data
	const [acceptRole, setAcceptRole] = useState(false)
	const [modalCondition, setModalCondition] = useState(false)
	const [dataSchema, setDataSchema] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone_number: '',
		postal_code: '',
		product_category: pim?.Category?.name,
		product_model: pim?.model,
		series: pim?.series[0]?.title,
		product_serial_number: '',
		purchased_from: '',
		date_of_purchase: '',
		receipt_image: null
	})
	const [imageLoading, setImageLoading] = useState(false)
	const [loading, setLoading] = useState(false)
	const [file, setFile] = useState(null)
	const [errors, setErrors] = useState(null)
	const [tickedSended, setTickedSended] = useState(null)
	const [inputFocused, setInputFocused] = useState(false)
	const [addClassName, setAddClassName] = useState(false)

	const dataSchemaHandler = (_title, _value) => {
		setDataSchema({ ...dataSchema, [_title]: _value })
	}

	const submitData = async e => {
		e.preventDefault()
		setLoading(true)
		setErrors(null)
		console.log(dataSchema)
		return;
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F639711a39b936`,
				{ ...dataSchema, future_news: acceptRole ? '1' : '0' }
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
		setAddClassName(false)
		setDataSchema({
			first_name: '',
			last_name: '',
			email: '',
			phone_number: '',
			postal_code: '',
			product_category: pim?.Category?.name,
			product_model: pim?.model,
			series: pim?.custom_fields.find(item => item.title === 'h2 Title')?.value,
			product_serial_number: '',
			purchased_from: '',
			date_of_purchase: '',
			receipt_image: null,
			future_news: '0'
		})
	}

	const uploadFile = async _file => {
		setFile(_file)
		setImageLoading(true)

		try {
			const downlaodLink = await uploadToS3(_file)

			if (downlaodLink) {
				toast.success('file uploaded')
				dataSchemaHandler('receipt_image', downlaodLink)
			}
			setImageLoading(false)
		} catch (error) {
			setImageLoading(false)
			console.log(error)
		}
	}
	const purchased_by = ['Best Buy','Amazon','Walmart','Brands Mart','Electronic Express','P.C.Richard & Son']
	return (
		<section
			id={'ProductSupportRegisterTab' + data.id}
			className='product-support-section border-bottom border-dark'>
			<div className='container py-10'>
				<div className='form-container mx-auto'>
					<h4 className='text-center title mb-4'>{data?.title?.value}</h4>
					<p className='text-center fs-5 fw-normal mb-9'>
						{data?.subtitle?.value}
					</p>
					<form
						onSubmit={submitData}
						action=''
						className='form-container-inner row active'
						id='form-tab-1'>
						<div className='col-12 col-md-6 mb-4 custom-select-box'>
							<CustomInput
								disabled={true}
								placeholder={'Select Your Product'}
								defaultValue={dataSchema.product_category}
							/>
							<div className='input_error_message'>
								{errors?.product_category && errors?.product_category[0]}
							</div>
						</div>

						{pim?.series.length !== 0 && (
							<div className='col-12 col-md-6 mb-4 custom-select-box d-none'>
								<CustomInput
									disabled={true}
									placeholder={'Select Your Model'}
									defaultValue={pim?.series[0]?.title}
								/>
								<div className='input_error_message'>
									{errors?.series && errors?.series[0]}
								</div>
							</div>
						)}

						<div className='col-12 col-md-6 mb-4 custom-select-box'>
							<CustomInput
								rightText={
									dataSchema?.product_category === 'Air Products' &&
									'(Outdoor Model for split system)'
								}
								disabled={true}
								placeholder={'Select Your Model'}
								defaultValue={pim?.model}
							/>
							<div className='input_error_message'>
								{errors?.product_model && errors?.product_model[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-4'>
							<CustomInput
								placeholder={'First Name'}
								onChange={_value => dataSchemaHandler('first_name', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.first_name && errors?.first_name[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-4'>
							<CustomInput
								placeholder={'Serial Number'}
								required={true}
								onChange={_value =>
									dataSchemaHandler('product_serial_number', _value)
								}
							/>
							<button
								className='modal-btn'
								type='button'
								onClick={() => setModalCondition(state => !state)}>
								<FontAwesomeIcon
									icon={faCircleInfo}
									style={{ width: '25px' }}
									size={'xl'}
								/>
								<span className='ms-2'>Where do I find the serial number?</span>
							</button>
							<div className='input_error_message'>
								{errors?.product_serial_number &&
									errors?.product_serial_number[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-4'>
							<CustomInput
								placeholder={'Last Name'}
								onChange={_value => dataSchemaHandler('last_name', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.last_name && errors?.last_name[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-4'>
							<CustomInput
								placeholder={'Email'}
								type={'email'}
								onChange={_value => dataSchemaHandler('email', _value)}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.email && errors?.email[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-4'>
							<CustomInput
								placeholder={'Postal Code/Zip'}
								onChange={_value => dataSchemaHandler('postal_code', _value)}
								value={dataSchema.postal_code}
								type='number'
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.postal_code && errors?.postal_code[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-4'>
							<CustomInput
								onChange={_value => dataSchemaHandler('phone_number', _value)}
								placeholder={'Phone Number'}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.phone_number && errors?.phone_number[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-4'>
						<PurchasedFromSelectBox
							title="Purchased From"
								placeholder={'Purchased From'}
								required={true}
								options={purchased_by}
								dataSchemaValue={dataSchema.purchased_from}
								onChange={_value => dataSchemaHandler('purchased_from', _value)}
						/>

						{/* <CustomInput
							onChange={_value => dataSchemaHandler('purchased_from', _value)}
							placeholder={'Purchased From'}
							required={true}
							value={dataSchema.purchased_from}
						/> */}
						<div className='input_error_message'>
							{errors?.purchased_from && errors?.purchased_from[0]}
						</div>
					</div>
						<div className='col-12 col-md-6 mb-4 d-none'>
							<CustomInput
								onChange={_value => dataSchemaHandler('purchased_from', _value)}
								placeholder={'Purchased From'}
								required={true}
							/>
							<div className='input_error_message'>
								{errors?.purchased_from && errors?.purchased_from[0]}
							</div>
						</div>
						<div className='col-12 col-md-6 mb-4 position-relative'>
							<label
								className={`label_on_date_input ${
									inputFocused || dataSchema.date_of_purchase ? 'focused' : ''
								}`}>
								PURCHASED DATE
							</label>
							<CustomInput
								onFocus={() => setInputFocused(true)}
								onBlur={() => setInputFocused(false)}
								type={'date'}
								onChange={_value =>
									dataSchemaHandler('date_of_purchase', _value)
								}
								value={dataSchema.date_of_purchase}
								required={true}
								placeholder={'Purchased From'}
							/>
							<div className='input_error_message'>
								{errors?.date_of_purchase && errors?.date_of_purchase[0]}
							</div>
						</div>
						<div className='col-12 mb-10 '>
						<label className="input-label">Upload Receipt</label>
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
											multiple={true}
											className='position-absolute curser-pointer top-0 right-0 w-100 h-100 opacity-0'
											style={{ zIndex: 9 }}
											onChange={e => uploadFile(e.target.files[0])}
										/>
											<div className='file-upload-box'>
												<div>
												<h6>Upload Receipt</h6>
											<p>or drag and drop file</p>
												</div>
										</div>
									</>
								)}
							</div>
							<div className='input_error_message'>
								{errors?.receipt_image && errors?.receipt_image[0]}
							</div>
						</div>
						<div className={`col-12 mb-10 news-check ${addClassName ? "active" : ""}`}>
							<span
								className='form-checkbox-span'
								onClick={() => {
									setAcceptRole(state => !state)
									setAddClassName(addClassName ? false : true)
								}}>
								{acceptRole && <FontAwesomeIcon icon={faCheck} />}
							</span>
							<label htmlFor='news'>
								<input
									type='checkbox'
									name='news'
									id='form-checkbox-input'
									className='d-none'
								/>
								Sign up for special deals, news, and important product
								information.
							</label>
						</div>
						<div className='col-12 text-center my-9'>
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
						extra={
							dataSchema?.product_category === 'Air Products' &&
							`<p style="color: #009e91;"><strong>Split AC & Heat Pump:</strong></p><p style="color: #009e91;">Side of outdoor unit​</p>`
						}
						data={data?.modelText?.value}
						modalHandler={() => setModalCondition(false)}
					/>
				)}
			</div>
		</section>
	)
}

export default ProductSupportRegisterTab

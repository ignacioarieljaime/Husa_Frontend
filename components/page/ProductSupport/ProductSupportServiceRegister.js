import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import CustomInput from 'components/common/Input'
import CustomSelectBox from 'components/common/selectBox'
import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { GetCategoriesApi, GetSeriesModelsApi } from 'services/category'
import RoleModal from '../ContactUs/RoleModal'
import { uploadToS3 } from 'services/s3'

let warrantyOption = [
	{ name: 'UNKNOWN', value: 'unknown' },
	{ name: 'YES', value: 'yes' },
	{ name: 'NO', value: 'no' }
]
let serviceTypeOption = [{ name: 'Technical Support', value: 'technical' }]

function ProductSupportServiceRegister({ data, formHandler, pim }) {
	const [errors, setErrors] = useState(null)
	const router = useRouter()
	const [modalCondition, setModalCondition] = useState(false)
	const [disabled, setDisabled] = useState(false)
	const [categories, setCategories] = useState([])
	const [models, setModels] = useState([])
	const [loading, setLoading] = useState(false)
	const [imageLoading, setImageLoading] = useState(false)
	const [file, setFile] = useState(null)
	const [dataSchema, setDataSchema] = useState({
		first_name: null,
		last_name: null,
		email: null,
		phone_number: null,
		product_serial_number: null,
		product_category: pim?.Category?.name,
		product_model: pim?.model,
		product_warranty: null,
		service_type: null,
		text: null,
		image: []
	})
	const [tickedSended, setTickedSended] = useState(null)

	useEffect(() => {
		getCategories()
	}, [])

	const dataSchemaHandler = (_key, _value) => {
		setDataSchema({ ...dataSchema, [_key]: _value })
	}

	const getCategories = async () => {
		setCategories('loading')
		try {
			let response = await GetCategoriesApi(router)
			if (response.status === 200) {
				setCategories(response.data.data)
			}
		} catch (error) {
			setCategories([])
			console.log(error)
		}
	}

	const submitData = async e => {
		e.preventDefault()

		setLoading(true)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F63970dbd680aa`,
				{ ...dataSchema }
			)
			if (response.status === 200) {
				toast.success('Registered Successfully', {
					toastId: 'ticket-sended'
				})
				e.target.reset()
				setTickedSended(true)
				resetData()
				setDisabled(true)
			}
			setLoading(false)
		} catch (error) {
			setTickedSended(false)
			toast.error("Register wasn't Successfully", { toastId: 'ticket-error' })
			if (error?.response?.status === 422) {
				setErrors(error?.response?.data?.errors)
			}
			setLoading(false)
			console.log(error)
		}
		setTimeout(() => {
			setTickedSended(null)
		}, 3000)
	}

	const uploadFile = async _file => {
		setImageLoading(true)
		setFile(_file)

		try {
			const downlaodLink = await uploadToS3(_file)

			if (downlaodLink) {
				dataSchemaHandler('image', [...dataSchema?.image, downlaodLink])
				toast.success('image uploaded successfully')
				setImageLoading(false)
			}
			setFile(null)
		} catch (error) {
			setFile(null)
			toast.error("image didn't uploaded")
			setImageLoading(false)
			console.log(error)
		}
	}

	const resetData = () => {
		setFile(null)
		setDataSchema({
			first_name: null,
			last_name: null,
			email: null,
			phone_number: null,
			product_serial_number: null,
			product_category: pim?.Category?.name,
			product_model: pim?.model,
			product_warranty: null,
			service_type: null,
			text: null,
			image: []
		})
	}

	const removeOneImage = _image => {
		dataSchemaHandler(
			'image',
			dataSchema?.image.filter(item => item !== _image)
		)
	}

	return (
		<>
			<div className='py-10'>
				<h4 className='text-center title mb-20'>{data?.secondTitle?.value}</h4>
				{data?.secondSubtitle?.value && (
					<p className='text-center fs-5 fw-normal mb-15'>
						{data?.secondSubtitle?.value}
					</p>
				)}

				<form
					action=''
					onSubmit={submitData}
					className='form-container-inner-group row active'
					id='form-tab-1'>
					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							placeholder={'NAME'}
							onChange={_value => dataSchemaHandler('first_name', _value)}
							required={true}
						/>
						<div className='input_error_message'>
							{errors?.first_name && errors?.first_name[0]}
						</div>
					</div>{' '}
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
							onChange={_value => dataSchemaHandler('email', _value)}
							required={true}
						/>
						<div className='input_error_message'>
							{errors?.email && errors?.email[0]}
						</div>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							placeholder={'PHONE'}
							onChange={_value => dataSchemaHandler('phone_number', _value)}
							required={true}
						/>
						<div className='input_error_message'>
							{errors?.phone_number && errors?.phone_number[0]}
						</div>
					</div>
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
					<div className='col-12 mb-10 custom-select-box'>
						<CustomInput
							disabled={true}
							placeholder={'PLEASE SELECT YOUR MODEL'}
							defaultValue={dataSchema.product_model}
						/>
						<div className='input_error_message'>
							{errors?.product_model && errors?.product_model[0]}
						</div>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							onChange={_value =>
								dataSchemaHandler('product_serial_number', _value)
							}
							placeholder={'SERIAL NUMBER'}
							required={true}
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
							data-toggle='modal'
							onClick={() => setModalCondition(true)}
							data-target='#serial-numbers'>
							<FontAwesomeIcon
								icon={faCircleInfo}
								style={{ width: '25px' }}
								size={'xl'}
							/>
							<span className='ms-2'>Where do I find the serial number?</span>
						</button>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomSelectBox
							options={warrantyOption}
							onChange={_value =>
								dataSchemaHandler('product_warranty', _value?.value)
							}
							title={'IS YOUR PRODUCT UNDER WARRANTY?'}
						/>
						<div className='input_error_message'>
							{errors?.product_warranty && errors?.product_warranty[0]}
						</div>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomSelectBox
							options={serviceTypeOption}
							onChange={_value =>
								dataSchemaHandler('service_type', _value?.value)
							}
							title={'TYPE OF SERVICE REQUEST'}
						/>
						<div className='input_error_message'>
							{errors?.service_type && errors?.service_type[0]}
						</div>
					</div>
					<div className='col-12 mb-10'>
						<textarea
							onChange={e => dataSchemaHandler('text', e.target.value)}
							required
							maxLength={300}
							placeholder='DESCRIPTION OF SUPPORT'
							className='form-container-inner-input input_text_area_box text_area_config'
						/>
						<span className='fs-9'>
							If television related, please include firmware version
						</span>
						<div className='input_error_message'>
							{errors?.text && errors?.text[0]}
						</div>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 mb-10 file-upload'>
						<label htmlFor='file-upload'>
							SUPPORTING PHOTOS OR IMAGES OF THE PROBLEM
						</label>
						<span>Max 3 Images (Optional)</span>
						{dataSchema?.image?.map(item => (
							<div className='file-upload-box mb-3 position-relative'>
								<button
									type={'button'}
									className='remove_img'
									onClick={() => removeOneImage(item)}>
									<FontAwesomeIcon icon={faXmark} />
								</button>
								<img src={item} />
							</div>
						))}
						{dataSchema?.image?.length < 3 && (
							<div>
								<div className='file-upload-box position-relative'>
									{imageLoading && (
										<div className='image_loading'>
											<Spinner size={35} />
										</div>
									)}
									{file ? (
										<>
											<button
												type={'button'}
												className='remove_img'
												onClick={() => setFile(null)}>
												<FontAwesomeIcon icon={faXmark} />
											</button>
											<img src={URL.createObjectURL(file)} />
										</>
									) : (
										<>
											<input
												type='file'
												className=' position-absolute top-0 start-0 opacity-0 w-100 h-100'
												style={{ zIndex: 1 }}
												id='contact-file-input'
												accept='.jpg, .png, .jpeg'
												multiple='multiple'
												onChange={e => uploadFile(e.target.files[0])}
											/>
											<div>Drag & Drop a File Here</div>
											<p>Upload file here</p>
										</>
									)}
								</div>
								<div className='input_error_message'>
									{errors?.text && errors?.text[0]}
								</div>
							</div>
						)}
					</div>
					<div className='col-12 text-center my-9'>
						<button
							type='submit'
							disabled={loading}
							className='n-btn outline-black d-flex mx-auto transparent py-2 px-4'>
							<span>SUBMIT</span>
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
					modalHandler={setModalCondition}
				/>
			)}
		</>
	)
}

export default ProductSupportServiceRegister

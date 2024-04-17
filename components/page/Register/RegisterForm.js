import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleInfo,
	faCheck,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import CustomSelectBox from 'components/common/selectBox'
import CustomInput from 'components/common/Input'
import RoleModal from '../ContactUs/RoleModal'
import { GetCategoriesApi, GetSeriesModelsApi } from 'services/category'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'
import axios from 'axios'
import { getFirmWareModels } from 'services/servicePortal'
import DownloadIcon from 'components/icons/DownloadIcon'
import DownloadIconV2 from 'components/icons/DownloadIconV2'
import RegisterFormSelectBox from './RegisterFormSelectBox'
import PurchasedFromSelectBox from './PurchasedFromSelectBox'
import { uploadToS3 } from 'services/s3'
// import PDFDownload from 'public/assets/pdf/How_to_identify_HVAC_model_and_serial_number.pdf'

function RegisterForm({ data }) {
	let { structure } = data
	let router = useRouter()
	const [defaultMode, setDefaultMode] = useState(false)
	const [categories, setCategories] = useState([])
	const [categoryId, setCategoryId] = useState(null)
	const [series, setSeries] = useState([])
	const [models, setModels] = useState([])
	const [activeCheckBox, setActiveCheckBox] = useState(false)
	const [addClassName, setAddClassName] = useState(false)
	const [modalCondition, setModalCondition] = useState(false)
	const [loading, setLoading] = useState(false)
	const [file, setFile] = useState(null)
	const [imageLoading, setImageLoading] = useState(null)
	const [dataSchema, setDataSchema] = useState({
		first_name: '',
		last_name: '',
		series: '',
		email: '',
		phone_number: '',
		postal_code: '',
		product_category: '',
		product_model: '',
		product_serial_number: '',
		purchased_from: '',
		date_of_purchase: '',
		receipt_image: '',
		future_news: '0'
	})
	const [errors, setErrors] = useState(null)
	const [tickedSended, setTickedSended] = useState(null)

	useEffect(() => {
		if (router.query?.SerialNumber && router.query?.InternalModelNumber) {
			!router.query?.ProductCategory && getCategories()

			if (router.query?.SerialNumber) {
				getModelsBySerialNumber()
			}
		} else {
			setDefaultMode(true)
		}
	}, [])

	useEffect(() => {
		if (router.query?.InternalModelNumber) {
			setDataSchema({
				...dataSchema,
				product_category: router.query?.ProductCategory,
				product_serial_number: router.query?.SerialNumber
			})
			if (models?.length === 1) {
				setDataSchema({
					...dataSchema,
					product_model: models[0]?.name
				})
			} else if (models?.length >= 1) {
				setDataSchema({
					...dataSchema,
					product_model: null
				})
			}
		} else {
			setDataSchema({
				...dataSchema,
				product_model: null
			})
		}
	}, [models])

	useEffect(() => {
		if (defaultMode) {
			getCategories(router.query?.ProductCategory)
			if (router.query?.SerialNumber) {
				getModelsBySerialNumber()
			}
		}
	}, [defaultMode])

	const dataSchemaHandler = (_key, _value) => {
		if (router.query.SerialNumber && _key === 'product_model') {
			setDataSchema({
				...dataSchema,
				product_model: _value?.name
				// series: _value?.series?.length ? _value?.series[0]?.name : null
			})
			return
		}

		if (_key === 'product_model') {
			setDataSchema({
				...dataSchema,
				product_model: _value?.model,
				series: _value?.series?.length ? _value?.series[0]?.name : null
			})
		} else {
			setDataSchema({ ...dataSchema, [_key]: _value })
		}
	}

	const getCategories = async _value => {
		setCategories('loading')
		try {
			let response = await GetCategoriesApi(router)
			if (response.status === 200) {
				setCategories(response.data.data)
				if (defaultMode) {
					const selectedCategory = response.data.data.find(
						item => item.name.toLowerCase().replaceAll(' ', '-') === _value
					)
					getSeriesModels(selectedCategory?.id)
				}
			}
		} catch (error) {
			setCategories([])
			console.log(error)
		}
	}

	const getModelsBySerialNumber = async () => {
		try {
			let response = await getFirmWareModels(router.query?.SerialNumber)
			if (response.status === 200) {
				let result = response?.data?.model?.alias.map(item => ({
					...item,
					name: item?.title
				}))
				result.push({
					id: response?.data?.model?.id,
					title: response?.data?.model?.title,
					name: response?.data?.model?.title
				})

				setModels(result)
			}
		} catch (error) {
			if (error?.response?.status === 404) {
				toast.error(error?.response?.data?.message)
				setDefaultMode(true)
			}
			console.log(error)
		}
	}

	const getSeriesModels = async _categoryId => {
		setSeries('loading')
		setModels('loading')
		try {
			let response = await GetSeriesModelsApi(
				router,
				`category_id=${_categoryId}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}&status[]=1&status[]=3`
			)
			if (response.status === 200) {
				let data = response?.data?.modelSeries?.map(item => ({
					...item,
					name: item.model
				}))
				setModels(
					data?.sort((a, b) =>
						sortWorkHandler(a.name).localeCompare(sortWorkHandler(b.name))
					)
				)
			}
		} catch (error) {
			setSeries([])
			setModels([])
			console.log(error)
		}
	}

	const getModels = async _seriesId => {
		setModels('loading')
		try {
			let response = await GetSeriesModelsApi(
				router,
				`category_id=${categoryId}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}&series_id=${_seriesId}`
			)
			if (response.status === 200) {
				setModels(
					response.data.models.map(item => {
						return { name: item }
					})
				)
			}
		} catch (error) {
			setModels([])
			console.log(error)
		}
	}

	const submitData = async e => {
		e.preventDefault()
		setErrors(null)
		setLoading(true)
		try {
			let response = router.query?.ProductCategory
				? await axios.post(
						`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F63a195c3610ca`,
						{
							FirstName: dataSchema.first_name,
							InternalModelNumber:
								router.query?.InternalModelNumber || dataSchema.product_model,
							LastName: dataSchema.last_name,
							ModelNumber: dataSchema.product_model,
							PostalZipCode: dataSchema.postal_code,
							ProductType: dataSchema.product_category,
							SerialNumber: dataSchema.product_serial_number,
							Email: dataSchema.email,
							phone_number: dataSchema.phone_number,
							receipt_image: dataSchema.receipt_image,
							future_news: dataSchema.future_news,
							product_category: dataSchema.product_category,
							date_of_purchase: dataSchema.date_of_purchase,
							purchased_from: dataSchema.purchased_from,
							series: dataSchema.series
						}
				  )
				: await axios.post(
						`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F639711a39b936`,
						{ ...dataSchema, future_news: activeCheckBox ? '1' : '0' }
				  )

			if (response.status === 200) {
				e.target.reset()
				router.push('/support/register/registration-confirmation');
				resetData()
				// toast.success('Registered Successfully', {
				// 	toastId: 'ticket-sended'
				// })
				//setTickedSended(true)
			} else {
				toast.error("Registeration wasn't Successful", {
					toastId: 'ticket-error'
				})
				setTickedSended(false)
			}
			//setLoading(false)
		} catch (error) {
			setTickedSended(false)
			toast.error("Registeration wasn't Successful", {
				toastId: 'ticket-error'
			})
			setLoading(false)
			if (error?.response?.status === 422) {
				setErrors(error?.response?.data?.errors)
			}
		}
		setTimeout(() => {
			setTickedSended(null)
		}, 3000)
	}
	const resetData = () => {
		setActiveCheckBox(false)
		setAddClassName(false)
		setFile(null)
		setDataSchema({
			first_name: null,
			last_name: null,
			series: null,
			email: null,
			phone_number: null,
			postal_code: null,
			product_category: router.query?.ProductCategory,
			product_model: router.query?.model || null,
			product_serial_number: router.query?.SerialNumber,
			purchased_from: null,
			date_of_purchase: null,
			receipt_image: null,
			future_news: '0'
		})
	}

	const uploadFile = async e => {
		setFile(e.target.files[0])
		setImageLoading(true)

		try {
			const downlaodLink = await uploadToS3(e.target.files[0])
			if (downlaodLink) {
				toast.success('image uploaded', { toastId: 'image-uploaded' })
				dataSchemaHandler('receipt_image', downlaodLink)
			}
			setImageLoading(false)
		} catch (error) {
			setImageLoading(false)

			toast.error("The photo wasn't uploaded successfully ", {
				toastId: 'image-failed'
			})
			console.log(error)
		}
	}

	const sortWorkHandler = _data => {
		let position = ''
		for (const word of _data.split('')) {
			if (/[a-zA-Z]/.test(word)) {
				position = _data.split('').indexOf(word)
				return _data.slice(position) ? _data.slice(position) : ''
			}
		}
		return ''
	}

	const purchased_by = ['Best Buy','Amazon','Brands Mart']
	return (
		<section className="support-register">
			<div className='container form-container px-8 px-md-20 mt-20 py-10'>
				<article className='article'>
					<h2 className='text-center mb-3'>{structure?.title?.value}</h2>
					<p className='text-center mb-17'>Get started by registering your Hisense product.</p>
				</article>
				<form
					action=''
					onSubmit={submitData}
					className='form-container-inner row active'
					id='form-tab-1'>
					{!defaultMode && router.query?.ProductCategory ? (
						<div className='col-12 col-md-6 mb-4'>
							<CustomInput
								placeholder={'Product Category'}
								required={true}
								disabled={dataSchema?.product_category}
								value={dataSchema?.product_category}
							/>
						</div>
					) : (
						<div className='col-12 col-md-6 mb-4 custom-select-box'>
							<CustomSelectBox
								title={
									router.query?.type
										? router.query?.type || 'Select Your Product Category'
										: dataSchema?.product_category ||
										  'Select Your Product Category'
								}
								required={true}
								options={categories}
								onChange={_value => {
									dataSchemaHandler('product_category', _value?.name)
									getSeriesModels(_value?.id)
								}}
							/>
							<div className='input_error_message'>
								{errors?.product_category && errors?.product_category[0]}
							</div>
						</div>
					)}

					{/* {series?.length !== 0 && (
						<div className='col-12 mb-4 custom-select-box'>
							<CustomSelectBox
								title={'PLEASE SELECT YOUR SERIES'}
								required={true}
								options={series}
								onChange={_value => {
									dataSchemaHandler('series', _value.name)
									getModels(_value.id)
								}}
							/>
							<div className='input_error_message'>
								{errors?.product_model && errors?.product_model[0]}
							</div>
						</div>
					)} */}
					{!defaultMode &&
						router.query?.InternalModelNumber &&
						!router.query?.SerialNumber ? (
						<div className='col-12 col-md-6 mb-4'>
							<CustomInput
								placeholder={'Select Your Product Model'}
								required={true}
								disabled={dataSchema?.product_model}
								value={dataSchema?.product_model}
							/>
						</div>
					) : models === 'loading' ||
							(Array.isArray(models) && models?.length !== 0) ? (
								<div className='col-12 col-md-6 mb-4'>
									<fieldset>
							<RegisterFormSelectBox
								rightText=""
								placeholder={'Select Your Product Model'}
								isSearchable
								required={true}
								options={models}
								dataSchemaValue={dataSchema?.product_model}
								onValueClear={dataSchema?.product_category}
								onChange={_value => {
									dataSchemaHandler('product_model', _value)
								}}
										/>
										{dataSchema?.product_category === 'Air Products' ? (<span className="additional-text">(Outdoor Model for split system)</span>) : null}
							<div className='input_error_message'>
								{errors?.product_model
									? errors?.product_model[0] +
									' Please make sure you have selected a product model from the list.'
									: router.query?.ProductCategory &&
									errors?.ModelNumber &&
									errors?.ModelNumber[0] +
									' Please make sure you have selected a product model from the list.'}
							</div>
						</fieldset>
								</div>
						
						) : (
							<div className='col-12 col-md-6 mb-4'>
						<fieldset disabled className="disabled-box">
							<RegisterFormSelectBox
								rightText=""
								placeholder={'Select Your Product Model'}
								isSearchable
								required={true}
								options={models}
								dataSchemaValue={dataSchema?.product_model}
								onValueClear={dataSchema?.product_category}
								onChange={_value => {
									dataSchemaHandler('product_model', _value)
								}}
										/>
										{dataSchema?.product_category === 'Air Products' ? (<span className="additional-text">(Outdoor Model for split system)</span>) : null}
							<div className='input_error_message'>
								{errors?.product_model
									? errors?.product_model[0] +
									' Please make sure you have selected a product model from the list.'
									: router.query?.ProductCategory &&
									errors?.ModelNumber &&
									errors?.ModelNumber[0] +
									' Please make sure you have selected a product model from the list.'}
							</div>
									</fieldset>
									</div>
					)}
          
          <div className='col-12 col-md-6 mb-4'>
						<CustomInput
							placeholder={'First Name'}
							onChange={_value => dataSchemaHandler('first_name', _value)}
							required={true}
							value={dataSchema.first_name}
						/>
						<div className='input_error_message'>
							{errors?.first_name && errors?.first_name[0]}
						</div>
					</div>
					<div className='col-12 col-md-6 mb-4'>
						<CustomInput
							placeholder={'Serial Number'}
							required={false}
							disabled={
								router.query?.SerialNumber &&
								router.query?.SerialNumber.length > 0
							}
							value={dataSchema.product_serial_number}
							onChange={_value =>
								dataSchemaHandler('product_serial_number', _value)
							}
            />
            <button
							className='modal-btn mt-2 d-block'
							type='button'
							onClick={() => setModalCondition(true)}>
							<FontAwesomeIcon
								icon={faCircleInfo}
								style={{ width: '25px' }}
								size={'xl'}
							/>
							<span className='ms-2 i-button'>Where do i find my model number?</span>
						</button>
					</div>
	
					<div className='col-12 col-md-6 mb-4'>
						<CustomInput
							placeholder={'Last Name'}
							onChange={_value => dataSchemaHandler('last_name', _value)}
							required={true}
							value={dataSchema.last_name}
						/>
						<div className='input_error_message'>
							{errors?.last_name && errors?.last_name[0]}
						</div>
					</div>
					<div className='col-12 col-md-6 mb-4'>
						<CustomInput
							placeholder={'Email'}
							onChange={_value => dataSchemaHandler('email', _value)}
							required={true}
							type={'email'}
							value={dataSchema.email}
						/>
						<div className='input_error_message'>
							{errors?.email && errors?.email[0]}
						</div>
					</div>
					<div className='col-12 col-md-6 mb-4'>
						<CustomInput
							placeholder={'Postal Code/ZIP'}
							onChange={_value => dataSchemaHandler('postal_code', _value)}
							required={true}
							type='number'
							value={dataSchema.postal_code}
						/>
						<div className='input_error_message'>
							{errors?.postal_code && errors?.postal_code[0]}
						</div>
					</div>
					<div className='col-12 col-md-6 mb-4'>
						<CustomInput
							placeholder={'Phone Number'}
							required={true}
							onChange={_value => dataSchemaHandler('phone_number', _value)}
							value={dataSchema.phone_number}
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
					<div className='col-12 col-md-6 mb-4'>
						<CustomInput
							placeholder={`Purchased Date`}
							type='date'
							onChange={_value => dataSchemaHandler('date_of_purchase', _value)}
							required={true}
							value={dataSchema.date_of_purchase}
						/>
						<div className='input_error_message'>
							{errors?.date_of_purchase && errors?.date_of_purchase[0]}
						</div>
					</div>
					<div className='col-12 mb-10 file-upload position-relative'>
						<label className="input-label">Upload Receipt</label>
						<div className='file-upload-box position-relative'>
							{imageLoading && (
								<div className='image_loading'>
									<Spinner size={35} />
								</div>
							)}
							{file ? (
								<>
									<button className='remove_img' onClick={() => setFile(null)}>
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
										multiple={true}
										onChange={uploadFile}
									/>
										<div className="file-upload-info">
											<h6>Upload Receipt</h6>
											<p>or drag and drop file</p>
									</div>
								</>
							)}
						</div>
						<div className='input_error_message'>
							{errors?.receipt_image && errors?.receipt_image[0]}
						</div>
					</div>
					<div className={`col-12 mb-6 news-check text-center justify-content-center ${addClassName ? "active" : ""}`}>
						<span
							className='form-checkbox-span'
							onClick={() => {
								setActiveCheckBox(!activeCheckBox)
								dataSchemaHandler('future_news', !activeCheckBox ? '1' : '0')
								setAddClassName(addClassName ? false : true)
							}}>
							{/* <i className='fa-solid fa-check d-none' id='form-checkbox-check'></i> */}
							{activeCheckBox && <FontAwesomeIcon icon={faCheck} />}
						</span>
						<label htmlFor='news'>
							<input
								type='checkbox'
								name='news'
								id='form-checkbox-input'
								className='d-none acceptance-check'
							/>
							Sign up for special deals, news, and important product
							information.
						</label>
					</div>
					<div className='col-12 text-center my-6'>
						<button
							disabled={loading}
							type='submit'
							className='n-btn outline-black  mx-auto align-items-center text-center'>
							{loading ? (<Spinner size={25} />) : (<span className='underline-on-hover'>
								{structure?.subtitle?.value}
							</span>)}
						</button>
						{tickedSended === true ? (
							<div className='mt-3' style={{ color: 'green' }}>
								Registered Successfully
							</div>
						) : tickedSended === false ? (
							<div className='mt-3' style={{ color: 'red' }}>
								Registeration wasn't Successful
							</div>
						) : null}
					</div>
				</form>
			</div>
			{modalCondition && (
				<RoleModal
					data={structure?.modelText?.value}
					modalHandler={setModalCondition}
					greenText={dataSchema?.product_category === 'Air Products'}
				/>
			)}
		</section>
	)
}

export default RegisterForm

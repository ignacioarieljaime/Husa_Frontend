import { useEffect, useState } from 'react'
import ProductSupportRegisterTab from './ProductSupportRegisterTab'
import ProductSupportServiceRegister from './ProductSupportServiceRegister'
import LaserInstallationDropDownSelectBox from '../LaserTvInstallation/LaserInstallationDropDownSelectBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'react-bootstrap'
import WIdeTv from 'components/icons/WIdeTv'
import UserCircleOutline from 'components/icons/UserCircleOutline'
import CardLayout from './CardLayout'
import RoleModal from '../ContactUs/RoleModal'
import CustomInput from 'components/common/Input'
import axios from 'axios'
import { uploadToS3 } from 'services/s3'
import { toast } from 'react-toastify'

function ProductSupportRegister({ pim, data }) {
	const { structure } = data
	const [formCondition, setFormCondition] = useState(false)
	const [formDisplay, setFormDisplay] = useState()
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
		state: null
	})
	const [imageLoading, setImageLoading] = useState(false)
	const [loading, setLoading] = useState(false)
	const [file, setFile] = useState(null)
	const [errors, setErrors] = useState(null)
	const [tickedSended, setTickedSended] = useState(null)
	const [inputFocused, setInputFocused] = useState(false)
	const [formattedPhoneNumber, setFormattedPhoneNumber] = useState()

	const formatPhoneNumber = () => {
		if (!formattedPhoneNumber) {
			setDataSchema({ ...dataSchema, phone_number: null })
			return formattedPhoneNumber
		}
		const phoneNumber = formattedPhoneNumber.replace(/[^\d]/g, '')

		setDataSchema({ ...dataSchema, phone_number: phoneNumber })

		const phoneNumberLength = phoneNumber.length

		if (phoneNumberLength < 4) return phoneNumber

		if (phoneNumberLength < 7) {
			return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
		}

		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
			3,
			6
		)}-${phoneNumber.slice(6, 10)}`
	}

	useEffect(() => {
		setFormattedPhoneNumber(formatPhoneNumber())
	}, [formattedPhoneNumber])

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
			future_news: '0',
			state: null
		})
	}

	const uploadFile = async e => {
		setFile(e.target.files[0])
		setImageLoading(true)

		try {
			const downlaodLink = await uploadToS3(e.target.files[0])

			if (downlaodLink) {
				toast.success('file uploaded', { toastId: 'image-uploaded' })
				dataSchemaHandler('receipt_image', downlaodLink)
				// setFile(null)
			}
			setImageLoading(false)
		} catch (error) {
			setFile(null)
			setImageLoading(false)

			toast.error("The photo wasn't uploaded successfully ", {
				toastId: 'image-failed'
			})
			console.log(error)
		}
	}

	const states = [
		{ name: 'Alabama', value: 'AL' },
		{ name: 'Alaska', value: 'AK' },
		{ name: 'Arizona', value: 'AZ' },
		{ name: 'Arkansas', value: 'AR' },
		{ name: 'California', value: 'CA' },
		{ name: 'Colorado', value: 'CO' },
		{ name: 'Connecticut', value: 'CT' },
		{ name: 'Delaware', value: 'DE' },
		{ name: 'Florida', value: 'FL' },
		{ name: 'Georgia', value: 'GA' },
		{ name: 'Hawaii', value: 'HI' },
		{ name: 'Idaho', value: 'ID' },
		{ name: 'Illinois', value: 'IL' },
		{ name: 'Indiana', value: 'IN' },
		{ name: 'Iowa', value: 'IA' },
		{ name: 'Kansas', value: 'KS' },
		{ name: 'Kentucky', value: 'KY' },
		{ name: 'Louisiana', value: 'LA' },
		{ name: 'Maine', value: 'ME' },
		{ name: 'Maryland', value: 'MD' },
		{ name: 'Massachusetts', value: 'MA' },
		{ name: 'Michigan', value: 'MI' },
		{ name: 'Minnesota', value: 'MN' },
		{ name: 'Mississippi', value: 'MS' },
		{ name: 'Missouri', value: 'MO' },
		{ name: 'Montana', value: 'MT' },
		{ name: 'Nebraska', value: 'NE' },
		{ name: 'Nevada', value: 'NV' },
		{ name: 'New Hampshire', value: 'NH' },
		{ name: 'New Jersey', value: 'NJ' },
		{ name: 'New Mexico', value: 'NM' },
		{ name: 'New York', value: 'NY' },
		{ name: 'North Carolina', value: 'NC' },
		{ name: 'North Dakota', value: 'ND' },
		{ name: 'Ohio', value: 'OH' },
		{ name: 'Oklahoma', value: 'OK' },
		{ name: 'Oregon', value: 'OR' },
		{ name: 'Pennsilvania', value: 'PA' },
		{ name: 'Rhode Island', value: 'RI' },
		{ name: 'South Carolina', value: 'SC' },
		{ name: 'South Dakota', value: 'SD' },
		{ name: 'Tennessee', value: 'TN' },
		{ name: 'Texas', value: 'TX' },
		{ name: 'Utah', value: 'UT' },
		{ name: 'Vermont', value: 'VT' },
		{ name: 'Virginia', value: 'VA' },
		{ name: 'Washington', value: 'WA' },
		{ name: 'West Virginia', value: 'WV' },
		{ name: 'Wisconsin', value: 'WI' },
		{ name: 'Wyoming', value: 'WY' }
	]
	return (
		<section id={data.name + data.id} className={formDisplay && 'd-none'}>
			<div className='product_support_register_form'>
				<div className='content'>
					<div>
						<h4 className='title'>Register {pim?.name}</h4>
						<p className='subtitle'>
							Get started with registering your Hisense product.{' '}
						</p>
					</div>
					<div className='forms'>
						<CardLayout title='Product Information' icon={<WIdeTv />}>
							<div className='d-flex justify-content-start align-items-start flex-wrap px-md-4 gap-x-4 gap-y-8'>
								<div className='form_field'>
									<div className='form_select_field z-3'>
										<LaserInstallationDropDownSelectBox
											options={[
												{ name: dataSchema.series, value: dataSchema.series }
											]}
											disabled
											value={dataSchema.series}
											placeholder='Product Name*'
											disableDropdownArrow
											onChange={newValue =>
												dataSchemaHandler('series', newValue.name)
											}
										/>
										{errors?.series ? (
											<p className='error'>{errors?.series}</p>
										) : null}
									</div>
								</div>
								<div className='form_field'>
									<div className='form_select_field z-2'>
										<LaserInstallationDropDownSelectBox
											options={[
												{
													name: dataSchema.product_model,
													value: dataSchema.product_model
												}
											]}
											disabled
											disableDropdownArrow
											value={dataSchema.product_model}
											placeholder='Product Model*'
											onChange={newValue =>
												dataSchemaHandler('product_model', newValue.name)
											}
										/>
										{errors?.product_model ? (
											<p className='error'>{errors?.product_model}</p>
										) : null}
									</div>
								</div>
								<div className='form_field'>
									<div className='form_text_field'>
										<input
											onChange={e =>
												dataSchemaHandler(
													'product_serial_number',
													e.target.value
												)
											}
											name='product_serial_number'
											type='text'
											required={true}
											placeholder='Serial Number'
										/>
										{errors?.product_serial_number ? (
											<p className='error'>{errors?.product_serial_number}</p>
										) : null}
									</div>
								</div>
								<div className='form_field'>
									<button
										className='modal_btn'
										type='button'
										onClick={() => setModalCondition(state => !state)}>
										<FontAwesomeIcon
											icon={faCircleInfo}
											style={{ width: '25px' }}
											size={'xl'}
										/>
										<span style={{ paddingTop: '2px' }}>
											Where do I find the serial number?
										</span>
									</button>
								</div>
								<div className='form_field'>
									<div className='form_select_field z-1'>
										<LaserInstallationDropDownSelectBox
											options={[{}, {}, {}, {}]}
											disabledOptions={[{ name: 'Where did you purchase?' }]}
											value={dataSchema.purchased_from}
											placeholder='Where did you purchase?'
											onChange={newValue =>
												dataSchemaHandler('purchased_from', newValue.name)
											}
										/>
										{errors?.purchased_from ? (
											<p className='error'>{errors?.purchased_from}</p>
										) : null}
									</div>
								</div>
								<div className='form_field position-relative'>
									<div
										className='form_text_field date_input text-start'
										style={{ padding: '10px' }}>
										<label
											className={` ${
												inputFocused || dataSchema.date_of_purchase
													? 'focused'
													: ''
											}`}>
											Purchase Date*
										</label>
										<CustomInput
											onFocus={() => setInputFocused(true)}
											onBlur={() => setInputFocused(false)}
											type={'date'}
											onChange={_value =>
												dataSchemaHandler('date_of_purchase', _value)
											}
											value={dataSchema.date_of_purchase}
											placeholder={'Purchase Date*'}
										/>
										{errors?.date_of_purchase ? (
											<p className='error'>{errors?.date_of_purchase}</p>
										) : null}
									</div>
								</div>
								<div className='form_field file-upload position-relative text-start'>
									<label className='laser_label'>Receipt Photo</label>
									<div className='d-flex flex-wrap gap-2'>
										<div
											style={{
												width: '100%'
											}}
											className='file-upload-box position-relative'>
											{imageLoading ? (
												<div className='image_loading'>
													<Spinner size={'lg'} />
												</div>
											) : file ? (
												<>
													<button
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
														onChange={uploadFile}
													/>
													<article className='d-flex justify-content-center align-items-center flex-wrap'>
														<p>Drop files to attach, or</p>
														<button
															className={`n-btn outline-black ms-3  px-6 ${
																dataSchema?.receipt_image?.length % 2
																	? 'py-2'
																	: 'py-4'
															}`}>
															Browse
														</button>
													</article>
												</>
											)}
										</div>
									</div>
									{errors?.receipt_image ? (
										<p className='error'>{errors?.receipt_image}</p>
									) : null}
								</div>
							</div>
						</CardLayout>

						<CardLayout
							title='Personal Information'
							icon={<UserCircleOutline />}>
							<div className='d-flex justify-content-center align-items-center flex-wrap px-md-4 gap-x-4 gap-y-8'>
								<div className='form_field'>
									<div className='form_text_field'>
										<input
											onChange={e =>
												dataSchemaHandler('first_name', e.target.value)
											}
											name='first_name'
											type='text'
											required={true}
											placeholder='First Name'
										/>
										{errors?.first_name ? (
											<p className='error'>{errors?.first_name}</p>
										) : null}
									</div>
								</div>
								<div className='form_field'>
									<div className='form_text_field'>
										<input
											onChange={e =>
												dataSchemaHandler('last_name', e.target.value)
											}
											name='last_name'
											type='text'
											required={true}
											placeholder='Last Name'
										/>
										{errors?.last_name ? (
											<p className='error'>{errors?.last_name}</p>
										) : null}
									</div>
								</div>
								<div className='form_field'>
									<div className='form_text_field'>
										<input
											onChange={e => {
												setFormattedPhoneNumber(e.target.value)
											}}
											name='phone_number'
											type='text'
											value={formattedPhoneNumber}
											required={true}
											placeholder='Phone number'
										/>
										{errors?.phone_number ? (
											<p className='error'>{errors?.phone_number}</p>
										) : null}
									</div>
								</div>
								<div className='form_field'>
									<div className='form_text_field'>
										<input
											onChange={e => dataSchemaHandler('email', e.target.value)}
											name='email'
											type='email'
											required={true}
											placeholder='Email'
										/>
										{errors?.email ? (
											<p className='error'>{errors?.email}</p>
										) : null}
									</div>
								</div>
								<div className='form_field'>
									<div className='form_select_field z-4'>
										<LaserInstallationDropDownSelectBox
											options={states}
											disabledOptions={[{ name: 'State' }]}
											value={dataSchema.state}
											placeholder='State'
											onChange={newValue =>
												dataSchemaHandler('state', newValue.name)
											}
										/>
										{errors?.state ? (
											<p className='error'>{errors?.state}</p>
										) : null}
									</div>
								</div>
								<div className='form_field'>
									<div className='form_text_field'>
										<input
											onChange={e =>
												dataSchemaHandler('postal_code', e.target.value)
											}
											name='postal_code'
											type='number'
											required={true}
											placeholder='ZIP Code'
										/>
										{errors?.postal_code ? (
											<p className='error'>{errors?.postal_code}</p>
										) : null}
									</div>
								</div>
							</div>
						</CardLayout>
					</div>
					<div className='news_checkbox'>
						<button onClick={() => setFormCondition(prevState => !prevState)}>
							{formCondition && <span></span>}
						</button>
						<p>
							Yes, please keep me updated on news, offers, or future events.
						</p>
					</div>
					<div>
						<button className='n-btn primary submit_btn' onClick={submitData}>
							<span className='mx-1'>Register</span>
						</button>
					</div>
				</div>
			</div>
			{modalCondition && (
				<RoleModal
					extra={
						dataSchema?.product_category === 'Air Products' &&
						`<p style="color: #009e91;"><strong>Split AC & Heat Pump:</strong></p><p style="color: #009e91;">Side of outdoor unit​</p>`
					}
					data={structure?.modelText?.value}
					modalHandler={() => setModalCondition(false)}
				/>
			)}
			{/* <div className='container form-container px-8 px-md-20 mt-15'>
				<div className='d-flex justify-content-center align-items-center flex-nowrap mb-15'>
					<div className='me-6'>
						<button
							className={`tab-btn ${!formCondition && 'active'}`}
							id='tab-1'
							onClick={() => setFormCondition(false)}>
							{structure?.title?.value}
						</button>
					</div>
					<div className='ms-6'>
						<button
							className={`tab-btn ${formCondition && 'active'}`}
							id='tab-2'
							onClick={() => setFormCondition(true)}>
							{structure?.secondTitle?.value}
						</button>
					</div>
				</div>
				{formCondition ? (
					<ProductSupportServiceRegister
						data={structure}
						pim={pim}
						formHandler={setFormDisplay}
					/>
				) : (
					<ProductSupportRegisterTab
						data={structure}
						pim={pim}
						formHandler={setFormDisplay}
					/>
				)}
			</div> */}
		</section>
	)
}

export default ProductSupportRegister

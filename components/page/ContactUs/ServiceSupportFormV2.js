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
import RoleModal from './RoleModal'

let warrantyOption = [
	{ name: 'UNKNOWN', value: 'unknown' },
	{ name: 'YES', value: 'yes' },
	{ name: 'NO', value: 'no' }
]
let serviceTypeOption = [{ name: 'Technical Support', value: 'technical' }]

function ServiceSupportFormV2({ data, formHandler }) {
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
		product_category: null,
		product_model: null,
		product_serial_number: null,
		product_warranty: null,
		service_type: null,
		text: null,
		image: null
	})

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

	const getSeriesModels = async _categoryId => {
		setModels('loading')
		try {
			let response = await GetSeriesModelsApi(
				router,
				`category_id=${_categoryId}`
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

		setLoading(true)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/contact/support`,
				{ ...dataSchema }
			)
			if (response.status === 200) {
				toast.success('ticket sended', { toastId: 'submit_success' })
				e.target.reset()
				setDisabled(true)
			}
			setLoading(false)
		} catch (error) {
			toast.error('ticket didn"t sended', { toastId: 'submit_failed' })
			setLoading(false)
			console.log(error)
		}
	}

	const uploadFile = async _file => {
		setImageLoading(true)
		setFile(_file)
		const formData = new FormData()
		formData.append('attachment', _file)

		try {
			let response = await axios({
				method: 'post',
				url: process.env.NEXT_PUBLIC_ASSETS_API_ROUTE,
				data: formData,
				headers: { 'Content-Type': 'multipart/form-data' }
			})
			if (response.status === 200) {
				dataSchemaHandler('image', response.data.view_link)
				toast.success('image upload successfully')
				setImageLoading(false)
			}
		} catch (error) {
			toast.error("image didn't uploaded")
			setImageLoading(false)
			console.log(error)
		}
	}

	return (
		<>
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
				</div>{' '}
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
					<CustomSelectBox
						options={categories}
						title={'PLEASE SELECT YOUR PRODUCT'}
						onChange={_value => {
							dataSchemaHandler('product_category', _value.name)
							getSeriesModels(_value.id)
						}}
					/>
				</div>
				<div className='col-12 mb-10 '>
					<CustomSelectBox
						options={models}
						onChange={_value => dataSchemaHandler('product_model', _value.name)}
						title={'PLEASE SELECT YOUR MODEL'}
					/>
				</div>
				<div className='col-12 col-md-6 mb-10'>
					<CustomInput
						onChange={_value =>
							dataSchemaHandler('product_serial_number', _value)
						}
						placeholder={'SERIAL NUMBER'}
						required={true}
					/>
				</div>
				<div className='col-12 col-md-6 mb-10 d-flex'>
					<button
						className='modal-btn'
						type='button'
						data-toggle='modal'
						onClick={() => setModalCondition(true)}
						data-target='#serial-numbers'>
						<FontAwesomeIcon icon={faCircleInfo} size={'xl'} />
						<span className='ms-2'>Where do I find the serial number?</span>
					</button>
				</div>
				<div className='col-12 col-md-6 mb-10'>
					<CustomSelectBox
						options={warrantyOption}
						onChange={_value =>
							dataSchemaHandler('product_warranty', _value.value)
						}
						title={'IS YOUR PRODUCT UNDER WARRANTY?'}
					/>
				</div>
				<div className='col-12 col-md-6 mb-10'>
					<CustomSelectBox
						options={serviceTypeOption}
						onChange={_value => dataSchemaHandler('service_type', _value.value)}
						title={'TYPE OF SERVICE REQUEST'}
					/>
				</div>
				<div className='col-12 mb-10 description_of_support_input'>
					<label>Description Of Support</label>
					<span className='info'>
						If television related, please include firmware version
					</span>
					<textarea
						name=''
						cols='30'
						onChange={e => dataSchemaHandler('text', e.target.value)}
						rows='1'
						required
						placeholder='DESCRIPTION OF SUPPORT'
						className='form-container-inner-input'></textarea>

					<span className='input-error'>This field is required.</span>
				</div>
				<div className='col-12 mb-10 file-upload description_of_support_input'>
					<label htmlFor='file-upload '>
						SUPPORTING PHOTOS OR IMAGES OF THE PROBLEM
					</label>
					<span className='info'>Max 3 Images (Optional)</span>

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
									multiple='multiple'
									onChange={e => uploadFile(e.target.files[0])}
								/>
								<div>Drag & Drop a File Here</div>
								<p>Upload Images</p>
							</>
						)}
					</div>
				</div>
				<div className='col-12 text-center'>
					<button
						type='submit'
						disabled={loading}
						className={`d-flex mx-auto align-items-center btn btn-outline-dark fw-bold rounded-5 mb-20 py-3 px-4`}>
						<span> SUBMIT</span>
						{loading && <Spinner className={'ms-2'} size={25} />}
					</button>
				</div>
			</form>
			{modalCondition && (
				<RoleModal data={data?.text?.value} modalHandler={setModalCondition} />
			)}
		</>
	)
}

export default ServiceSupportFormV2

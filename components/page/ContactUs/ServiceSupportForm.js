import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
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
	{ name: 'YES', value: 'known' },
	{ name: 'NO', value: 'unknown' }
]
let serviceTypeOption = [{ name: 'Technical Support', value: 'technical' }]

function ServiceSupportForm({ formHandler }) {
	const router = useRouter()
	const [modalCondition, setModalCondition] = useState(false)
	const [disabled, setDisabled] = useState(false)
	const [categories, setCategories] = useState([])
	const [models, setModels] = useState([])
	const [loading, setLoading] = useState(false)
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
			let fileUploadCondition = await uploadFile()
			let response = await axios.post(
				'https://imcrm.dev-api.hisenseportal.com/api/hisense/contact/support',
				{ ...dataSchema, image: fileUploadCondition }
			)
			if (response.status === 200) {
				toast.success('ticket sended')
				formHandler(true)
				setDisabled(true)
			} else if (response.status === 422) {
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
				<div className='col-12 mb-10'>
					<textarea
						name=''
						cols='30'
						onChange={e => dataSchemaHandler('text', e.target.value)}
						rows='1'
						required
						placeholder='DESCRIPTION OF SUPPORT'
						className='form-container-inner-input'></textarea>
					<span className='fs-9'>
						If television related, please include firmware version
					</span>
					<span className='input-error'>This field is required.</span>
				</div>
				<div className='col-12 mb-10 file-upload'>
					<label htmlFor='file-upload'>
						SUPPORTING PHOTOS OR IMAGES OF THE PROBLEM
					</label>
					<span>Max 3 Images (Optional)</span>

					<div className='file-upload-box position-relative'>
						<input
							type='file'
							className=' position-absolute opacity-0 w-100 h-100'
							style={{ zIndex: 1 }}
							id='contact-file-input'
							accept='.jpg, .png, .jpeg, .pdf, .docx, .doc'
							multiple='multiple'
							onChange={e => setFile(e.target.files[0])}
						/>
						<div>Drag & Drop a File Here</div>
						<p>Upload Images</p>
					</div>
				</div>
				<div className='col-12 text-center'>
					<button
						disabled={loading}
						type='submit'
						className='form-submit-btn align-items-center mx-auto d-flex'>
						<span className='me-2'>SUBMIT</span>
						{loading && <Spinner size={25} />}
					</button>
				</div>
			</form>
			{modalCondition && <RoleModal modalHandler={setModalCondition} />}
		</>
	)
}

export default ServiceSupportForm

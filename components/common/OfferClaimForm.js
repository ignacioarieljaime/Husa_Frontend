import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleInfo,
	faCheck,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import CustomSelectBox from 'components/common/selectBox'
import CustomInput from 'components/common/Input'
import { GetCategoriesApi, GetSeriesModelsApi } from 'services/category'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'
import axios from 'axios'
import RoleModal from 'components/page/ContactUs/RoleModal'

let selectBox = [
	{
		name: 'Alabama'
	},
	{
		name: 'Alaska'
	},
	{
		name: 'Arizona'
	},
	{
		name: 'Arkansas'
	},
	{
		name: 'California'
	},
	{
		name: 'Colorado'
	},
	{
		name: 'Connecticut'
	},
	{
		name: 'Delaware'
	},
	{
		name: 'Florida'
	},
	{
		name: 'Georgia'
	},
	{
		name: 'Hawaii'
	},
	{
		name: 'Idaho'
	},
	{
		name: 'Illinois'
	},
	{
		name: 'Indiana'
	},
	{
		name: 'Iowa'
	},
	{
		name: 'Kansas'
	},
	{
		name: 'Kentucky'
	},
	{
		name: 'Louisiana'
	},
	{
		name: 'Maine'
	},
	{
		name: 'Maryland'
	},
	{
		name: 'Massachusetts'
	},
	{
		name: 'Michigan'
	},
	{
		name: 'Minnesota'
	},
	{
		name: 'Mississippi'
	},
	{
		name: 'Missouri'
	},
	{
		name: 'Montana'
	},
	{
		name: 'Nebraska'
	},
	{
		name: 'Nevada'
	},
	{
		name: 'New Hampshire'
	},
	{
		name: 'New Jersey'
	},
	{
		name: 'New Mexico'
	},
	{
		name: 'New York'
	},
	{
		name: 'North Carolina'
	},
	{
		name: 'North Dakota'
	},
	{
		name: 'Ohio'
	},
	{
		name: 'Oklahoma'
	},
	{
		name: 'Oregon'
	},
	{
		name: 'Pennsylvania'
	},
	{
		name: 'Rhode Island'
	},
	{
		name: 'South Carolina'
	},
	{
		name: 'South Dakota'
	},
	{
		name: 'Tennessee'
	},
	{
		name: 'Texas'
	},
	{
		name: 'Utah'
	},
	{
		name: 'Vermont'
	},
	{
		name: 'Virginia'
	},
	{
		name: 'Washington'
	},
	{
		name: 'West Virginia'
	},
	{
		name: 'Wisconsin'
	},
	{
		name: 'Wyoming'
	}
]

function OfferClaimForm({ data }) {
	let { structure } = data
	let router = useRouter()
	const [disabled, setDisabled] = useState(false)
	const [categories, setCategories] = useState([])
	const [activeCheckBox, setActiveCheckBox] = useState(false)
	const [modalCondition, setModalCondition] = useState(false)
	const [loading, setLoading] = useState(false)
	const [imageLoading, setImageLoading] = useState(false)
	const [file, setFile] = useState(null)
	const [dataSchema, setDataSchema] = useState({
		first_name: null,
		last_name: null,
		email: null,
		postal_code: null,
		phone_number: null,
		model_number: null,
		order_id: 0,
		date_of_purchase: null,
		future_news: 0,
		receipt_image: null,
		address: null,
		city: null,
		state: null
	})

	const dataSchemaHandler = (_key, _value) => {
		setDataSchema({ ...dataSchema, [_key]: _value })
	}

	const submitData = async e => {
		e.preventDefault()

		setLoading(true)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F6397146c0d259`,
				{ ...dataSchema }
			)
			if (response.status === 200) {
				toast.success('ticket sended')
				e.target.reset()
				setFile(null)
				setActiveCheckBox(false)
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

	const uploadFile = async e => {
		setImageLoading(true)
		const formData = new FormData()
		formData.append('attachment', e.target.files[0])
		setFile(e.target.files[0])

		try {
			let response = await axios({
				method: 'post',
				url: process.env.NEXT_PUBLIC_ASSETS_API_ROUTE,
				data: formData,
				headers: { 'Content-Type': 'multipart/form-data' }
			})
			if (response.status === 200) {
				dataSchemaHandler('receipt_image', response.data.view_link)
				setImageLoading(false)
				toast.success('image uploaded', { toastId: 'image-uploaded' })
			}
		} catch (error) {
			toast.error('image failed', { toastId: 'image-failed' })
			setImageLoading(false)
			console.log(error)
		}
	}

	return (
		<section className={disabled && `d-none`}>
			<div className='container form-container px-8 px-md-20 mt-20 py-10'>
				<h2 className='text-center mb-17'>{structure?.title?.value}</h2>
				<form
					action=''
					onSubmit={submitData}
					className='form-container-inner row active'
					id='form-tab-1'>
					<div className='row w-100 p-0'>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								placeholder={'MODAL NUMBER'}
								required={true}
								onChange={_value => dataSchemaHandler('model_number', _value)}
							/>
						</div>
						<div className='col-6  mb-10 d-flex'>
							<button
								className='modal-btn'
								type='button'
								onClick={() => setModalCondition(true)}>
								<FontAwesomeIcon icon={faCircleInfo} size={'xl'} />
								<span className='ms-2'>Where do I find the model number?</span>
							</button>
						</div>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								placeholder={'Order Id/Confirmation Number'}
								required={true}
								onChange={_value => dataSchemaHandler('order_id', _value)}
							/>
						</div>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								type='date'
								placeholder={'Date of Purchase'}
								required={true}
								onChange={_value =>
									dataSchemaHandler('date_of_purchase', _value)
								}
							/>
						</div>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								placeholder={'FIRST NAME'}
								required={true}
								onChange={_value => dataSchemaHandler('first_name', _value)}
							/>
						</div>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								placeholder={'LAST NAME'}
								required={true}
								onChange={_value => dataSchemaHandler('last_name', _value)}
							/>
						</div>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								placeholder={'EMAIL'}
								type={'email'}
								required={true}
								onChange={_value => dataSchemaHandler('email', _value)}
							/>
						</div>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								placeholder={'ADDRESS'}
								required={true}
								onChange={_value => dataSchemaHandler('address', _value)}
							/>
						</div>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								placeholder={'CITY'}
								required={true}
								onChange={_value => dataSchemaHandler('city', _value)}
							/>
						</div>

						<div className='col-6 mb-10 custom-select-box'>
							<CustomSelectBox
								title={'PLEASE SELECT YOUR STATE'}
								required={true}
								options={selectBox}
								onChange={_value => {
									dataSchemaHandler('state', _value.name)
								}}
							/>
						</div>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								placeholder={'ZIP'}
								required={true}
								onChange={_value => dataSchemaHandler('postal_code', _value)}
							/>
						</div>
						<div className='col-6 col-md-6 mb-10'>
							<CustomInput
								placeholder={'PHONE NUMBER'}
								required={true}
								onChange={_value => dataSchemaHandler('phone_number', _value)}
							/>
						</div>
					</div>

					<div className='col-12 mb-10 file-upload position-relative'>
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
										onChange={uploadFile}
									/>
									<div>Drag & Drop a File Here</div>
									<p>Upload Images</p>
								</>
							)}
						</div>
					</div>
					<div className='col-12 mb-10 news-check'>
						<span
							className='form-checkbox-span'
							onClick={() => {
								setActiveCheckBox(!activeCheckBox)
								dataSchemaHandler('future_news', !activeCheckBox ? '1' : '0')
							}}>
							{/* <i className='fa-solid fa-check d-none' id='form-checkbox-check'></i> */}
							{activeCheckBox && <FontAwesomeIcon icon={faCheck} />}
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
							disabled={loading}
							type='submit'
							className='form-submit-btn d-flex mx-auto border px-5 border-dark  align-items-center'>
							<span>SUBMIT</span>
							{loading && <Spinner className={'ms-2'} size={25} />}
						</button>
					</div>
				</form>
			</div>
			{modalCondition && (
				<RoleModal
					data={structure?.modelContent?.value}
					modalHandler={setModalCondition}
				/>
			)}
		</section>
	)
}

export default OfferClaimForm

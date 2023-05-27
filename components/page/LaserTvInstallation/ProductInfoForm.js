import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import LaserTv from 'components/icons/LaserTv'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import CardLayout from './CardLayout'
import LaserInstallationDropDownSelectBox from './LaserInstallationDropDownSelectBox'
import ProductInfoFormImageBox from './ProductInfoFormImageBox'

const ProductInfoForm = ({ data, dispatch, errors }) => {
	const [imageLoading, setImageLoading] = useState(null)
	const [file, setFile] = useState(null)

	const screenSizes = [
		{
			name: '90"',
			value: '90'
		},
		{
			name: '100"',
			value: '100'
		},
		{
			name: '120"',
			value: '120'
		}
	]
	const models = [
		{
			name: '120L9G-CINE120A',
			value: '120L9G-CINE120A'
		},
		{
			name: '100L9G-CINE100A',
			value: '100L9G-CINE100A'
		},
		{
			name: '100L9G-DLT100B',
			value: '100L9G-DLT100B'
		},
		{
			name: '120L5G-CINE120A',
			value: '120L5G-CINE120A'
		},
		{
			name: '100L5G-CINE100A',
			value: '100L5G-CINE100A'
		},
		{
			name: '100L5G-DLT100B',
			value: '100L5G-DLT100B'
		},
		{
			name: '90L5G-DLT90B',
			value: '90L5G-DLT90B'
		}
	]
	const retailers = [
		{
			name: 'Amazon',
			value: 'amazon'
		},
		{
			name: 'Adir international',
			value: 'adir_international'
		},
		{
			name: 'Best Buy',
			value: 'best_buy'
		},
		{
			name: 'BJs',
			value: 'bjs'
		},
		{
			name: 'B&H',
			value: 'b&h'
		},
		{
			name: 'Beach Camera',
			value: 'beach_camera'
		},
		{
			name: 'Brandsmart USA',
			value: 'brandsmart_usa'
		},
		{
			name: 'Costco',
			value: 'costco'
		},
		{
			name: 'Crutchfield',
			value: 'crutchfield'
		},
		{
			name: 'Electronic Express',
			value: 'electronic_express'
		},
		{
			name: 'Electroline wholesale',
			value: 'electroline_wholesale'
		},
		{
			name: 'Harco',
			value: 'harco'
		},
		{
			name: 'Hendley',
			value: 'hendley'
		},
		{
			name: 'Kings Appliance',
			value: 'kings_appliance'
		},
		{
			name: 'La curacao',
			value: 'la_curacao'
		},
		{
			name: 'Project Screen',
			value: 'project_screen'
		},
		{
			name: 'P.C Richard&Son',
			value: 'pc_richard&son'
		},
		{
			name: 'Samsclub',
			value: 'samsclub'
		},
		{
			name: 'Value Electronics',
			value: 'value_electronics'
		},
		{
			name: 'Walts',
			value: 'walts'
		},
		{
			name: 'World Wide Stereo',
			value: 'world_wide_stereo'
		},
		{
			name: 'Others',
			value: 'others'
		}
	]

	const uploadFile = async e => {
		setFile(e.target.files[0])
		setImageLoading(true)
		const formData = new FormData()
		formData.append('attachment', e.target.files[0])
		try {
			let response = await axios.post(
				process.env.NEXT_PUBLIC_ASSETS_API_ROUTE,
				formData,
				{ headers: { 'Content-Type': 'multipart/form-data' } }
			)
			if (response.status === 200) {
				toast.success('image uploaded', { toastId: 'image-uploaded' })
				dispatch({
					receipt_image: [...data?.receipt_image, response.data.view_link]
				})
				setFile(null)
			}
			setImageLoading(false)
		} catch (error) {
			setImageLoading(false)
			setFile(null)
			toast.error("The photo wasn't uploaded successfully ", {
				toastId: 'image-failed'
			})
			console.log(error)
		}
	}

	const removeOneImage = _image => {
		dispatch({
			receipt_image: data?.receipt_image.filter(item => item !== _image)
		})
	}

	return (
		<CardLayout title='Product Information' icon={<LaserTv />}>
			<div className='row mx-0'>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_select_field z-3'>
						<LaserInstallationDropDownSelectBox
							options={screenSizes}
							disabledOptions={[{ name: 'Laser TV Screen Size' }]}
							value={data.laser_tv_screen_size}
							placeholder='Laser TV Screen Size'
							onChange={newValue =>
								dispatch({ laser_tv_screen_size: newValue.name })
							}
						/>
						{errors?.laser_tv_screen_size ? (
							<p className='error'>{errors?.laser_tv_screen_size}</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_select_field z-2'>
						<LaserInstallationDropDownSelectBox
							options={models}
							disabledOptions={[{ name: 'Laser TV Model Number' }]}
							value={data.laser_tv_model_number}
							placeholder='Laser TV Model Number'
							onChange={newValue =>
								dispatch({ laser_tv_model_number: newValue.name })
							}
						/>
						{errors?.laser_tv_model_number ? (
							<p className='error'>{errors?.laser_tv_model_number}</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8 mb-md-0'>
					<div className='form_select_field z-1'>
						<LaserInstallationDropDownSelectBox
							options={retailers}
							disabledOptions={[{ name: 'Where did you purchase?' }]}
							value={data.purchased_from}
							placeholder='Where did you purchase?'
							onChange={newValue => dispatch({ purchased_from: newValue.name })}
						/>
						{errors?.purchased_from ? (
							<p className='error'>{errors?.purchased_from}</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 file-upload position-relative'>
					<label className='laser_label'>Receipt Photo</label>
					{data?.receipt_image?.map(item => (
						<div className='file-upload-box position-relative mb-3'>
							<button
								className='remove_img'
								onClick={() => removeOneImage(item)}>
								<FontAwesomeIcon icon={faXmark} />
							</button>
							<img src={item} />
						</div>
					))}
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
								<article className='d-flex justify-content-center align-items-center flex-wrap'>
									<p>Drop files to attach, or</p>
									<button className='n-btn outline-black ms-3 py-4 px-6'>
										Browse
									</button>
								</article>
							</>
						)}
					</div>
					{errors?.receipt_image ? (
						<p className='error'>{errors?.receipt_image}</p>
					) : null}
				</div>
			</div>
		</CardLayout>
	)
}

export default ProductInfoForm

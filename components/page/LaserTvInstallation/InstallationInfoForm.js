import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Calender from 'components/common/Calender'
import DropDownSelectBox from 'components/common/DropDownSelectBox'
import Wrench from 'components/icons/Wrench'
import React, { useState } from 'react'
import BooleanButtonGroup from './BooleanButtonGroup'
import CardLayout from './CardLayout'
import CustomInput from 'components/common/Input'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'
import axios from 'axios'

const InstallationInfoForm = ({ data, dispatch }) => {
	const [sortingMethod, setSortingMethod] = useState()
	const [imageLoading, setImageLoading] = useState(null)
	const [file, setFile] = useState(null)

	const options = [
		{
			name: 'Newest',
			value: 'newest'
		},
		{
			name: 'Oldest',
			value: 'oldest'
		}
	]

	const uploadFile = async e => {
		setFile(e.target.files[0])
		setImageLoading(true)
		const formData = new FormData()
		formData.append('attachment', e.target.files[0])
		console.log(formData)
		try {
			let response = await axios.post(
				process.env.NEXT_PUBLIC_ASSETS_API_ROUTE,
				{
					data: formData,
					headers: { 'Content-Type': 'multipart/form-data' }
				}
			)
			if (response.status === 200) {
				toast.success('image uploaded', { toastId: 'image-uploaded' })
				dispatch({ install_location_photo: response.data.view_link })
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

	return (
		<CardLayout title='Installation Information' icon={<Wrench />}>
			<div className='row mx-0'>
				<div className='col-12 col-md-6 mb-8'>
					<label className='laser_label'>Do you have a TV stand?</label>
					<BooleanButtonGroup
						status={data.tv_stand}
						onClick={newValue => dispatch({ tv_stand: newValue })}
					/>
					{data.tv_stand === false ? (
						<div className='error'>
							<p>
								We’re sorry, but a TV stand with a recommended height of 15”-20”
								and top surface of 26”L x 16”W (minimum) is required for
								installation.
							</p>
						</div>
					) : (
						<div className='tip'>
							<p>
								The recommended height is 15”-20”. The top surface minimum
								dimensions are 26”L x 16”W.
							</p>
						</div>
					)}
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<label className='laser_label'>
						Is a power outlet available near the installation location?
						(120V/60Hz)
					</label>
					<BooleanButtonGroup
						status={data.power_outlet}
						onClick={newValue => dispatch({ power_outlet: newValue })}
					/>
					{data.power_outlet === false ? (
						<div className='error'>
							<p>
								We’re sorry, but a power outlet of 120V/60Hz is required for
								installation.
							</p>
						</div>
					) : (
						<div className='tip'>
							<p>Power Outlet must be 120V/60Hz.</p>
						</div>
					)}
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<label className='laser_label'>
						Do you have sufficient wall space?
					</label>
					<BooleanButtonGroup
						status={data.wall_space}
						onClick={newValue => dispatch({ wall_space: newValue })}
					/>
					{data.wall_space === false ? (
						<div className='error'>
							<p>
								We’re sorry, but at least minimum wall space clearance above the
								TV stand is required for installation:
							</p>
							<ul>
								<li>108”W x 79”H (120” screen)</li>
								<li>90”W x 68”H (100” screen)</li>
								<li>82”W x 61”H (90” screen)</li>
							</ul>
						</div>
					) : (
						<div className='tip'>
							<p>
								Minimum wall space clearance above the TV stand is required for
								installation:
							</p>
							<ul>
								<li>108”W x 79”H (120” screen)</li>
								<li>90”W x 68”H (100” screen)</li>
								<li>82”W x 61”H (90” screen)</li>
							</ul>
						</div>
					)}
				</div>
				<div className='col-12 col-md-6 mb-8'></div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_select_field z-1'>
						<DropDownSelectBox
							options={options}
							value={data.install_location}
							title='Where to install?'
							onChange={newValue =>
								dispatch({ install_location: newValue.value })
							}
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8 file-upload position-relative'>
					<label className='laser_label'>Installation Location Photo</label>
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
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_select_field z-4'>
						<DropDownSelectBox
							options={options}
							value={data.wall_material}
							title='Material of Wall'
							onChange={newValue => dispatch({ wall_material: newValue.value })}
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_select_field z-3'>
						<DropDownSelectBox
							options={options}
							value={data.floor_type}
							title='Floor Type'
							onChange={newValue => dispatch({ floor_type: newValue.value })}
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8 mb-md-0'>
					<div className='form_select_field z-2'>
						<DropDownSelectBox
							options={options}
							value={data.internet_type}
							title='Wireless or Wired Internet'
							onChange={newValue => dispatch({ internet_type: newValue.value })}
						/>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='form_select_field z-1'>
						<CustomInput
							type='date'
							placeholder={'Expected Installation Date'}
							required={true}
							className='date_input'
							value={data.installation_date}
							onChange={newValue => dispatch({ installation_date: newValue })}
						/>
						<div className='tip mt-4'>
							<p>
								Please have your Laser TV near the area you wish to have it
								installed (preferably in its original box to keep it safe from
								damage).
							</p>
						</div>
					</div>
				</div>
			</div>
		</CardLayout>
	)
}

export default InstallationInfoForm

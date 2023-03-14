import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Calender from 'components/common/Calender'
import Wrench from 'components/icons/Wrench'
import React, { useState } from 'react'
import BooleanButtonGroup from './BooleanButtonGroup'
import CardLayout from './CardLayout'
import CustomInput from 'components/common/Input'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'
import axios from 'axios'
import LaserInstallationDropDownSelectBox from './LaserInstallationDropDownSelectBox'

const InstallationInfoForm = ({ data, dispatch, errors }) => {
	const [sortingMethod, setSortingMethod] = useState()
	const [imageLoading, setImageLoading] = useState(null)
	const [file, setFile] = useState(null)

	const installationLocation = [
		{
			name: 'Basement',
			value: 'basement'
		},
		{
			name: 'Living room',
			value: 'living_room'
		},
		{
			name: 'Bedroom',
			value: 'bedroom'
		},
		{
			name: 'Family room',
			value: 'family_room'
		},
		{
			name: 'Theater room',
			value: 'theater_room'
		},
		{
			name: 'Other',
			value: 'other'
		}
	]

	const materialOfWall = [
		{
			name: 'Drywall (depth > 0.4inch)',
			value: 'drywall'
		},
		{
			name: 'Concrete',
			value: 'concrete'
		},
		{
			name: 'Stone',
			value: 'stone'
		},
		{
			name: 'Plaster',
			value: 'plaster'
		},
		{
			name: 'Other',
			value: 'other'
		}
	]

	const FloorType = [
		{
			name: 'Wood',
			value: 'wood'
		},
		{
			name: 'Carpet',
			value: 'carpet'
		},
		{
			name: 'Tile',
			value: 'tile'
		},
		{
			name: 'Marble',
			value: 'marble'
		},
		{
			name: 'High gloss floor',
			value: 'high_gloss_floor'
		},
		{
			name: 'Other',
			value: 'other'
		}
	]

	const internetType = [
		{
			name: 'Wireless',
			value: 'wireless'
		},
		{
			name: 'Wire',
			value: 'wire'
		},
		{
			name: 'Other',
			value: 'other'
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
				dispatch({ installation_location_photo: response.data.view_link })
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

	const formatDate = (_year, _month, _day) => {
		console.log('year ', _year)
		console.log('month ', _month)
		console.log('day ', _day)
		if (_month > 12) {
			_month = 1
			_year += 1
		}
		console.log('year ', _year)
		console.log('month ', _month)
		console.log('day ', _day)
		const maxDate = new Date(`${_year}-${_month}-${_day}`).toJSON().slice(0, 10)
		console.log(new Date(`${_year}-${_month}-${_day}`))
		console.log(new Date(`${_year}-${_month}-${_day}`).toJSON())
		console.log(new Date(`${_year}-${_month}-${_day}`).toJSON().slice(0, 10))
		return maxDate
	}

	return (
		<CardLayout title='Installation Information' icon={<Wrench />}>
			<div className='row mx-0'>
				<div className='col-12 col-md-6 mb-8'>
					<label className='laser_label'>Do you have a TV stand?</label>
					<BooleanButtonGroup
						status={data.do_you_have_tv_stand}
						onClick={newValue => dispatch({ do_you_have_tv_stand: newValue })}
					/>
					{errors?.do_you_have_tv_stand ? (
						<p className='error'>{errors?.do_you_have_tv_stand}</p>
					) : null}
					{data.do_you_have_tv_stand === 'no' ? (
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
						status={data.power_outlet_available}
						onClick={newValue => dispatch({ power_outlet_available: newValue })}
					/>
					{errors?.power_outlet_available ? (
						<p className='error'>{errors?.power_outlet_available}</p>
					) : null}
					{data.power_outlet_available === 'no' ? (
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
						status={data.sufficient_wall_space}
						onClick={newValue => dispatch({ sufficient_wall_space: newValue })}
					/>
					{errors?.sufficient_wall_space ? (
						<p className='error'>{errors?.sufficient_wall_space}</p>
					) : null}
					{data.sufficient_wall_space === 'no' ? (
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
					<div className='form_select_field z-4'>
						<LaserInstallationDropDownSelectBox
							options={installationLocation}
							disabledOptions={[{ name: 'Where to install?' }]}
							value={data.where_to_install}
							placeholder='Where to install?'
							onChange={newValue =>
								dispatch({ where_to_install: newValue.name })
							}
						/>
						{errors?.where_to_install ? (
							<p className='error'>{errors?.where_to_install}</p>
						) : null}
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
					{errors?.installation_location_photo ? (
						<p className='error'>{errors?.installation_location_photo}</p>
					) : null}
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_select_field z-3'>
						<LaserInstallationDropDownSelectBox
							options={materialOfWall}
							disabledOptions={[{ name: 'Material of Wall' }]}
							value={data.material_of_wall}
							placeholder='Material of Wall'
							onChange={newValue =>
								dispatch({ material_of_wall: newValue.name })
							}
						/>
						{errors?.material_of_wall ? (
							<p className='error'>{errors?.material_of_wall}</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_select_field z-2'>
						<LaserInstallationDropDownSelectBox
							options={FloorType}
							disabledOptions={[{ name: 'Floor Type' }]}
							value={data.floor_type}
							placeholder='Floor Type'
							onChange={newValue => dispatch({ floor_type: newValue.name })}
						/>
					</div>
					{errors?.floor_type ? (
						<p className='error'>{errors?.floor_type}</p>
					) : null}
				</div>
				<div className='col-12 col-md-6 mb-8 mb-md-0'>
					<div className='form_select_field z-1'>
						<LaserInstallationDropDownSelectBox
							options={internetType}
							disabledOptions={[{ name: 'Wireless or Wired Internet' }]}
							value={data.wireless_wired_internet}
							placeholder='Wireless or Wired Internet'
							onChange={newValue =>
								dispatch({ wireless_wired_internet: newValue.name })
							}
						/>
						{errors?.wireless_wired_internet ? (
							<p className='error'>{errors?.wireless_wired_internet}</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='form_select_field'>
						<input
							type='date'
							placeholder={'Requested Installation Date'}
							required={true}
							min={new Date().toJSON().slice(0, 10)}
							max={formatDate(
								new Date().getFullYear(),
								new Date().getMonth() + 2,
								new Date().getDate()
							)}
							className='form-container-inner-input date_input'
							value={data.expected_date && data.expected_date}
							onChange={e => dispatch({ expected_date: e.target.value })}
						/>
						<div className='tip mt-4'>
							<p>
								Please have your Laser TV near the area you wish to have it
								installed (preferably in its original box to keep it safe from
								damage).
							</p>
						</div>
						{errors?.expected_date ? (
							<p className='error'>{errors?.expected_date}</p>
						) : null}
					</div>
				</div>
			</div>
		</CardLayout>
	)
}

export default InstallationInfoForm

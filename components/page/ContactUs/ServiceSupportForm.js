import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomInput from 'components/common/Input'
import CustomSelectBox from 'components/common/selectBox'
import React, { useState } from 'react'
import RoleModal from './RoleModal'

function ServiceSupportForm() {
	const [modalCondition, setModalCondition] = useState(false)
	return (
		<>
			<form
				action=''
				className='form-container-inner-group row active'
				id='form-tab-1'>
				<div className='col-12 mb-10'>
					<CustomInput placeholder={'NAME'} required={true} />
				</div>
				<div className='col-12 col-md-6 mb-10'>
					<CustomInput placeholder={'EMAIL'} required={true} />
				</div>
				<div className='col-12 col-md-6 mb-10'>
					<CustomInput placeholder={'PHONE'} required={true} />
				</div>
				<div className='col-12 mb-10'>
					<CustomSelectBox title={'PLEASE SELECT YOUR PRODUCT'} />
				</div>
				<div className='col-12 mb-10 '>
					<CustomSelectBox title={'PLEASE SELECT YOUR MODEL'} />
				</div>
				<div className='col-12 col-md-6 mb-10'>
					<CustomInput placeholder={'SERIAL NUMBER'} required={true} />
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
					<CustomSelectBox title={'IS YOUR PRODUCT UNDER WARRANTY?'} />
				</div>
				<div className='col-12 col-md-6 mb-10'>
					<CustomSelectBox title={'TYPE OF SERVICE REQUEST'} />
				</div>
				<div className='col-12 mb-10'>
					<textarea
						name=''
						cols='30'
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
					<input
						type='file'
						className='d-none'
						id='contact-file-input'
						accept='.jpg, .png, .jpeg, .pdf, .docx, .doc'
						multiple='multiple'
					/>
					<div className='file-upload-box' onclick='triggerFileUpload()'>
						<div>Drag & Drop a File Here</div>
						<p>Upload Images</p>
					</div>
				</div>
				<div className='col-12 text-center'>
					<button type='submit' className='form-submit-btn'>
						SUBMIT
					</button>
				</div>
			</form>
			{modalCondition && <RoleModal modalHandler={setModalCondition} />}
		</>
	)
}

export default ServiceSupportForm

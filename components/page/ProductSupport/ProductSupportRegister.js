import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCheck,
	faChevronDown,
	faCircleInfo,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import ProductSupportRegisterModal from './ProductSupportRegisterModal'
import CustomSelectBox from 'components/common/selectBox'
import CustomInput from 'components/common/Input'
import RoleModal from '../ContactUs/RoleModal'

function ProductSupportRegister() {
	const [acceptRole, setAcceptRole] = useState(false)
	const [modalCondition, setModalCondition] = useState(false)
	return (
		<section className='border-bottom border-dark' id='#registeration'>
			<div className='container py-20'>
				<h3 className='mb-4 fs-2'>Register Laser TV</h3>
				<p className='fs-8 fw-normal mb-15'>
					Get started with registering your Hisense product.
				</p>
				<div className='form-container mx-auto'>
					<form
						action=''
						className='form-container-inner row active'
						id='form-tab-1'>
						<div className='col-12 mb-10 custom-select-box'>
							<CustomSelectBox
								title={'PLEASE SELECT YOUR PRODUCT'}
								required={true}
							/>
						</div>
						<div className='col-12 mb-10 custom-select-box'>
							<CustomSelectBox
								title={'PLEASE SELECT YOUR MODEL'}
								required={true}
							/>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput placeholder={'SERIAL NUMBER'} required={true} />
						</div>
						<div className='col-12 col-md-6 mb-10 d-flex'>
							<button
								className='modal-btn'
								type='button'
								onClick={() => setModalCondition(state => !state)}>
								<FontAwesomeIcon icon={faCircleInfo} size={'xl'} />
								<span className='ms-2'>Where do I find the serial number?</span>
							</button>
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput placeholder={'FIRST NAME'} required={true} />
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput placeholder={'LAST NAME'} required={true} />
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput placeholder={'EMAIL'} required={true} />
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput placeholder={'POSTAL CODE/ZIP'} required={true} />
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput placeholder={'PHONE NUMBER'} required={true} />
						</div>
						<div className='col-12 col-md-6 mb-10'>
							<CustomInput placeholder={'PURCHASED FROM'} required={true} />
						</div>
						<div className='col-12 mb-10'>
							<CustomInput
								type={'date'}
								placeholder={'PURCHASED FROM'}
								required={true}
							/>
						</div>
						<div className='col-12 mb-10 file-upload'>
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
						<div className='col-12 mb-10 news-check'>
							<span
								className='form-checkbox-span'
								onClick={() => setAcceptRole(state => !state)}>
								{acceptRole && <FontAwesomeIcon icon={faCheck} />}
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
								type='submit'
								className='btn btn-outline-dark px-5 py-2 rounded-5'>
								REGISTER
							</button>
						</div>
					</form>
				</div>
				{modalCondition && (
					<RoleModal modalHandler={() => setModalCondition(false)} />
				)}
			</div>
		</section>
	)
}

export default ProductSupportRegister

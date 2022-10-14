import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleInfo,
	faCheck,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import CustomSelectBox from 'components/common/selectBox'
import CustomInput from 'components/common/Input'
import RoleModal from '../ContactUs/RoleModal'

function RegisterForm() {
	const [activeCheckBox, setActiveCheckBox] = useState(false)
	const [modalCondition, setModalCondition] = useState(false)
	return (
		<section>
			<div className='container form-container px-8 px-md-20 mt-20 py-10'>
				<h2 className='text-center mb-17'>REGISTER PRODUCT</h2>
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
							onClick={() => setModalCondition(true)}>
							<FontAwesomeIcon icon={faCircleInfo} size={'xl'} />
							<span className='ms-2'> Where do I find the serial number?</span>
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
						<label htmlFor='date-input'>Date of Purchase</label>
						<CustomInput type='date' required={true} />
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
							onClick={() => setActiveCheckBox(!activeCheckBox)}>
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
						<button type='submit' className='form-submit-btn'>
							REGISTER
						</button>
					</div>
				</form>
				<div
					className='modal fade'
					id='serial-numbers'
					tabindex='-1'
					role='dialog'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'>
					<div
						className='modal-dialog modal-dialog-centered modal-lg'
						role='document'>
						<div className='modal-content border-0 bg-white p-6 d-block serial-number-modal'>
							<button
								className='btn modal-close-btn'
								type='button'
								data-dismiss='modal'
								aria-label='Close'>
								<FontAwesomeIcon icon={faXmark} />
							</button>
							<div>
								<h3>we know those suckers can be hard to find</h3>
								<p>
									Check this list for the general location of your model number
									sticker. If you re still stumped, contact us and well sort you
									out.
								</p>
								<ul>
									<li>television</li>
									<li>Back of the unit</li>
									<li>wine cooler</li>
									<li>Back of the unit</li>
									<li>compact refrigeration</li>
									<li>Back of the unit</li>
									<li>chest freezer</li>
									<li>Back of the unit</li>
									<li>full size refrigeration</li>
									<li>Back of the unit</li>
									<li>portable AC</li>
									<li>Left side of the unit</li>
									<li>beverage chiller</li>
									<li>Back of the unit</li>
									<li>dehumidifier</li>
									<li>Back of the unit</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{modalCondition && <RoleModal modalHandler={setModalCondition} />}
		</section>
	)
}

export default RegisterForm

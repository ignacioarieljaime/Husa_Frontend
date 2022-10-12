import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    
	faChevronDown,
	faCircleInfo,
	faCheck,
	faXmark
} from '@fortawesome/free-solid-svg-icons'

function RegisterForm() {
	const [activeCheckBox, setActiveCheckBox] = useState(false)
	return (
		<section>
			<div className='container form-container px-8 px-md-20 mt-20 py-10'>
				<h2 className='text-center mb-17'>REGISTER PRODUCT</h2>
				<form action='' className='form-container-inner row active' id='form-tab-1'>
					<div className='col-12 mb-10 custom-select-box'>
						<div
							className='form-container-inner-input select-container'
							tabindex='1'>
							<div className='select-box-item'>
								<input
									className='input'
									type='radio'
									id='product'
									value='1'
									name='product'
									checked='checked'
									disabled
								/>
								<p className='input-text'>
									PLEASE SELECT YOUR PRODUCT
									<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
								</p>
							</div>
							<div className='select-box-item'>
								<input
									className='input'
									type='radio'
									id='tv'
									value='2'
									name='product'
								/>
								<p className='input-text'>
									Televisions{' '}
									<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
								</p>
							</div>
							<div className='select-box-item'>
								<input
									className='input'
									type='radio'
									id='refrigeration'
									value='3'
									name='product'
								/>
								<p className='input-text'>
									Refrigeration{' '}
									<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
								</p>
							</div>
							<div className='select-box-item'>
								<input
									className='input'
									type='radio'
									id='air'
									value='4'
									name='product'
								/>
								<p className='input-text'>
									Air Products{' '}
									<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
								</p>
							</div>
							<div className='select-box-item'>
								<input
									className='input'
									type='radio'
									id='soundbars'
									value='5'
									name='product'
								/>
								<p className='input-text'>
									Soundbars{' '}
									<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
								</p>
							</div>
							<div className='select-box-item'>
								<input
									className='input'
									type='radio'
									id='dishwashers'
									value='6'
									name='product'
								/>
								<p className='input-text'>
									Dishwashers{' '}
									<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
								</p>
							</div>
						</div>
						<ul className='select-box-list'>
							<li>
								<label className='option' htmlFor='tv' aria-hidden='aria-hidden'>
									Televisions
								</label>
							</li>
							<li>
								<label
									className='option'
									htmlFor='refrigeration'
									aria-hidden='aria-hidden'>
									Refrigeration
								</label>
							</li>
							<li>
								<label className='option' htmlFor='air' aria-hidden='aria-hidden'>
									Air Products
								</label>
							</li>
							<li>
								<label className='option' htmlFor='soundbars' aria-hidden='aria-hidden'>
									Soundbars
								</label>
							</li>
							<li>
								<label
									className='option'
									htmlFor='dishwashers'
									aria-hidden='aria-hidden'>
									Dishwashers
								</label>
							</li>
						</ul>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 mb-10 custom-select-box'>
						<div
							className='form-container-inner-input select-container'
							tabindex='1'>
							<div className='select-box-item'>
								<input
									className='input'
									type='radio'
									id='model'
									value='1'
									name='model'
									checked='checked'
									disabled
								/>
								<p className='input-text'>
									PLEASE SELECT YOUR MODEL
									<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
								</p>
							</div>
							<div className='select-box-item'>
								<input
									className='input'
									type='radio'
									id='none'
									value='2'
									name='model'
								/>
								<p className='input-text'>
									None{' '}
									<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
								</p>
							</div>
						</div>
						<ul className='select-box-list'>
							<li>
								<label className='option' htmlFor='none' aria-hidden='aria-hidden'>
									None
								</label>
							</li>
						</ul>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<input
							type='tel'
							className='form-container-inner-input'
							placeholder='SERIAL NUMBER'
							required
						/>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 col-md-6 mb-10 d-flex'>
						<button
							className='modal-btn'
							type='button'
							data-toggle='modal'
							data-target='#serial-numbers'>
							<FontAwesomeIcon icon={faCircleInfo} size={'xl'} />
							Where do I find the serial number?
						</button>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<input
							type='text'
							className='form-container-inner-input'
							placeholder='FIRST NAME'
							required
						/>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<input
							type='text'
							className='form-container-inner-input'
							placeholder='LAST NAME'
							required
						/>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<input
							type='email'
							className='form-container-inner-input'
							placeholder='EMAIL'
							required
						/>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<input
							type='number'
							className='form-container-inner-input'
							placeholder='POSTAL CODE/ZIP'
							required
						/>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<input
							type='tel'
							className='form-container-inner-input'
							placeholder='PHONE NUMBER'
							required
						/>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<input
							type='text'
							className='form-container-inner-input'
							placeholder='PURCHASED FROM'
							required
						/>
						<span className='input-error'>This field is required.</span>
					</div>
					<div className='col-12 mb-10'>
						<label htmlFor='date-input'>Date of Purchase</label>
						<input
							name='date-input'
							type='date'
							className='form-container-inner-input date-input'
							value='mm/dd/yyyy'
							required
						/>
						<span className='input-error'>This field is required.</span>
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
		</section>
	)
}

export default RegisterForm

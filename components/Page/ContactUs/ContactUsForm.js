import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronDown,
	faCircleInfo,
	faXmark
} from '@fortawesome/free-solid-svg-icons'

function ContactUsForm() {
	const [formCondition, setFormCondition] = useState(false)
	return (
		<section>
			<div className='container form-container px-8 px-md-20 mt-12'>
				<div className='d-flex justify-content-center align-items-center flex-nowrap mb-15'>
					<div className='me-6'>
						<button
							className={`tab-btn ${!formCondition && "active"}`}
							id='tab-1'
							onClick={() => setFormCondition(false)}>
							PARTS & SERVICE SUPPORT
						</button>
					</div>
					<div className='ms-6'>
						<button
							className={`tab-btn ${formCondition && "active"}`}
							id='tab-2'
							onClick={() => setFormCondition(true)}>
							GENERAL INQUIRIES
						</button>
					</div>
				</div>
				{formCondition ? (
					<form
						action=''
						className='form-container-inner-group row active'
						id='form-tab-1'>
						<div className='col-12 mb-10'>
							<input
								type='text'
								className='form-container-inner-input'
								placeholder='NAME'
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
								type='tel'
								className='form-container-inner-input'
								placeholder='PHONE'
								required
							/>
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
									<label className='option' for='tv' aria-hidden='aria-hidden'>
										Televisions
									</label>
								</li>
								<li>
									<label
										className='option'
										for='refrigeration'
										aria-hidden='aria-hidden'>
										Refrigeration
									</label>
								</li>
								<li>
									<label className='option' for='air' aria-hidden='aria-hidden'>
										Air Products
									</label>
								</li>
								<li>
									<label
										className='option'
										for='soundbars'
										aria-hidden='aria-hidden'>
										Soundbars
									</label>
								</li>
								<li>
									<label
										className='option'
										for='dishwashers'
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
										None <FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
							</div>
							<ul className='select-box-list'>
								<li>
									<label className='option' for='none' aria-hidden='aria-hidden'>
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
						<div className='col-12 col-md-6 mb-10 custom-select-box'>
							<div
								className='form-container-inner-input select-container'
								tabindex='1'>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='warranty'
										value='1'
										name='warranty'
										checked='checked'
										disabled
									/>
									<p className='input-text'>
										IS YOUR PRODUCT UNDER WARRANTY?
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='yes'
										value='2'
										name='warranty'
									/>
									<p className='input-text'>
										Yes <FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='no'
										value='2'
										name='warranty'
									/>
									<p className='input-text'>
										No <FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
							</div>
							<ul className='select-box-list'>
								<li>
									<label className='option' for='yes' aria-hidden='aria-hidden'>
										Yes
									</label>
								</li>
								<li>
									<label className='option' for='no' aria-hidden='aria-hidden'>
										No
									</label>
								</li>
							</ul>
							<span className='input-error'>This field is required.</span>
						</div>
						<div className='col-12 col-md-6 mb-10 custom-select-box'>
							<div
								className='form-container-inner-input select-container'
								tabindex='1'>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='service'
										value='1'
										name='service'
										checked='checked'
										disabled
									/>
									<p className='input-text'>
										TYPE OF SERVICE REQUEST
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='technical-support'
										value='2'
										name='service'
									/>
									<p className='input-text'>
										Technical Support
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
							</div>
							<ul className='select-box-list'>
								<li>
									<label
										className='option'
										for='technical-support'
										aria-hidden='aria-hidden'>
										Technical Support
									</label>
								</li>
							</ul>
							<span className='input-error'>This field is required.</span>
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
							<label for='file-upload'>
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
				) : (
					<form
						action=''
						className='form-container-inner-group row active'
						id='form-tab-2'>
						<div className='col-12 mb-10 custom-select-box'>
							<div
								className='form-container-inner-input select-container'
								tabindex='1'>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='inquiry'
										value=''
										name='inquiry'
										checked='checked'
										disabled
									/>
									<p className='input-text'>
										WHAT IS YOUR INQUIRY RELATED TO?
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='marketing'
										value='2'
										name='inquiry'
									/>
									<p className='input-text'>
										Marketing or PR{' '}
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='customer-support'
										value='3'
										name='inquiry'
									/>
									<p className='input-text'>
										Customer Support{' '}
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div className='select-box-item'>
									<input
										className='input'
										type='radio'
										id='human-resources'
										value='4'
										name='inquiry'
									/>
									<p className='input-text'>
										Human Resources{' '}
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
							</div>
							<ul className='select-box-list'>
								<li>
									<label
										className='option'
										for='marketing'
										aria-hidden='aria-hidden'>
										marketing or PR
									</label>
								</li>
								<li>
									<label
										className='option'
										for='customer-support'
										aria-hidden='aria-hidden'>
										Customer Support
									</label>
								</li>
								<li>
									<label
										className='option'
										for='human-resources'
										aria-hidden='aria-hidden'>
										Human Resources
									</label>
								</li>
							</ul>
							<span className='input-error'>This field is required.</span>
						</div>
						<div className='col-12 mb-10'>
							<input
								type='text'
								className='form-container-inner-input'
								placeholder='NAME'
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
								type='tel'
								className='form-container-inner-input'
								placeholder='PHONE'
								required
							/>
							<span className='input-error'>This field is required.</span>
						</div>
						<div className='col-12 mb-10'>
							<textarea
								name=''
								cols='30'
								rows='1'
								required
								placeholder='MESSAGE'
								className='form-container-inner-input'></textarea>
							<span className='input-error'>This field is required.</span>
						</div>
						<div className='col-12 text-center'>
							<button type='submit' className='form-submit-btn'>
								SUBMIT
							</button>
						</div>
					</form>
				)}

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
									sticker. If youre still stumped, contact us and well sort you
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

export default ContactUsForm

import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCheck,
	faChevronDown,
	faCircleInfo,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import ProductSupportRegisterModal from './ProductSupportRegisterModal'

function ProductSupportRegister() {
	const [acceptRole, setAcceptRole] = useState(false)
	const [modalCondition, setModalCondition] = useState(false)
	return (
		<section className='border-bottom border-dark' id='#registeration'>
			<div className='container py-20'>
				<h2 className='mb-4 fs-2'>Register Laser TV</h2>
				<p className='fs-8 fw-normal mb-15'>
					Get started with registering your Hisense product.
				</p>
				<div className='form-container mx-auto'>
					<form
						action=''
						className='form-container-inner row active'
						id='form-tab-1'>
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
										Televisions
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
										Refrigeration
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
										Air Products
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
										Soundbars
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
										Dishwashers
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
										None
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
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
								onClick={() => setModalCondition(state => !state)}>
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
							<label for='date-input'>Date of Purchase</label>
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
								onClick={() => setAcceptRole(state => !state)}>
								{acceptRole && <FontAwesomeIcon icon={faCheck} />}
							</span>
							<label for='news'>
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
					<ProductSupportRegisterModal handler={setModalCondition} />
				)}
			</div>
		</section>
	)
}

export default ProductSupportRegister

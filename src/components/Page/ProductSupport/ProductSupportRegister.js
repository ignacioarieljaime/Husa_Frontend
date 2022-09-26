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
		<section class='border-bottom border-dark' id='#registeration'>
			<div class='container py-20'>
				<h2 class='mb-4 fs-2'>Register Laser TV</h2>
				<p class='fs-8 fw-normal mb-15'>
					Get started with registering your Hisense product.
				</p>
				<div class='form-container mx-auto'>
					<form
						action=''
						class='form-container-inner row active'
						id='form-tab-1'>
						<div class='col-12 mb-10 custom-select-box'>
							<div
								class='form-container-inner-input select-container'
								tabindex='1'>
								<div class='select-box-item'>
									<input
										class='input'
										type='radio'
										id='product'
										value='1'
										name='product'
										checked='checked'
										disabled
									/>
									<p class='input-text'>
										PLEASE SELECT YOUR PRODUCT
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div class='select-box-item'>
									<input
										class='input'
										type='radio'
										id='tv'
										value='2'
										name='product'
									/>
									<p class='input-text'>
										Televisions
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div class='select-box-item'>
									<input
										class='input'
										type='radio'
										id='refrigeration'
										value='3'
										name='product'
									/>
									<p class='input-text'>
										Refrigeration
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div class='select-box-item'>
									<input
										class='input'
										type='radio'
										id='air'
										value='4'
										name='product'
									/>
									<p class='input-text'>
										Air Products
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div class='select-box-item'>
									<input
										class='input'
										type='radio'
										id='soundbars'
										value='5'
										name='product'
									/>
									<p class='input-text'>
										Soundbars
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div class='select-box-item'>
									<input
										class='input'
										type='radio'
										id='dishwashers'
										value='6'
										name='product'
									/>
									<p class='input-text'>
										Dishwashers
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
							</div>
							<ul class='select-box-list'>
								<li>
									<label class='option' for='tv' aria-hidden='aria-hidden'>
										Televisions
									</label>
								</li>
								<li>
									<label
										class='option'
										for='refrigeration'
										aria-hidden='aria-hidden'>
										Refrigeration
									</label>
								</li>
								<li>
									<label class='option' for='air' aria-hidden='aria-hidden'>
										Air Products
									</label>
								</li>
								<li>
									<label
										class='option'
										for='soundbars'
										aria-hidden='aria-hidden'>
										Soundbars
									</label>
								</li>
								<li>
									<label
										class='option'
										for='dishwashers'
										aria-hidden='aria-hidden'>
										Dishwashers
									</label>
								</li>
							</ul>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 mb-10 custom-select-box'>
							<div
								class='form-container-inner-input select-container'
								tabindex='1'>
								<div class='select-box-item'>
									<input
										class='input'
										type='radio'
										id='model'
										value='1'
										name='model'
										checked='checked'
										disabled
									/>
									<p class='input-text'>
										PLEASE SELECT YOUR MODEL
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
								<div class='select-box-item'>
									<input
										class='input'
										type='radio'
										id='none'
										value='2'
										name='model'
									/>
									<p class='input-text'>
										None
										<FontAwesomeIcon icon={faChevronDown} size={'xs'} />
									</p>
								</div>
							</div>
							<ul class='select-box-list'>
								<li>
									<label class='option' for='none' aria-hidden='aria-hidden'>
										None
									</label>
								</li>
							</ul>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 col-md-6 mb-10'>
							<input
								type='tel'
								class='form-container-inner-input'
								placeholder='SERIAL NUMBER'
								required
							/>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 col-md-6 mb-10 d-flex'>
							<button
								class='modal-btn'
								type='button'
								onClick={() => setModalCondition(state => !state)}>
								<FontAwesomeIcon icon={faCircleInfo} size={'xl'} />
								Where do I find the serial number?
							</button>
						</div>
						<div class='col-12 col-md-6 mb-10'>
							<input
								type='text'
								class='form-container-inner-input'
								placeholder='FIRST NAME'
								required
							/>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 col-md-6 mb-10'>
							<input
								type='text'
								class='form-container-inner-input'
								placeholder='LAST NAME'
								required
							/>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 col-md-6 mb-10'>
							<input
								type='email'
								class='form-container-inner-input'
								placeholder='EMAIL'
								required
							/>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 col-md-6 mb-10'>
							<input
								type='number'
								class='form-container-inner-input'
								placeholder='POSTAL CODE/ZIP'
								required
							/>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 col-md-6 mb-10'>
							<input
								type='tel'
								class='form-container-inner-input'
								placeholder='PHONE NUMBER'
								required
							/>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 col-md-6 mb-10'>
							<input
								type='text'
								class='form-container-inner-input'
								placeholder='PURCHASED FROM'
								required
							/>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 mb-10'>
							<label for='date-input'>Date of Purchase</label>
							<input
								name='date-input'
								type='date'
								class='form-container-inner-input date-input'
								value='mm/dd/yyyy'
								required
							/>
							<span class='input-error'>This field is required.</span>
						</div>
						<div class='col-12 mb-10 file-upload'>
							<input
								type='file'
								class='d-none'
								id='contact-file-input'
								accept='.jpg, .png, .jpeg, .pdf, .docx, .doc'
								multiple='multiple'
							/>
							<div class='file-upload-box' onclick='triggerFileUpload()'>
								<div>Drag & Drop a File Here</div>
								<p>Upload Images</p>
							</div>
						</div>
						<div class='col-12 mb-10 news-check'>
							<span
								class='form-checkbox-span'
								onClick={() => setAcceptRole(state => !state)}>
								{acceptRole && <FontAwesomeIcon icon={faCheck} />}
							</span>
							<label for='news'>
								<input
									type='checkbox'
									name='news'
									id='form-checkbox-input'
									class='d-none'
								/>
								Sign me up for future news
							</label>
						</div>
						<div class='col-12 text-center'>
							<button
								type='submit'
								class='btn btn-outline-dark px-5 py-2 rounded-5'>
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

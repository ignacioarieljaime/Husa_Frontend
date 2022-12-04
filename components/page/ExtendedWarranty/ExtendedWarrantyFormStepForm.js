import React, { useState } from 'react'
import RadioCheckBox from 'components/common/RadioCheckBox'
import ExtendedWarrantyFileInput from './ExtendedWarrantyFileInput'
import ExtendedWarrantyModelNumberDialog from './ExtendedWarrantyModelNumberDialog'
import Spinner from '../../common/Spinner'
import CustomSelectBox from '../../common/selectBox'

const ExtendedWarrantyFormStepForm = ({
	onChange,
	onUpload,
	acceptTerms,
	setAcceptTerms,
	onSubmit,
	formBody,
	loading,
	retailers
}) => {
	const [showModal, setShowModal] = useState(false)
	const [label, setlabel] = useState(true)

	return (
		<form onSubmit={onSubmit} className='form'>
			<h3 className='title'>Fill out the form below to complete your order.</h3>
			<div className='row mx-0 mb-8'>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									first_name: e.target.value
								}))
							}
							required
							placeholder='First Name'
							type='text'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									last_name: e.target.value
								}))
							}
							required
							placeholder='Last Name'
							type='text'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({ ...prevState, email: e.target.value }))
							}
							required
							placeholder='Email'
							type='email'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({ ...prevState, phone: e.target.value }))
							}
							required
							placeholder='Phone Number'
							type='tel'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									address: e.target.value
								}))
							}
							required
							placeholder='Address'
							type='text'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						{label && <label className='custom-label'>Purchase Date</label>}
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									purchase_date: e.target.value
								}))
							}
							required
							onFocus={() => setlabel(false)}
							onBlur={() => setlabel(true)}
							placeholder='Purchase Date'
							type='date'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									product: {
										...prevState.product,
										serial_number: e.target.value
									}
								}))
							}
							required
							placeholder='Serial Number'
							type='text'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									postal_code: e.target.value
								}))
							}
							required
							placeholder='Postal code'
							type='text'
						/>
					</div>
				</div>
				<div className='col-12 '>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									retailer_id: e.target.value
								}))
							}
							placeholder='Retailer'
							type='text'
						/>
					</div>
				</div>
			</div>
			<div className='row align-items-end'>
				<div className='col-12 col-md-6'>
					<ExtendedWarrantyFileInput
						label='Model Plate Sticker'
						boxContent='Upload Your Products Serial Number Photo'
						id={0}
						value={formBody.product.model_plate_sticker}
						name='model_plate_sticker'
						onChange={onUpload}
						loading={loading}
						modalOnClick={() => setShowModal(showModal => !showModal)}
					/>
				</div>
				<div className='col-12 col-md-6'>
					<ExtendedWarrantyFileInput
						label='Receipt Photo'
						id={1}
						value={formBody.product.receipt_photo}
						name='receipt_photo'
						onChange={onUpload}
						loading={loading}
						boxContent='Upload Your Receipt Photo'
					/>
				</div>
			</div>
			<RadioCheckBox
				label='I acknowledge and agree to the Terms & Conditions.'
				onChange={setAcceptTerms}
				checked={acceptTerms}
			/>
			<div className=' mt-15 text-center'>
				<button
					className='n-btn outline-black py-4 d-flex align-items-center mx-auto '
					type='submit'
					disabled={!acceptTerms || loading === 'button' ? true : false}>
					Proceed to Payment
					{loading === 'button' && <Spinner className={'ms-3'} size={20} />}
				</button>
				{/* <Link href={'/ewp-confirmation-page'}>
					<a className='n-btn outline-black py-4'>Proceed to Payment</a>
				</Link> */}
			</div>
			{showModal && (
				<ExtendedWarrantyModelNumberDialog
					product='Tv'
					onClose={() => setShowModal(false)}
				/>
			)}
		</form>
	)
}

export default ExtendedWarrantyFormStepForm

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
	retailers,
	terms,
	errors
}) => {
	const [showModal, setShowModal] = useState(false)
	const [label, setlabel] = useState(true)
	const [date, setDate] = useState('')

	const formatDate = (_year, _month, _day) => {
		if (_year && typeof _month === 'number' && _day) {
			if (_month < 1) {
				_month += 12
				_year -= 1
			}
			const maxDate = new Date(`${_year}-${_month}-${_day}`)
				?.toJSON()
				?.slice(0, 10)
			return maxDate
		}
	}

	return (
		<form onSubmit={onSubmit} className='form'>
			<h3 className='title'>Fill out the form below to complete your order.</h3>
			<div className='row mx-0 mb-8 extended-warranty-form'>
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
					<div className='error_message'>
						{errors?.first_name && errors?.first_name[0]}
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
					<div className='error_message'>
						{errors?.last_name && errors?.last_name[0]}
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
							type='text'
						/>
					</div>
					<div className='error_message'>
						{errors?.email && errors?.email[0]}
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
					<div className='error_message'>
						{errors?.phone && errors?.phone[0]}
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
					<div className='error_message'>
						{errors?.address && errors?.address[0]}
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input
							onChange={e => {
								if (isNaN(Number(e.target.value))) return
								setDate(e.target.value)
								onChange(prevState => ({
									...prevState,
									postal_code: e.target.value
								}))
							}}
							value={date}
							required
							type='text'
							placeholder='Postal code'
						/>
					</div>
					<div className='error_message'>
						{errors?.postal_code && errors?.postal_code[0]}
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
					<div className='error_message'>
						{errors?.serial_number && errors?.serial_number[0]}
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						{!formBody.product.purchase_date && (
							<label className='custom-label'>Purchase Date</label>
						)}
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									...prevState,
									product: {
										...prevState.product,
										purchase_date: e.target.value
									}
								}))
							}
							min={formatDate(
								new Date().getFullYear(),
								new Date().getMonth() - 2,
								new Date().getDate()
							)}
							max={new Date().toJSON().slice(0, 10)}
							required
							onFocus={() => setlabel(false)}
							onBlur={() => setlabel(true)}
							placeholder='Purchase Date'
							type='date'
						/>
					</div>
					<div className='error_message'>
						{errors?.purchase_date && errors?.purchase_date[0]}
					</div>
				</div>
				<div className='col-12 '>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									product: {
										...prevState.product,
										retailer: e.target.value
									}
								}))
							}
							placeholder='Retailer'
							type='text'
						/>
					</div>
					<div className='error_message'>
						{errors?.retailer && errors?.retailer[0]}
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
						isBgWhite={true}
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
						isBgWhite={true}
						boxContent='Upload Your Receipt Photo'
					/>
				</div>
			</div>
			<RadioCheckBox
				label='I acknowledge and agree to the '
				button='Terms & Conditions.'
				text={terms}
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

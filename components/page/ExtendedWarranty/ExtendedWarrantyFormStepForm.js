import React, { useState } from 'react'
import RadioCheckBox from 'components/common/RadioCheckBox'
import ExtendedWarrantyFileInput from './ExtendedWarrantyFileInput'
import ExtendedWarrantyModelNumberDialog from './ExtendedWarrantyModelNumberDialog'
import Link from 'next/link'

const ExtendedWarrantyFormStepForm = ({
	onChange,
	onUpload,
	acceptTerms,
	setAcceptTerms,
	onSubmit
}) => {
	const [showModal, setShowModal] = useState(false)

	return (
		<form className='form'>
			<h3 className='title'>Fill out the form below to complete your order.</h3>
			<div className='row mx-0 mb-8'>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input
							onChange={e =>
								onChange(prevState => ({
									...prevState,
									first_name: e.target.value.split(' ')[0],
									last_name: e.target.value.split(' ')[1]
								}))
							}
							placeholder='Full Name'
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
							placeholder='Address'
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
									purchase_data: e.target.value
								}))
							}
							placeholder='Purchase Date'
							type='data'
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
							placeholder='Serial Number'
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
						name='model_plate_sticker'
						onChange={onUpload}
						modalOnClick={() => setShowModal(showModal => !showModal)}
					/>
				</div>
				<div className='col-12 col-md-6'>
					<ExtendedWarrantyFileInput
						label='Receipt Photo'
						id={1}
						name='receipt_photo'
						onChange={onUpload}
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
					className='n-btn outline-black py-4'
					type='button'
					onClick={onSubmit}>
					Proceed to Payment
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

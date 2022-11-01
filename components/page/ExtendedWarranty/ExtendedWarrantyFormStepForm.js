import React, { useState } from 'react'
import RadioCheckBox from 'components/common/RadioCheckBox'
import ExtendedWarrantyFileInput from './ExtendedWarrantyFileInput'
import ExtendedWarrantyModelNumberDialog from './ExtendedWarrantyModelNumberDialog'

const ExtendedWarrantyFormStepForm = () => {
	const [acceptTerms, setAcceptTerms] = useState(false)
	const [showModal, setShowModal] = useState(false)

	return (
		<form className='form'>
			<h3 className='title'>Fill out the form below to complete your order.</h3>
			<div className='row mx-0 mb-8'>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input placeholder='Full Name' type='text' />
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input placeholder='Email' type='email' />
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input placeholder='Phone Number' type='tel' />
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input placeholder='Address' type='text' />
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input placeholder='Purchase Date' type='data' />
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='extended-warranty-input'>
						<input placeholder='Serial Number' type='text' />
					</div>
				</div>
			</div>
			<div className='row align-items-end'>
				<div className='col-12 col-md-6'>
					<ExtendedWarrantyFileInput
						label='Model Plate Sticker'
						boxContent='Upload Your Products Serial Number Photo'
						modalButton=''
						modalOnClick={() => setShowModal(showModal => !showModal)}
					/>
				</div>
				<div className='col-12 col-md-6'>
					<ExtendedWarrantyFileInput
						label='Receipt Photo'
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
				<button className='n-btn outline-black py-4'>Proceed to Payment</button>
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

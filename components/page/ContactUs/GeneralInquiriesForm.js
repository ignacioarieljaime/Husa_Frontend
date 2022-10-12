import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomInput from 'components/common/Input'
import CustomSelectBox from 'components/common/selectBox'
import React from 'react'

function GeneralInquiriesForm() {
	return (
		<form
			action=''
			className='form-container-inner-group row active'
			id='form-tab-2'>
			<div className='col-12 mb-10 '>
				<CustomSelectBox title={'WHAT IS YOUR INQUIRY RELATED TO?'} />
			</div>
			<div className='col-12 mb-10'>
				<CustomInput placeholder={'NAME'} required={true} />
			</div>
			<div className='col-12 col-md-6 mb-10'>
				<CustomInput placeholder={'EMAIL'} required={true} />
			</div>
			<div className='col-12 col-md-6 mb-10'>
				<CustomInput placeholder={'PHONE'} required={true} />
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
	)
}

export default GeneralInquiriesForm

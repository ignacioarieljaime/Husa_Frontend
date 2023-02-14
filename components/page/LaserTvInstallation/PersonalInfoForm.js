import DropDownSelectBox from 'components/common/DropDownSelectBox'
import UserCircleOutline from 'components/icons/UserCircleOutline'
import React, { useState } from 'react'
import CardLayout from './CardLayout'

const PersonalInfoForm = ({ data, dispatch }) => {
	const states = [
		{ name: 'Alabama', value: 'AL' },
		{ name: 'Alaska', value: 'AK' },
		{ name: 'American Samoa', value: 'AS' },
		{ name: 'Arizona', value: 'AZ' },
		{ name: 'Arkansas', value: 'AR' },
		{ name: 'California', value: 'CA' },
		{ name: 'Colorado', value: 'CO' },
		{ name: 'Connecticut', value: 'CT' },
		{ name: 'Delaware', value: 'DE' },
		{ name: 'District of Columbia', value: 'DC' },
		{ name: 'States of Micronesia', value: 'FM' },
		{ name: 'Florida', value: 'FL' },
		{ name: 'Georgia', value: 'GA' },
		{ name: 'Guam', value: 'GU' },
		{ name: 'Hawaii', value: 'HI' },
		{ name: 'Idaho', value: 'ID' },
		{ name: 'Illinois', value: 'IL' },
		{ name: 'Indiana', value: 'IN' },
		{ name: 'Iowa', value: 'IA' },
		{ name: 'Kansas', value: 'KS' },
		{ name: 'Kentucky', value: 'KY' },
		{ name: 'Louisiana', value: 'LA' },
		{ name: 'Maine', value: 'ME' },
		{ name: 'Marshall Islands', value: 'MH' },
		{ name: 'Maryland', value: 'MD' },
		{ name: 'Massachusetts', value: 'MA' },
		{ name: 'Michigan', value: 'MI' },
		{ name: 'Minnesota', value: 'MN' },
		{ name: 'Mississippi', value: 'MS' },
		{ name: 'Missouri', value: 'MO' },
		{ name: 'Montana', value: 'MT' },
		{ name: 'Nebraska', value: 'NE' },
		{ name: 'Nevada', value: 'NV' },
		{ name: 'New Hampshire', value: 'NH' },
		{ name: 'New Jersey', value: 'NJ' },
		{ name: 'New Mexico', value: 'NM' },
		{ name: 'New York', value: 'NY' },
		{ name: 'North Carolina', value: 'NC' },
		{ name: 'North Dakota', value: 'ND' },
		{ name: 'Northern Mariana Islands', value: 'MP' },
		{ name: 'Ohio', value: 'OH' },
		{ name: 'Oklahoma', value: 'OK' },
		{ name: 'Oregan', value: 'OR' },
		{ name: 'Palau', value: 'PW' },
		{ name: 'Pennsilvania', value: 'PA' },
		{ name: 'Puerto Rico', value: 'PR' },
		{ name: 'Rhode Island', value: 'RI' },
		{ name: 'South Carolina', value: 'SC' },
		{ name: 'South Dakota', value: 'SD' },
		{ name: 'Tennessee', value: 'TN' },
		{ name: 'Texas', value: 'TX' },
		{ name: 'Utah', value: 'UT' },
		{ name: 'Vermont', value: 'VT' },
		{ name: 'Virgin Islands', value: 'VI' },
		{ name: 'Virginia', value: 'VA' },
		{ name: 'Washington', value: 'WA' },
		{ name: 'West Virginia', value: 'WV' },
		{ name: 'Wisconsin', value: 'WI' },
		{ name: 'Wyoming', value: 'WY' }
	]

	const inputChangeHandler = e => {
		dispatch({ [e.target.name]: e.target.value })
	}

	return (
		<CardLayout title='Personal Information' icon={<UserCircleOutline />}>
			<div className='row mx-0'>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_text_field'>
						<input
							onChange={e => inputChangeHandler(e)}
							name='first_name'
							type='text'
							placeholder='First Name'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_text_field'>
						<input
							onChange={e => inputChangeHandler(e)}
							name='last_name'
							type='text'
							placeholder='Last Name'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_text_field'>
						<input
							onChange={e => inputChangeHandler(e)}
							name='phone_number'
							type='text'
							placeholder='Phone number'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_text_field'>
						<input
							onChange={e => inputChangeHandler(e)}
							name='email'
							type='email'
							placeholder='Email'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_text_field'>
						<input
							onChange={e => inputChangeHandler(e)}
							name='address'
							type='text'
							placeholder='Address'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8'>
					<div className='form_text_field'>
						<input
							onChange={e => inputChangeHandler(e)}
							name='city'
							type='text'
							placeholder='City'
						/>
					</div>
				</div>
				<div className='col-12 col-md-6 mb-8 mb-md-0'>
					<div className='form_select_field z-4'>
						<DropDownSelectBox
							options={states}
							value={states.find(state => state.value === data.state)?.name}
							placeholder='State'
							onChange={newValue => dispatch({ state: newValue.value })}
						/>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='form_text_field'>
						<input
							onChange={e => inputChangeHandler(e)}
							name='zip_code'
							type='text'
							placeholder='ZIP Code'
						/>
					</div>
				</div>
			</div>
		</CardLayout>
	)
}

export default PersonalInfoForm

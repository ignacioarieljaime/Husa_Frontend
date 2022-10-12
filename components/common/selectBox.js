import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CustomSelectBox({ required = false, title }) {
	return (
		<div className=' custom-select-box'>
			<div className='form-container-inner-input select-container' tabindex='1'>
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
					<p className='input-text d-flex align-items-center justify-content-between '>
						{title}
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
					<label className='option' for='soundbars' aria-hidden='aria-hidden'>
						Soundbars
					</label>
				</li>
				<li>
					<label className='option' for='dishwashers' aria-hidden='aria-hidden'>
						Dishwashers
					</label>
				</li>
			</ul>
			{required && <span className='input-error'>This field is required.</span>}
		</div>
	)
}

export default CustomSelectBox

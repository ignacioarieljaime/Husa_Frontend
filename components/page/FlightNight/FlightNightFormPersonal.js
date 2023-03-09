import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FlightNightFormPersonal = ({ title }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(title)
	}, [])
	return (
		<div className='personal'>
			<h3 dangerouslySetInnerHTML={{ __html: text }} className='title'></h3>
			<div className='line top'></div>
			<div className='row justify-content-center align-items-center mx-0'>
				<div className='col-12 col-md-6 px-4 pb-4'>
					<div className='form_text_field'>
						<label className='label'>FIRST NAME</label>
						<input name='PostalZipCode' type='text' required={true} />
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-4'>
					<div className='form_text_field'>
						<label className='label'>LAST NAME</label>
						<input name='PostalZipCode' type='text' required={true} />
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-4'>
					<div className='form_text_field'>
						<label className='label'>EMAIL ADDRESS </label>
						<input name='PostalZipCode' type='text' required={true} />
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-4'>
					<div className='form_text_field'>
						<label className='label'>PHONE NUMBER</label>
						<input name='PostalZipCode' type='text' required={true} />
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4'>
					<div className='form_text_field'>
						<label className='label'>social media handle</label>
						<input name='PostalZipCode' type='text' required={true} />
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FlightNightFormPersonal

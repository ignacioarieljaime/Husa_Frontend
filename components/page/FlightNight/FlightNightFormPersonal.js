import React from 'react'

const FlightNightFormPersonal = () => {
	return (
		<div className='personal'>
			<h3 className='title'>
				<p>Complete the form </p>
				<p>below for a chance to</p>
				<p>win your next TV!</p>
			</h3>
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

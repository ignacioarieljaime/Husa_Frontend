import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FlightNightFormPersonal = ({ title, onChange, errors }) => {
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
					<div className='form_text_field  position-relative '>
						<label className='label'>FIRST NAME *</label>
						<input
							onInput={e => onChange('first_name', e.target.value)}
							name='PostalZipCode'
							type='text'
							required={true}
						/>
						{errors?.first_name ? (
							<p
								style={{
									color: 'black',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.first_name}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-4'>
					<div className='form_text_field  position-relative'>
						<label className='label'>LAST NAME *</label>
						<input
							onInput={e => onChange('last_name', e.target.value)}
							name='PostalZipCode'
							type='text'
							required={true}
						/>
						{errors?.last_name ? (
							<p
								style={{
									color: 'black',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.last_name}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-4'>
					<div className='form_text_field  position-relative'>
						<label className='label'>EMAIL ADDRESS *</label>
						<input
							onInput={e => onChange('email', e.target.value)}
							name='PostalZipCode'
							type='text'
							required={true}
						/>
						{errors?.email ? (
							<p
								style={{
									color: 'black',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.email}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-4'>
					<div className='form_text_field  position-relative'>
						<label className='label'>PHONE NUMBER *</label>
						<input
							onInput={e => onChange('phone_number', e.target.value)}
							name='PostalZipCode'
							type='text'
							required={true}
						/>
						{errors?.phone_number ? (
							<p
								style={{
									color: 'black',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.phone_number}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4'>
					<div className='form_text_field  position-relative'>
						<label className='label'>social media handle</label>
						<input
							onInput={e => onChange('social_media_handle', e.target.value)}
							name='PostalZipCode'
							type='text'
							required={true}
						/>
						{errors?.social_media_handle ? (
							<p
								style={{
									color: 'black',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.social_media_handle}
							</p>
						) : null}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FlightNightFormPersonal

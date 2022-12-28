import React, { useEffect } from 'react'

const ULEDXWaitlistForm = ({ data }) => {
	return (
		<div className='uledx_waitlist_form'>
			<div className='content'>
				<h4>{data?.title?.value}</h4>
				<form>
					<div className='form_inp'>
						<input type='text' placeHolder='' name='' value='' />
					</div>
					<div className='form_inp'>
						<input type='text' placeHolder='' name='' value='' />
					</div>
					<div className='form_inp'>
						<input type='text' placeHolder='' name='' value='' />
					</div>
					<p>{data?.notify?.value}</p>
					<button className='n-btn black p-4'>Get Notified</button>
				</form>
			</div>
		</div>
	)
}

export default ULEDXWaitlistForm

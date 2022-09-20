import React from 'react'

function SendNewsToEmailBox() {
	return (
		<div className='container-fluid email-form px-8 py-14 px-md-12 p-md-20'>
			<article className='row p-lg-8'>
				<h2 className='col-12 col-md-6 mb-8 my-md-auto'>
					Stay up to date with emails
					<br />
					about new products & other news
				</h2>
				<form className='col-12 col-md-6 mx-0 my-0 my-md-auto'>
					<input
						className='form-control'
						type='email'
						placeholder='Enter your email here'
					/>
					<button>Subscribe</button>
				</form>
			</article>
		</div>
	)
}

export default SendNewsToEmailBox

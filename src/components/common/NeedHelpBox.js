import React from 'react'

function NeedHelpBox() {
	return (
		<section>
			<div className='support-help'>
				<h3>Need More Help?</h3>
				<div className='container'>
					<div className='row justify-content-evenly align-items-center'>
						<div className='help-box'>
							<h4>REGISTER PRODUCT</h4>
							<a
								href='/src/pages/support/register/index.html'
								className='btn btn-secondary btn-hover-primary'>
								Get Started
							</a>
						</div>
						<div className='help-box'>
							<h4>FAQ’s</h4>
							<a
								href='/src/pages/support/faq/index.html'
								className='btn btn-secondary btn-hover-primary'>
								find out more
							</a>
						</div>
						<div className='help-box'>
							<h4>videos</h4>
							<a
								href='/src/pages/support/video-tutorials/index.html'
								className='btn btn-secondary btn-hover-primary'>
								Watch Now
							</a>
						</div>
						<div className='help-box'>
							<h4>replacement parts</h4>
							<a
								href='https://hisense.encompass.com/'
								className='btn btn-secondary btn-hover-primary'>
								order now
							</a>
						</div>
						<div className='help-box'>
							<h4>contact hisense</h4>
							<a
								href='/src/pages/contact/index.html'
								className='btn btn-secondary btn-hover-primary'>
								order now
							</a>
						</div>
						<div className='help-box'>
							<h4>Technical support</h4>
							<a
								href='/src/pages/contact/index.html'
								className='btn btn-secondary btn-hover-primary'>
								contact
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default NeedHelpBox

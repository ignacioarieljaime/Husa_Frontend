import React from 'react'

function NeedHelpBox() {
	return (
		<section>
			<div class='support-help'>
				<h3>Need More Help?</h3>
				<div class='container'>
					<div class='row justify-content-evenly align-items-center'>
						<div class='help-box'>
							<h4>REGISTER PRODUCT</h4>
							<a
								href='/src/pages/support/register/index.html'
								class='btn btn-secondary btn-hover-primary'>
								Get Started
							</a>
						</div>
						<div class='help-box'>
							<h4>FAQ’s</h4>
							<a
								href='/src/pages/support/faq/index.html'
								class='btn btn-secondary btn-hover-primary'>
								find out more
							</a>
						</div>
						<div class='help-box'>
							<h4>videos</h4>
							<a
								href='/src/pages/support/video-tutorials/index.html'
								class='btn btn-secondary btn-hover-primary'>
								Watch Now
							</a>
						</div>
						<div class='help-box'>
							<h4>replacement parts</h4>
							<a
								href='https://hisense.encompass.com/'
								class='btn btn-secondary btn-hover-primary'>
								order now
							</a>
						</div>
						<div class='help-box'>
							<h4>contact hisense</h4>
							<a
								href='/src/pages/contact/index.html'
								class='btn btn-secondary btn-hover-primary'>
								order now
							</a>
						</div>
						<div class='help-box'>
							<h4>Technical support</h4>
							<a
								href='/src/pages/contact/index.html'
								class='btn btn-secondary btn-hover-primary'>
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

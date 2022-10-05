import FaceBookIcon from './../icons/FaceBookIcon'
import InstagramIcon from './../icons/InstagramIcon'
import Logo from './../icons/Logo'
import TwitterIcon from './../icons/TwitterIcon'
import YouTubeIcon from './../icons/YouTubeIcon'
import React from 'react'

function Footer() {
	return (
		<footer className='footer p-6 pt-md-16 px-md-6 pb-md-6'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12 col-lg-7 col-xl-6 full-width-border-sm'>
						<div className='row justify-content-between align-items-start'>
							<a
								href='/pages/landing/index.html'
								className='p-0 px-md-3 mb-11'>
								<Logo color={'#009E91'} height={"14"} width={"86"} />
							</a>
							<div className='px-0 footer-nav'>
								<ul>
									<li className='pb-5 pt-2'>
										<a href='/pages/company/index.html'>
											<span className='underline-on-hover'>COMPANY</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='#'>
											<span className='underline-on-hover'>
												AUTHORIZED RETAILERS
											</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='#'>
											<span className='underline-on-hover'>CAREERS</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='#'>
											<span className='underline-on-hover'>COMPLIANCE</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='#'>
											<span className='underline-on-hover'>DO NOT SELL</span>
										</a>
									</li>
								</ul>
							</div>
							<div className='px-0 footer-nav'>
								<ul>
									<li className='pb-5 pt-2'>
										<a href='#'>
											<span className='underline-on-hover'>TV + AUDIO</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='#'>
											<span className='underline-on-hover'>HOME APPLIANCE</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='#'>
											<span className='underline-on-hover'>AIR PRODUCTS</span>
										</a>
									</li>
								</ul>
							</div>
							<div className='px-0 footer-nav'>
								<ul>
									<li className='pb-5 pt-2'>
										<a href='/pages/commercial/index.html'>
											<span className='underline-on-hover'>COMMERCIAL</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='/pages/support/index.html'>
											<span className='underline-on-hover'>SUPPORT</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='/pages/support/faq/index.html'>
											<span className='underline-on-hover'>FAQ</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='/pages/contact/index.html'>
											<span className='underline-on-hover'>CONTACT</span>
										</a>
									</li>
									<li className='py-5'>
										<a href='/pages/support/register/index.html'>
											<span className='underline-on-hover'>REGISTER</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-5 col-xl-6 full-width-border-sm mt-6 mt-md-0'>
						<div className='row justify-content-start justify-content-md-end align-items-start'>
							<div className='social-media me-12'>
								<label className='mb-4'>Follow Us</label>
								<div className='row justify-content-start align-items-center'>
									<a href='#'>
										<YouTubeIcon />
									</a>
									<a href='#'>
										<InstagramIcon />
									</a>
									<a href='#'>
										<TwitterIcon />
									</a>
									<a href='#'>
										<FaceBookIcon />
									</a>
								</div>
							</div>
							<div className='footer-nav col-md-4 my-8 mt-md-0'>
								<a href='#'>
									<span className='underline-on-hover'>GLOBAL</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='row website-info mt-md-16 mt-6'>
					<a href='#'>
						<span className='underline-on-hover'>Legal Disclaimer</span>
					</a>
					<a href='#'>
						<span className='underline-on-hover'>Privacy Policy</span>
					</a>
					<a href='#'>
						<span className='underline-on-hover'>Recycling Information</span>
					</a>
					<a href='#'>
						<span className='underline-on-hover'>Sitemap</span>
					</a>
					<a href='#'>
						<span className='underline-on-hover'>
							California Consumer Privacy Act Portal
						</span>
					</a>
					<div className='full-width-border-sm'></div>
					<span>2022 © Copyright Hisense.</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer

import React from 'react'

function ProductSupportNavBar() {
	return (
		<div className='catalog-navbar bg-black py-3'>
			<nav className='container'>
				<ul className='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li className='me-md-auto'>
						<span className='text-secondary'>HRM145N6AVD</span>
					</li>
					<li>
						<a href='#video'>
							<span className='underline-on-hover'>VIDEOS</span>
						</a>
					</li>
					<li>
						<a href='#faqs'>
							<span className='underline-on-hover'>FAQS</span>
						</a>
					</li>
					<li>
						<a href='#registeration'>
							<span className='underline-on-hover'>PRODUCT REGISTRATION</span>
						</a>
					</li>
					<li>
						<a href='#parts'>
							<span className='underline-on-hover'>REPLACEMENT PARTS</span>
						</a>
					</li>
					<li>
						<a href='#contact-support'>
							<span className='underline-on-hover'>CONTACT SUPPORT</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default ProductSupportNavBar

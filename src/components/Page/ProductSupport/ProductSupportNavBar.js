import React from 'react'

function ProductSupportNavBar() {
	return (
		<div class='catalog-navbar bg-black py-3'>
			<nav class='container'>
				<ul class='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li class='me-md-auto'>
						<span class='text-secondary'>HRM145N6AVD</span>
					</li>
					<li>
						<a href='#video'>
							<span class='underline-on-hover'>VIDEOS</span>
						</a>
					</li>
					<li>
						<a href='#faqs'>
							<span class='underline-on-hover'>FAQS</span>
						</a>
					</li>
					<li>
						<a href='#registeration'>
							<span class='underline-on-hover'>PRODUCT REGISTRATION</span>
						</a>
					</li>
					<li>
						<a href='#parts'>
							<span class='underline-on-hover'>REPLACEMENT PARTS</span>
						</a>
					</li>
					<li>
						<a href='#contact-support'>
							<span class='underline-on-hover'>CONTACT SUPPORT</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default ProductSupportNavBar

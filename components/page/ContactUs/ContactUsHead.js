import React from 'react'

function ContactUsHead() {
	return (
		<section>
			<div className='container contact-info pt-12'>
				<h2>Contact Us</h2>
				<div className='row justify-content-center align-items-start'>
					<ul className='col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 pe-sm-18'>
						<li>
							<b>SUPPORT HOURS:</b>
						</li>
						<li>MONDAY-FRIDAY</li>
						<li>9AM - 9PM EST</li>
						<li>SATURDAY-SUNDAY9AM - 6PM EST</li>
						<li>
							<b>ADDRESS:</b>
						</li>
						<li>HISENSE USA</li>
						<li>105 SATELLITE BLVD SUITE I</li>
						<li>SUWANEE, GA30024&nbsp;USA</li>
					</ul>
					<ul className='col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 ps-sm-18'>
						<li>TVs and Tablets:</li>
						<li>
							<div className=''>
								<a href='tel:18889358880' className='text-primary'>
									1.888.935.8880
								</a>
							</div>
							<div>Appliances:</div>
							<a href='tel:18774653566' className='text-primary'>
								1.877.465.3566
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ContactUsHead

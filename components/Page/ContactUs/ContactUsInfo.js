import React from 'react'

// image
import Image from 'public/assets/images/smart-tv-xclass-descriptions.png'

function ContactUsInfo() {
	return (
		<section>
			<div className='row mx-0'>
				<div className='col-12 col-md-6 px-0 bg-black'>
					<article className='article row justify-content-center align-items-center h-100 mx-0 p-10 p-sm-20 p-md-5 p-lg-20'>
						<div className='px-xl-20'>
							<h2 className='mb-10 fs-2hx text-white'>Hisense USA</h2>
							<div className='pb-8'>
								<p className='fs-base fw-normal text-white mb-0'>
									We’re striving to become the most trusted company and loved
									brand in the U.S. Consumer Electronic and Home Appliance
									industries by offering solutions that customers desire. We
									also strive to be a company that everyone wants to work for in
									the U.S..
								</p>
							</div>
							<ul className='p-0 list-unstyled pt-8 border-primary border-top'>
								<li className='text-white fs-base fw-normal'>
									105 SATELLITE BLVD SUITE I
								</li>
								<li className='text-white fs-base fw-normal'>SUWANEE, GA</li>
								<li className='text-white fs-base fw-normal'>30024</li>
								<li className='text-white fs-base fw-normal'>USA</li>
							</ul>
						</div>
					</article>
				</div>
				<div className='col-12 col-md-6 px-0 header-secondary'>
					<img
						src={Image.src}
						alt='featured image'
						width='100%'
						height='100%'
					/>
				</div>
			</div>
		</section>
	)
}

export default ContactUsInfo

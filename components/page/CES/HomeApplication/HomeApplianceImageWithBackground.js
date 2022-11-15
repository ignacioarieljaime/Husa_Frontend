import React from 'react'

// image
import Image from 'public/assets/images/ces-2022-home-appliances/header.png'
import Logo from 'public/assets/images/ces-2022-home-appliances/ces-logo.png'

function HomeApplianceImageWithBackground() {
	return (
		<section>
			<div className='heading'>
				<img src={Image.src} alt='featured image' width='100%' height='100%' />
				<div className='heading-text'>
					<img src={Logo.src} alt='featured image' className='mb-4 mb-sm-9' />
					<h3 className='fs-md-3qx fw-normal mw-50 mx-auto'>
						HOME APPLIANCES
						<span className='d-block'>CES 2022</span>
						<span className='d-block'>PRODUCT LINEUP</span>
					</h3>
				</div>
			</div>
		</section>
	)
}

export default HomeApplianceImageWithBackground

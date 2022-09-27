import React from 'react'

// image
import Image from './../.././../../../public/assets/images/ces-2022-home-appliances/header.png'
import Logo from './../.././../../../public/assets/images/ces-2022-home-appliances/ces-logo.png'

function CESHomeIntro() {
	return (
		<section>
			<div class='heading'>
				<img src={Image.src} alt='featured image' width='100%' height='100%' />
				<div class='heading-text'>
					<img src={Logo.src} alt='featured image' class='mb-4 mb-sm-9' />
					<h1 class='fs-md-3qx fw-normal mw-50 mx-auto'>
						HOME APPLIANCES
						<span class='d-block'>CES 2022</span>
						<span class='d-block'>PRODUCT LINEUP</span>
					</h1>
				</div>
			</div>
		</section>
	)
}

export default CESHomeIntro

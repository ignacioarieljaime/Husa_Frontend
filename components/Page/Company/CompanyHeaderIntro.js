import React from 'react'

// image
import Image from './../../../public/assets/images/company/company-header.jpg'

function CompanyHeaderIntro() {
	return (
		<section>
			<div className='heading'>
				<img src={Image.src} alt='featured image' width='100%' height='100%' />
			</div>
		</section>
	)
}

export default CompanyHeaderIntro

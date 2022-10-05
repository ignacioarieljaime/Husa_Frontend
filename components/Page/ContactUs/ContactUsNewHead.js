import React from 'react'

// image
import Image from './../../../public/assets/images/4k-uled/heading.jpg'

function ContactUsNewHead() {
	return (
		<section>
			<div className='heading'>
				<img
					src={Image.src}
					alt='smart tv platforms'
					width='100%'
					height='100%'
				/>
				<div className='heading-text'>
					<h1 className='mw-50 mx-auto'>Contact Us</h1>
				</div>
			</div>
		</section>
	)
}

export default ContactUsNewHead

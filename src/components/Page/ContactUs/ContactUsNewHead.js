import React from 'react'

// image
import Image from './../../../../public/assets/images/4k-uled/heading.jpg'

function ContactUsNewHead() {
	return (
		<section>
			<div class='heading'>
				<img
					src={Image.src}
					alt='smart tv platforms'
					width='100%'
					height='100%'
				/>
				<div class='heading-text'>
					<h1 class='mw-50 mx-auto'>Contact Us</h1>
				</div>
			</div>
		</section>
	)
}

export default ContactUsNewHead

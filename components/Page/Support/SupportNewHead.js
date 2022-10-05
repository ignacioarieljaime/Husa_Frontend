import React from 'react'

// image
import Image from './../../../public/assets/images/support/support-bg.jpg'

function SupportNewHead() {
	return (
		<section>
			<div className='heading support-heading'>
				<img src={Image.src} alt='featured image' width='100%' />
				<div className='heading-text'>
					<h1>Hisense Support</h1>
				</div>
			</div>
		</section>
	)
}

export default SupportNewHead

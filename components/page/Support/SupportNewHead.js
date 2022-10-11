import React from 'react'

// image
import Image from 'public/assets/images/support/support-bg.jpg'

function SupportNewHead() {
	return (
		<section>
			<div className='heading support-heading'>
				<img src={Image.src} alt='featured image' width='100%' />
				<div className='heading-text'>
					<h3>Hisense Support</h3>
				</div>
			</div>
		</section>
	)
}

export default SupportNewHead

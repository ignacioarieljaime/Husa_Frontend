import React from 'react'

// image
import Image from 'public/assets/images/support/support-bg.jpg'

function SupportNewHeadV2() {
	return (
		<section>
			<div className='heading support-heading support-new-heading'>
				<img src={Image.src} alt='featured image' width='100%' />
				<div className='heading-text'>
					<h1 className='fs-3x text-white fw-normal'>Hisense Support</h1>
				</div>
			</div>
		</section>
	)
}

export default SupportNewHeadV2

import React from 'react'

// image
import Image from 'public/assets/images/support/support-bg.jpg'

function SupportHeadIntro() {
	return (
		<section>
			<div className='heading support-heading'>
				<img src={Image.src} alt='featured image' width='100%' />
				<div className='heading-text'>
					<h3>SUPPORT</h3>
					<p className='text text-white fs-5 px-3 p-sm-0'>
						Download Manuals, Firmware and access our Self-Support Center for
						answers to questions about your product.
						<br />
						GIVE US A CALL 1.888.935.8880
						<br />
						SHOOT US AN EMAIL SERVICE@HISENSE-USA.COM
					</p>
				</div>
			</div>
		</section>
	)
}

export default SupportHeadIntro

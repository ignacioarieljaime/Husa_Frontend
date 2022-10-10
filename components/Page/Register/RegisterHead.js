import React from 'react'

import Image from 'public/assets/images/support/support-bg.jpg'

function RegisterHead() {
	return (
		<section>
			<div className='heading register-heading'>
				<img src={Image.src} alt='featured image' width='100%' />
				<div className='heading-text'>
					<h1>
						DO IT NOW <br />
						BEFORE YOU FORGET
					</h1>
					<p className='text text-white fs-5 px-3 p-sm-0'>
						Registering is the best way to keep up to date with news
						<br />
						and updates about your product.
					</p>
				</div>
			</div>
		</section>
	)
}

export default RegisterHead

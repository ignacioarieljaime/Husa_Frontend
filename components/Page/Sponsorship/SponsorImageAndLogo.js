import React from 'react'

import Logo from 'public/assets/images/sponsership/fnatic-logo.png'
import Team from 'public/assets/images/sponsership/fnatic-team.png'

function SponsorImageAndLogo() {
	return (
		<section>
			<div className='container mt-20 position-relative'>
				<div className='floating-line d-none d-md-block'></div>
				<div className='row align-items-center z-index-1'>
					<div className='col-12 col-md-5 text-center mb-8 mb-md-0'>
						<img src={Logo.src} alt='featured image' />
					</div>
					<div className='col-12 col-md-7'>
						<img src={Team.src} alt='featured image' width='100%' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default SponsorImageAndLogo

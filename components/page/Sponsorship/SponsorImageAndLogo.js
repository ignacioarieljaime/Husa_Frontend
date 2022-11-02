import React from 'react'

import Logo from 'public/assets/images/sponsership/fnatic-logo.png'
import Team from 'public/assets/images/sponsership/fnatic-team.png'

function SponsorImageAndLogo({ data }) {
	let { structure } = data

	return (
		<section className='sponsor-ship-bg'>
			<div className='container pt-20 position-relative'>
				<div className='floating-line d-none d-md-block'></div>
				<div className='row align-items-center z-index-1'>
					<div className='col-12 col-md-5 text-center mb-8 mb-md-0'>
						<img
							src={structure?.logo?.src}
							alt={structure?.logo?.alt}
							style={{ maxWidth: '140px' }}
							width='100%'
						/>
					</div>
					<div className='col-12 col-md-7'>
						<img
							style={{ maxWidth: '640px' }}
							src={structure?.image?.src}
							alt={structure?.image?.alt}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SponsorImageAndLogo

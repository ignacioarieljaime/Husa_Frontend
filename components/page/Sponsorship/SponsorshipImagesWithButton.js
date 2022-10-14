import React from 'react'

// image
import HisenseFiFa from 'public/assets/images/sponsership/hisense-fifa.png'
import Sweepstakes from 'public/assets/images/sponsership/sweepstakes.png'
import Trip from 'public/assets/images/sponsership/win-a-trip.png'

function SponsorshipImagesWithButton() {
	return (
		<section className='sponsor-ship-bg'>

			<div className='container py-20 text-center gradient-texts'>
				<div>
					<img src={HisenseFiFa.src} alt='featured image' className='mb-12' />
				</div>
				<div>
					<img src={Sweepstakes.src} alt='featured image' className='mb-16' />
				</div>
				<div>
					<img src={Trip.src} alt='featured image' className='mb-9' />
				</div>
				<div>
					<a
						href='#'
						className='btn btn-secondary rounded-5 text-uppercase px-10 py-3'>
						learn more
					</a>
				</div>
			</div>
		</section>
	)
}

export default SponsorshipImagesWithButton

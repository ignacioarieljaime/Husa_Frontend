import React from 'react'

// image
import Image from 'public/assets/images/more-tv/header-television.png'

function MoreTvHead() {
	return (
		<section>
			<div className='blue-bg-more-tv '>
				<div className='container-fluid bg-bubble-effect px-md-8 py-20'>
					<div className='row align-items-center overflow-hidden'>
						<div className='col-12 col-md-6'>
							<h4 className='header-texts'>
								<span className='d-block text-gradient-more-tv'>Less talk.</span>
								More TV.
							</h4>
							<p className='fs-5 text-white fw-normal mb-7'>
								8 in 10 Americans believe a brand should invest in products, not
								ads.
								<span className='fw-bold'>We couldn’t agree more.</span>
							</p>
							<a href='#' className='btn btn-glowing rounded-5'>
								See The Lineup
							</a>
						</div>
						<div className='col-12 col-md-6'>
							<img src={Image.src} alt='featured image' width='100%' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTvHead

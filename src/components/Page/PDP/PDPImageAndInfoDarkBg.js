import React from 'react'

// image
import Image from './../../../../public/assets/images/pdp/45png.png'
import RectAngle from './../../../../public/assets/images/pdp/rectangle.png'
import Square from './../../../../public/assets/images/pdp/square.png'
import TvCircle from './../../../../public/assets/images/pdp/tv-circles.png'

function PDPImageAndInfoDarkBg() {
	return (
		<section style={{ marginBottom: '115px' }}>
			<div className='bg-black'>
				<div className='container spec-info-section pb-0'>
					<h2 className='text-muted fs-2 fw-normal mb-4'>
						Peak Brightness • Local Dimming
					</h2>
					<h3 className='fs-5tx mb-20 text-white'>Brighter picture, Better HDR</h3>
					<div className='row mb-20'>
						<div className='col-12 col-md-6 offset-0 offset-md-6'>
							<p className='fs-3 fw-normal mb-4 text-muted'>
								Let’s start with the science. Screen brightness is measured in
								nits. One nit is the same brightness as one candle. So the
								higher the nit rating, the brighter the screen and the wider the
								contrast control to produce stunning imagery. 
							</p>
						</div>
					</div>
					<div className='row align-items-center mb-15'>
						<div className='col-12 col-md-8 order-2 order-md-1'>
							<img src={Image.src} alt='featured image' width='100%' />
						</div>
						<div className='col-12 col-md-4 order-1 order-md-2 mb-10 mb-md-0'>
							<div className='text-white mb-10'>
								<h4 className='fs-4 fw-bolder-700 mb-4'>Peak Brightness</h4>
								<p className='fs-6 fw-normal text-muted mb-4'>
									The average TV is 250-350 nits. Anything over 500 nits is
									extremely good. This television is up-to-600 nits peak
									brightness.
								</p>
							</div>
							<div className='text-white'>
								<h4 className='fs-4 fw-bolder-700 mb-4'>
									Full Array Local Dimming
								</h4>
								<p className='fs-6 fw-normal text-muted mb-4'>
									The U6 series has brightness control across up-to-48 local
									dimming zones. Local dimming, in combination with peak
									brightness, are critical to correctly reproducing HDR content.
								</p>
							</div>
						</div>
					</div>
					<div className='row align-items-center mb-20'>
						<div className='col-12 col-md-6'>
							<div className='text-white'>
								<h3 className='fs-3x fw-bolder-700 mb-4'>
									Computational audio Key to performance
								</h3>
								<p className='fs-m5 fw-normal text-muted mb-4'>
									This area can be used for both close up shots of imagery, tv,
									module etc. This area can be used for both close up shots of
									imagery, tv, module etc. This area can be used for both close
									up shots.
								</p>
							</div>
						</div>
					</div>
					<div className='row align-items-center'>
						<div className='col-12 col-md-6 px-3 px-md-8 mb-16 mb-md-0'>
							<div className='text-white'>
								<img src={RectAngle.src} width='100%' alt='featured image' />
								<p className='fs-m5 fw-normal text-muted mt-12'>
									This area can be used for both close up shots of imagery, tv,
									module etc. This area can be used for both close up shots of
									imagery, tv, module etc. This area can be used for both close
									up shots.
								</p>
							</div>
						</div>
						<div className='col-12 col-md-6 px-3 px-md-8'>
							<div className='text-white'>
								<img src={Square.src} width='100%' alt='featured image' />
								<p className='fs-m5 fw-normal text-muted mt-12'>
									This area can be used for both close up shots of imagery, tv,
									module etc. This area can be used for both close up shots of
									imagery, tv, module etc. This area can be used for both close
									up shots.
								</p>
							</div>
						</div>
					</div>
					<div className='middle-banner'>
						<p className='fs-m5 fw-normal text-muted mt-12'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							sodales nisl vitae lorem lobortis dictum. Donec egestas lectus ut
							massa viverra pharetra.
						</p>
						<img src={TvCircle.src} alt='featured image' className='w-100' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default PDPImageAndInfoDarkBg

import React from 'react'

// image
import Image from './../../../../public/assets/images/pdp/45png.png'

function PDPImageAndInfoLightGrayBg() {
	return (
		<section>
			<div className='container spec-info-section'>
				<h2 className='text-muted fs-2 fw-normal mb-4'>4K ULED ™</h2>
				<h3 className='fs-5tx mb-20'>Sharper, smoother pictures</h3>
				<div className='row mb-20'>
					<div className='col-12 col-md-6 offset-0 offset-md-6'>
						<p className='fs-3 fw-normal mb-4'>
							The 4K greatness, but better. The U6G has our exclusive ULED
							technologies. They boost color, contrast, brightness, motion… we
							could go on. It’s the TV your old TV wants to be.
						</p>
					</div>
				</div>
				<div className='row align-items-center'>
					<div className='col-12 col-md-8 order-2 order-md-1'>
						<img src={Image.src} alt='featured image' width='100%' />
					</div>
					<div className='col-12 col-md-4 order-1 order-md-2 mb-10 mb-md-0'>
						<h4 className='fs-4 fw-bolder-700 mb-4'>ULED</h4>
						<p className='fs-6 fw-normal mb-4'>
							Hisense’s proprietary ULED technologies boost color, contrast,
							brightness, and motion. This suite of patented hardware and
							software technologies delivers an engaging and completely unique
							picture that can only be delivered by Hisense.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PDPImageAndInfoLightGrayBg

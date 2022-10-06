import React from 'react'

// image
import Image from './../../../public/assets/images/pdp/labeled-tv.png'

function PDPImageAndInfoGrayBg() {
	return (
		<section>
			<div className='bg-muted py-20'>
				<div className='container pb-20 text-center'>
					<div className='mb-10'>
						<img src={Image.src} alt='featured image' width='90%' />
					</div>
					<p className='text-uppercase fs-7 text-muted mb-5'>
						Big on features, not price tags
					</p>
					<h3 className='fs-3x mw-50 mx-auto mb-8'>
						The TV that’s great for everyone.
					</h3>
					<div>
						<p className='fs-m5 mb-6'>
							We’re bringing Quantum Dot Color to the people. Enjoy over one
							billion colors, without worrying about how many commas are on the
							price tag. You’re welcome.
						</p>
						<p className='fs-m5'>
							The great value U6G makes lots more premium tech readily available
							too. Like 4K resolution, Dolby Vision HDR and Full Array Local
							Dimming zones. Sounds like science, looks like a way more
							expensive TV.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PDPImageAndInfoGrayBg

import React from 'react'

// image
import Image from './../../../public/assets/images/laser-tv/lasertv-4k-logo.png'

function LasterHead() {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 pt-20 pb-12'>
					<article className='article text-center'>
						<img
							src={Image.src}
							alt='featured image'
							className='banner-logo mb-20'
						/>
						<div>
							<p className='fs-5 text-primary fw-normal mx-auto mb-1'>
								BIG.BOLD.BEAUTIFUL.
							</p>
						</div>
						<div>
							<p className='fw-normal text-white m-auto'>
								Every seat in your house becomes the best seat with the Hisense
								100” and 120” 4K UHD Smart Laser TV with Wide Color Gamut.
								Immerse yourself in this incredible TV and experience the game,
								a movie, or your favorite TV show like never before.
							</p>
						</div>
						<a href='#' className='btn btn-outline-light rounded-5 px-8 mt-12'>
							SHOP LASER TVs
						</a>
					</article>
				</div>
			</div>
		</section>
	)
}

export default LasterHead

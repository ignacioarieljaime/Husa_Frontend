import React from 'react'

// image
import ImageHisenseSign from './../../../public/assets/images/more-tv/hisense-sign.png'
import ImageJoel from './../../../public/assets/images/more-tv/joel-reading.png'

function MoreTvHisensePromise() {
	return (
		<section>
			<div className='blue-bg'>
				<div className='container-fluid bg-bubble-effect px-md-8 py-20'>
					<div className='row align-items-end'>
						<div className='col-12 col-md-6 mb-20'>
							<h2 className='fs-3hx fw-normal text-white mb-20'>
								The Hisense Promise
							</h2>
							<p className='fs-5 text-white fw-normal mb-7'>
								America, it’s time to get real. People don’t buy TVs to stare at
								the logo. They want to be dazzled by the picture, in awe of the
								sounds, and trust their new TV won’t ever let you down. That is
								why Hisense is proud to boast one of the smallest marketing
								budgets in our category - meaning more money invested in our
								products and not on pretentious, artsy advertising campaigns.
							</p>
							<p className='fs-5 text-white fw-normal mb-7'>
								Sure, we may not be the biggest or the most well known but
								there’s one thing you can be sure of – Hisense will always
								strive to make the latest technologies available to all.
							</p>
							<img src={ImageHisenseSign.src} alt='featured image' />
						</div>
						<div className='col-12 col-md-6'>
							<img
								src={ImageJoel.src}
								alt='featured image'
								width='100%'
								className='mb-n20'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTvHisensePromise

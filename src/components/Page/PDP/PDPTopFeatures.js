import React from 'react'

// image
import Image from './../../../../public/assets/images/pdp/45png.png'
import Rectangle from './../../../../public/assets/images/pdp/rectangle.png'

// component
import CardImage from './PDPFeatureItem'
import PDPFeatureItemWithDescription from './PDPFeatureItemWithDescription'

function PDPTopFeatures() {
	return (
		<section>
			<div class='bg-black'>
				<div class='container spec-info-section pb-0'>
					<div class='text-center'>
						<div class='text-muted fs-8 fw-normal mb-5'>TOP FEATURES</div>
						<h2 class='fs-3x mb-20 text-white'>One core to rule them all</h2>
					</div>
					<div class='row justify-content-evenly align-items-center mb-20'>
						<CardImage />
						<CardImage />
						<CardImage />
						<CardImage />
						<CardImage />
						<CardImage />
						<CardImage />
						<CardImage />
					</div>
					<div class='row justify-content-evenly align-items-center mb-20'>
						<PDPFeatureItemWithDescription />
						<PDPFeatureItemWithDescription />
						<PDPFeatureItemWithDescription />
					</div>
				</div>
				<div class='border-top border-secondary'></div>
				<div class='container spec-info-section'>
					<div class='row align-items-center'>
						<div class='col-12 col-md-7 order-2 order-md-1 position-relative'>
							<img src={Image.src} alt='featured image' width='100%' />
							<div class='close-up-shot right'></div>
						</div>
						<div class='col-12 col-md-4 offset-md-1 order-1 order-md-2 mb-10 mb-md-0'>
							<div class='text-muted fs-8 fw-normal mb-5'>
								SUBHEAD GOES HERE
							</div>
							<h4 class='fs-3x fw-bolder-700 text-white mb-4'>Close Up Shot</h4>
							<p class='fs-6 fw-normal text-muted mb-4'>
								This area can be used for both close up shots of imagery, tv,
								module etc. This area can be used for both close up shots of
								imagery, tv, module etc. This area can be used for both close up
								shots.
							</p>
						</div>
					</div>
					<div class='row justify-content-evenly align-items-center my-20 py-20'>
						<div class='col-12 col-sm-4 col-md-3 mb-7 mb-sm-0'>
							<div class='border-top border-dark border-5 pt-5'>
								<div class='fs-3x fw-bolder-700 text-white'>1M+</div>
								<span class='fs-m5 text-muted'>Stats goes here</span>
							</div>
						</div>
						<div class='col-12 col-sm-4 col-md-3 mb-7 mb-sm-0'>
							<div class='border-top border-dark border-5 pt-5'>
								<div class='fs-3x fw-bolder-700 text-white'>92%</div>
								<span class='fs-m5 text-muted'>Stats goes here</span>
							</div>
						</div>
						<div class='col-12 col-sm-4 col-md-3 mb-7 mb-sm-0'>
							<div class='border-top border-dark border-5 pt-5'>
								<div class='fs-3x fw-bolder-700 text-white'>4.9/5.0</div>
								<span class='fs-m5 text-muted'>Stats goes here</span>
							</div>
						</div>
					</div>
					<div class='row align-items-center'>
						<div class='col-12 col-md-4 offset-md-1 mb-10 mb-md-0'>
							<div class='text-muted fs-8 fw-normal mb-5'>
								SUBHEAD GOES HERE
							</div>
							<h4 class='fs-3x fw-bolder-700 text-white mb-4'>Close Up Shot</h4>
							<p class='fs-6 fw-normal text-muted mb-4'>
								This area can be used for both close up shots of imagery, tv,
								module etc. This area can be used for both close up shots of
								imagery, tv, module etc. This area can be used for both close up
								shots.
							</p>
						</div>
						<div class='col-12 col-md-4 offset-md-3 position-relative'>
							<img src={Rectangle.src} alt='featured image' width='100%' />
							<div class='close-up-shot left'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PDPTopFeatures

import React from 'react'

// image
import ScreenSizeImage from './../../../../public/assets/images/pdp/sizes.png'

function PDMImageAndInfoSilverBg() {
	return (
		<section>
			<div class='bg-muted pt-0 pt-md-20'>
				<div class='container spec-info-section pb-0'>
					<h2 class='text-muted fs-2 fw-normal mb-4'>SCREEN SIZE</h2>
					<h3 class='fs-5tx mb-20'>Comes in four sizes</h3>
					<div class='row mb-20'>
						<div class='col-12 col-md-6 offset-0 offset-md-6'>
							<p class='fs-3 fw-normal mb-4'>
								The U6G comes in four sizes to suit different rooms and budgets.
								Take your pick from 50, 55, 65 and 75-inch screens. Each one has
								all the features you need to produce incredible detail,
								whatever’s on screen.
							</p>
						</div>
					</div>
					<div>
						<img src={ScreenSizeImage.src} alt='featured image' width='100%' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default PDMImageAndInfoSilverBg

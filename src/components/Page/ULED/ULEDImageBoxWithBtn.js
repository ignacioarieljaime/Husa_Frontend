import React from 'react'

// image
import Image from './../../../../public/assets/images/4k-uled/jargo.jpg'

function ULEDImageBoxWithBtn() {
	return (
		<section>
			<div class='jarg-section pt-0'>
				<div class='container-fluid px-lg-20'>
					<div class='row'>
						<div class='col-12'>
							<img
								src={Image.src}
								alt='featured-image'
								class='m-auto'
								width='100%'
							/>
							<div class='jarg-switch'>
								<span class='jarg-on active'>JARGON</span>
								<input
									type='checkbox'
									name='jarg-switch'
									class='switch-button'
									id='jarg-switch'
								/>
								<label for='jarg-switch'></label>
								<span class='jarg-off'>JARGOFF</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ULEDImageBoxWithBtn

import React from 'react'
import PDPChooseULEDTvItem from './PDPChooseULEDTvitem'

function PDPChooseULEDTvBox() {
	return (
		<section>
			<div class='container spec-info-section'>
				<h2 class='fs-3x fw-bolder-700 text-center tiny-banner mx-auto mb-15'>
					Choose the ULED that works for you
				</h2>
				<div class='row align-items-center mb-20 px-0 px-lg-20'>
					<PDPChooseULEDTvItem />
					<PDPChooseULEDTvItem />
					<PDPChooseULEDTvItem />
				</div>
				<div class='side-line'>
					<span class='fs-5 bg-white'>Reviews</span>
				</div>
			</div>
		</section>
	)
}

export default PDPChooseULEDTvBox

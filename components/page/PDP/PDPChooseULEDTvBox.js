import React from 'react'
import PDPChooseULEDTvItem from './PDPChooseULEDTvItem'

function PDPChooseULEDTvBox() {
	return (
		<section>
			<div className='container pdp-spec-info-section'>
				<h2 className='fs-3x fw-bolder-700 text-center tiny-banner mx-auto mb-15'>
					Choose the ULED that works for you
				</h2>
				<div className='row align-items-center mb-20 px-0 px-lg-20'>
					<PDPChooseULEDTvItem />
					<PDPChooseULEDTvItem />
					<PDPChooseULEDTvItem />
				</div>
				<div className='side-line'>
					<span className='fs-5 bg-white'>Reviews</span>
				</div>
			</div>
		</section>
	)
}

export default PDPChooseULEDTvBox

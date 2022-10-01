import React from 'react'

function PDPTextAndLongImageBox() {
	return (
		<section>
			<div className='container spec-info-section text-center mb-20'>
				<div className='tiny-banner'>
					<div className='text-muted fs-8 fw-normal mb-6'>SUBHEAD GOES HERE</div>
					<h2 className='fs-3x mb-6'>Additional Section</h2>
					<p className='fs-m5 mb-15'>
						Here we can add additional imagery of angels or even more model
						sections, animation etc. Here we can add additional imagery of
						angels or even more model sections, animation.
					</p>
				</div>
				<div className='row'>
					<div className='col-12 col-md-4 py-3'>
						<div className='skeleton rectangle'></div>
					</div>
					<div className='col-12 col-md-8 py-3'>
						<div className='skeleton rectangle'></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PDPTextAndLongImageBox

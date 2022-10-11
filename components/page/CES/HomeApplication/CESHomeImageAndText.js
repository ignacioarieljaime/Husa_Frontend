import React from 'react'
import CESSliderBox from './CESSliderBox'

function CESHomeImageAndText() {
	return (
		<section>
			<div className='ces-bg-gradient-dark py-5 py-md-20'>
				<div className='container py-md-10'>
					<div className='row align-items-center'>
						<div className='col-12 col-md-6 text-white'>
							<h3 className='fs-2tx fw-normal mb-9'>
								HISENSE HFG3501CPS SLIDE-IN GAS RANGE
							</h3>
							<h4 className='fs-1 fw-normal mb-7'>True convection oven</h4>
							<p className='fs-5 fw-normal mb-20'>
								The Hisense slide-in gas range features six burners and comes
								with a large 5.8 cu. ft. capacity true convection oven, allowing
								you to cook family-size meals quickly and with ease.
							</p>
							<h6 className='fs-1 fw-normal mb-7'>Make cleanup a snap</h6>
							<p className='fs-5 fw-normal'>
								The fast-preheat feature saves you valuable time, while an
								air-fry option provides a healthier way to enjoy fried foods. In
								addition, dehydration and bread proofing programs allow
								home-chefs to experience new cooking techniques. Traditional
								self-cleaning and steam-cleaning modes help make cleanup a snap.
							</p>
						</div>
						<div className='col-12 col-md-6 text-center'>
							<CESSliderBox />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CESHomeImageAndText

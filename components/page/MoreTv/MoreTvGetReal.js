import React from 'react'

// image
import PeopleHeat from "public/assets/images/more-tv/people-heat-map.png"

function MoreTvGetReal() {
	return (
		<section>
			<div className='blue-bg'>
				<div className='bg-single-bubble pt-20 text-center text-white'>
					<h2 className='fw-normal fs-3hx mb-7'>Lets get real</h2>
					<h3 className='fw-normal fs-2'>America wants less talk and more TV</h3>
					<div className='bg-joel-pointer pb-20 px-md-8'>
						<div className='container-fluid'>
							<div className='row justify-content-center justify-content-md-start charts-align'>
								<div className='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div className='chart-block'>
										<canvas
											id='ads-charts'
											className='charts'
											width='400'
											height='400'></canvas>
										<p className='mb-3 lh-1 text-start text-gradient fs-4x fw-bolder-700'>
											60<span className='fs-2hx'>%</span>
										</p>
										<p className='fw-normal'>
											Think most advertising these days is nonsense
										</p>
									</div>
								</div>
								<div className='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div className='chart-block'>
										<canvas
											id='invest-chart'
											className='charts'
											width='400'
											height='400'></canvas>
										<p className='mb-3 lh-1 text-start text-gradient fs-4x fw-bolder-700'>
											8<span className='fs-2hx'>/10</span>
										</p>
										<p className='fw-normal'>
											Believe a brand should invest in products not pretentious
											artsy advertisements
										</p>
									</div>
								</div>
							</div>
							<div className='row align-items-end justify-content-center justify-content-md-start charts-align'>
								<div className='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div className='chart-block'>
										<canvas
											id='value-chart'
											className='charts'
											width='400'
											height='400'></canvas>
										<p className='mb-3 lh-1 text-start text-gradient fs-4x fw-bolder-700'>
											61<span className='fs-2hx'>%</span> v 4
											<span className='fs-2hx'>%</span>
										</p>
										<p className='fw-normal'>
											People look for great value over a brands purpose when
											purchasing a new TV
										</p>
									</div>
								</div>
								<div className='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div className='chart-block'>
										<img
											src={PeopleHeat.src}
											alt='featured image'
											className='people-heat-map'
										/>
										<div className='mt-auto'>
											<p className='mb-3 lh-1 text-start text-gradient fs-4x fw-bolder-700'>
												80<span className='fs-2hx'>%</span>
											</p>
											<p className='fw-normal'>
												Think theres way too much advertising these days (sorry
												about that!)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTvGetReal

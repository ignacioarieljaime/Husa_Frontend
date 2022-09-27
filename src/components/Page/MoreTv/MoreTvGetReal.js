import React from 'react'

// image
import PeopleHeat from "./../../../../public/assets/images/more-tv/people-heat-map.png"

function MoreTvGetReal() {
	return (
		<section>
			<div class='blue-bg'>
				<div class='bg-single-bubble pt-20 text-center text-white'>
					<h2 class='fw-normal fs-3hx mb-7'>Lets get real</h2>
					<h3 class='fw-normal fs-2'>America wants less talk and more TV</h3>
					<div class='bg-joel-pointer pb-20 px-md-8'>
						<div class='container-fluid'>
							<div class='row justify-content-center justify-content-md-start charts-align'>
								<div class='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div class='chart-block'>
										<canvas
											id='ads-charts'
											class='charts'
											width='400'
											height='400'></canvas>
										<p class='mb-3 lh-1 text-start text-gradient fs-4x fw-bolder-700'>
											60<span class='fs-2hx'>%</span>
										</p>
										<p class='fw-normal'>
											Think most advertising these days is nonsense
										</p>
									</div>
								</div>
								<div class='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div class='chart-block'>
										<canvas
											id='invest-chart'
											class='charts'
											width='400'
											height='400'></canvas>
										<p class='mb-3 lh-1 text-start text-gradient fs-4x fw-bolder-700'>
											8<span class='fs-2hx'>/10</span>
										</p>
										<p class='fw-normal'>
											Believe a brand should invest in products not pretentious
											artsy advertisements
										</p>
									</div>
								</div>
							</div>
							<div class='row align-items-end justify-content-center justify-content-md-start charts-align'>
								<div class='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div class='chart-block'>
										<canvas
											id='value-chart'
											class='charts'
											width='400'
											height='400'></canvas>
										<p class='mb-3 lh-1 text-start text-gradient fs-4x fw-bolder-700'>
											61<span class='fs-2hx'>%</span> v 4
											<span class='fs-2hx'>%</span>
										</p>
										<p class='fw-normal'>
											People look for great value over a brands purpose when
											purchasing a new TV
										</p>
									</div>
								</div>
								<div class='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div class='chart-block'>
										<img
											src={PeopleHeat.src}
											alt='featured image'
											class='people-heat-map'
										/>
										<div class='mt-auto'>
											<p class='mb-3 lh-1 text-start text-gradient fs-4x fw-bolder-700'>
												80<span class='fs-2hx'>%</span>
											</p>
											<p class='fw-normal'>
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

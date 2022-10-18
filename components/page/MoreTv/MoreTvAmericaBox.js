import React from 'react'
import { Doughnut, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// image
import Image from 'public/assets/images/more-tv/people-heat-map.png'

ChartJS.register(ArcElement, Tooltip, Legend)

function MoreTvAmericaBox({ data }) {
	const chartData = {
		datasets: [
			{
				backgroundColor: ['#259CCC', '#CEEAF9'],
				data: [60, 40],
				borderColor: 'transparent',
				responsive: true
			}
		]
	}
	const { structure } = data

	return (
		<section>
			<div className='blue-bg-more-tv'>
				<div className='bg-single-bubble pt-20 text-center text-white'>
					<h2 className='fw-normal fs-3hx mb-7'>{structure.title.value}</h2>
					<h3 className='fw-normal fs-2'>{structure.littleTitle.value}</h3>
					<div className='bg-joel-pointer pb-20 px-md-8'>
						<div className='container-fluid'>
							<div className='row justify-content-center justify-content-md-start charts-align-more-tv'>
								<div className='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div className='chart-block'>
										<Doughnut data={chartData} width={297} height={297} />
										<p className='mb-3 lh-1 text-start text-gradient-more-tv fs-4x fw-bolder-700'>
											60<span className='fs-2hx'>%</span>
										</p>
										<p className='fw-normal'>
											Think most advertising these days is nonsense
										</p>
									</div>
								</div>
								<div className='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div className='chart-block'>
										<Pie data={chartData} width={297} height={297} />
										<p className='mb-3 lh-1 text-start text-gradient-more-tv fs-4x fw-bolder-700'>
											8<span className='fs-2hx'>/10</span>
										</p>
										<p className='fw-normal'>
											Believe a brand should invest in products not pretentious
											artsy advertisements
										</p>
									</div>
								</div>
							</div>
							<div className='row align-items-end justify-content-center justify-content-md-start charts-align-more-tv'>
								<div className='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4'>
									<div className='chart-block'>
										<Pie data={chartData} width={297} height={297} />
										<p className='mb-3 lh-1 text-start text-gradient-more-tv fs-4x fw-bolder-700'>
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
											src={Image.src}
											alt='featured image'
											className='people-heat-map-more-tv'
										/>
										<div className='mt-auto'>
											<p className='mb-3 lh-1 text-start text-gradient-more-tv fs-4x fw-bolder-700'>
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

export default MoreTvAmericaBox

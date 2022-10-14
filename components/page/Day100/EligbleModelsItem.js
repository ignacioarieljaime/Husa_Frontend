import Tv from 'public/assets/images/100-day/tv.png'
const EligbleModelsItem = () => {
	return (
		<div className='item day-100'>
			<div className='d-flex flex-column justify-content-between align-items-start'>
				<div>
					<span className='text-primary fs-4 fw-bold'>Great</span>
					<div className='text-center position-relative'>
						<img src={Tv.src} alt='tv' width='90%' />
						<div className='infill-overlay'>Use current infills</div>
					</div>
					<div>
						<h5 className='item-size'>65-inch or larger</h5>
						<h4 className='item-series'>2022 U6 Series</h4>
						<ul className='item-features'>
							<li>4K Quantum Dot ULED Google TV</li>
							<li>Up to 600 nits Peak Brightness</li>
							<li>Dolby Vision™ • Dolby Atmos®</li>
							<li>HDR10 / HDR10+ / HLG</li>
							<li>Voice Remote</li>
						</ul>
					</div>
				</div>
				<div className='text-left mt-8'>
					<button className='btn btn-primary rounded-5 px-5 py-2'>
						Shop Now
					</button>
					<a href='#' className='text-purple ms-5'>
						Learn More
					</a>
				</div>
			</div>
		</div>
	)
}

export default EligbleModelsItem

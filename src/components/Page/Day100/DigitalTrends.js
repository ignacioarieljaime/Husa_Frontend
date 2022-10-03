import DigitalTrendsLogo from '../../../../public/assets/images/100-day/dt_logo.png'

const DigitalTrends = () => {
	return (
		<section>
			<div className='bg-eggplant digital-trends py-20 d-none d-md-block'>
				<div className='container text-center my-10'>
					<h2 className='mb-10 fs-2hx text-white'>
						“The Hisense U8H is the sort of TV that makes a mockery of much more
						expensive TVs that literally pale in comparison”
					</h2>
					<img src={DigitalTrendsLogo.src} width='250px' />
				</div>
			</div>
		</section>
	)
}

export default DigitalTrends

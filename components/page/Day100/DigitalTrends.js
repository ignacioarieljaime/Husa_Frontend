const DigitalTrends = ({ data }) => {
	let { structure } = data
	return (
		<section className='day-100'>
			<div className='bg-eggplant digital-trends py-20 d-none d-md-block'>
				<div className='container text-center my-10'>
					<h2 className='mb-10 fs-2hx text-white'>{structure?.title?.value}</h2>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						width='250px'
					/>
				</div>
			</div>
		</section>
	)
}

export default DigitalTrends

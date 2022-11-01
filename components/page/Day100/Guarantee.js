const Gaurantee = ({ data }) => {
	let { structure } = data
	return (
		<section className='day-100'>
			<div className='bg-purple py-15'>
				<div className='container'>
					<div className='row align-items-center mb-15'>
						<div className='col-12 my-5 my-lg-0 col-md-6 order-2 order-md-2 order-lg-1 col-lg-4'>
							<div className='warranty-adv'>
								<h2>{structure?.leftTitle?.value}</h2>
								<p>{structure?.leftText?.value}</p>
							</div>
						</div>
						<div className='col-12 my-5 my-lg-0 col-md-6 order-1 order-md-1 order-lg-2 offset-md-3 offset-lg-0 col-lg-4'>
							<div className='text-center'>
								<img
									src={structure?.image?.src}
									alt={structure?.image?.alt}
									className='mb-6  mx-auto'
									width='80%'
								/>
							</div>
						</div>
						<div className='col-12 my-5 my-lg-0 col-md-6 order-3  col-lg-4'>
							<div className='warranty-adv'>
								<h2>{structure?.rightTitle?.value}</h2>
								<p>{structure?.rightText?.value}</p>
							</div>
						</div>
					</div>
					<div
						className='guarantee-details'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default Gaurantee

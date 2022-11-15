import Link from 'next/link'

const DoubleWarranty = ({ data }) => {
	let { structure } = data
	return (
		<section className='day-100'>
			<div className='bg-purple py-15'>
				<div className='container'>
					<div className='row align-items-center'>
						<Link
							href={
								structure?.leftLink?.value ? structure?.leftLink?.value : '/'
							}>
							<a className='d-none text-decoration-none d-md-block col-12 my-5 my-lg-0 col-md-6 order-2 order-md-2 order-lg-1 col-lg-4'>
								<div className='warranty-adv '>
									<h2>{structure?.leftTitle?.value}</h2>
									<p>{structure?.leftText?.value}</p>
								</div>
							</a>
						</Link>
						<div className='col-12 my-5 my-lg-0 col-md-6 order-1 order-md-1 order-lg-2 offset-md-3 offset-lg-0 col-lg-4'>
							<div className='text-center'>
								<img
									src={structure?.image?.src}
									alt={structure?.image?.alt}
									className='mb-6'
									width='50%'
								/>
							</div>
						</div>

						<Link
							href={
								structure?.rightLink?.value ? structure?.rightLink?.value : '/'
							}>
							<a className='d-none d-md-block text-decoration-none col-12 my-5 my-lg-0 col-md-6 order-3  col-lg-4'>
								<div className='warranty-adv'>
									<h2>{structure?.rightTitle?.value}</h2>
									<p>{structure?.rightText?.value}</p>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DoubleWarranty

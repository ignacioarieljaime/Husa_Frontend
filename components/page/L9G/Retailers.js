import React from 'react'

const Retailers = ({ pim, data: { structure } }) => {
	return (
		<section>
			<div className='py-9 py-md-15 px-6 '>
				<div className='text-center'>
					<h2 className='my-8 fs-2tx'>{structure?.title?.value}</h2>
					<p className='mb-9 fs-4'>{structure?.subtitle?.value}</p>
				</div>
				<div className='grid-container'>
					{structure?.list?.value.map((item, index) => (
						<div
							key={'retailer-' + index}
							className='grid-item d-flex align-items-center justify-content-center'>
							<img
								src={item?.image?.src}
								alt={item?.image?.alt}
								width='100%'
								style={{ maxWidth: '250px' }}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Retailers

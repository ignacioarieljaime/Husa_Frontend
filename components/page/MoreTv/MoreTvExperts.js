import React from 'react'
import MoreTvExpertsItem from './MoreTvExpertsItem'

function MoreTvExperts({ data }) {
	const { structure } = data

	return (
		<section>
			<div className='bg-light-blue'>
				<div className='container-fluid px-md-8 py-10 py-md-20'>
					<div className='row'>
						<div className='col-12 col-md-6 pe-lg-10 mb-20 mb-md-0'>
							<h4 className='fs-3tx fw-normal'>{structure.title.value}</h4>
							<img
								src={structure.image.src}
								alt={structure.image.alt}
								className='banner-logo'
							/>
						</div>
						<div className='col-12 col-md-6 ps-lg-10'>
							{structure.list.value.map((item, index) => (
								<MoreTvExpertsItem
									key={index}
									image={item.image}
									quote={item.quote.value}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTvExperts

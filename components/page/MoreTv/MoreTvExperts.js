import React from 'react'
import MoreTVExpertsItem from './MoreTvExpertsItem'

function MoreTVExperts({ data }) {
	const { structure } = data

	return (
		<section>
			<div className='bg-light-blue'>
				<div className='container-fluid px-md-8 py-10 py-md-20'>
					<div className='row'>
						<div className='col-12 col-md-6 pe-lg-10 mb-20 mb-md-0'>
							<h4 className='fs-3tx fw-normal'>
								{structure?.title?.value}

								<span style={{ color:"rgba(30, 81, 138, 1)" }}> {structure?.coloredTitle?.value}</span>
							</h4>
							<img
								src={structure?.image?.src}
								alt={structure?.image?.alt}
								className='banner-logo'
								height={'117'}
							/>
						</div>
						<div className='col-12 col-md-6 ps-lg-10'>
							{structure?.list?.value.map((item, index) => (
								<MoreTVExpertsItem
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

export default MoreTVExperts

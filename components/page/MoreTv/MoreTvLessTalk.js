import React from 'react'
import MoreTVLessTalkItem from './MoreTVLessTalkItem'

function MoreTVLessTalk({ data }) {
	const { structure } = data
	return (
		<section>
			<div className='container-fluid my-20 pt-md-20 overflow-hidden'>
				<div className='row'>
					<div className='col-12 col-md-6 mb-8'>
						<h4 className='fs-4hx fw-normal mb-16'>
							{structure?.title?.value}
							<span className='text-primary ms-2'>{structure?.primaryColoredTitle?.value}</span>
							<br />
							{structure?.title2?.value}
						</h4>
						<h5 className='fs-2 fw-normal'>{structure?.subTitle?.value}</h5>
					</div>
					<div className='col-12 col-md-6 mb-15 mb-md-0 position-relative'>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							className='d-block d-md-none w-100'
						/>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							className='big-tv-more-tv d-none d-md-block'
						/>
					</div>
					<div className='col-12 col-md-7 col-xl-6'>
						{structure.list.value.map((item, index) => (
							<MoreTVLessTalkItem
								key={index}
								image={item.image}
								title={item.description.value}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTVLessTalk

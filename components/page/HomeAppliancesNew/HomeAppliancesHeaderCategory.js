import React from 'react'

const HomeAppliancesHeaderCategory = ({ data }) => {
	const { structure } = data
	return (
		<section>
			<div className='ha_header_cat'>
				<div className='content'>
					<h4
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h4>
					<ul className='category'>
						{structure?.list?.value.map((item, index) => (
							<li key={index}>
								<div className='image'>
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										height={'100%'}
									/>
								</div>
								<h6>{item?.title?.value}</h6>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesHeaderCategory

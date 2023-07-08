import React from 'react'

const HomeAppliancesHeaderCategory = ({ data }) => {
	return (
		<section>
			<div className='ha_header_cat'>
				<div className='content'>
					<h4 className='title'>Home Appliances</h4>
					<ul className='category'>
						{[{}, {}, {}, {}].map((item, index) => (
							<li>
								<img
									src='https://files.hisense-usa.com/storage/hisense/asset/images/663d94b1fd4200.webp'
									alt='sd'
									height={'100%'}
								/>
								<h6>Dishwashers</h6>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesHeaderCategory

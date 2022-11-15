import React from 'react'

function CompanyNavBar() {
	return (
		<div className='catalog-navbar company bg-black'>
			<nav>
				<ul className='row justify-content-center justify-content-md-end align-items-center p-0 m-0'>
					<li>
						<a href='#misson'>
							<span className='underline-on-hover'>misson and vision</span>
						</a>
					</li>
					<li>
						<a href='#history'>
							<span className='underline-on-hover'>history</span>
						</a>
					</li>
					<li>
						<a href='#quality'>
							<span className='underline-on-hover'>quality</span>
						</a>
					</li>
					<li>
						<a href='#awards'>
							<span className='underline-on-hover'>awards & acknowledgements</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default CompanyNavBar

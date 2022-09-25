import React from 'react'

function CompanyNavBar() {
	return (
		<div class='catalog-navbar bg-black'>
			<nav>
				<ul class='row justify-content-center justify-content-md-end align-items-center p-0 m-0'>
					<li>
						<a href='#misson'>
							<span class='underline-on-hover'>misson and vision</span>
						</a>
					</li>
					<li>
						<a href='#history'>
							<span class='underline-on-hover'>history</span>
						</a>
					</li>
					<li>
						<a href='#quality'>
							<span class='underline-on-hover'>quality</span>
						</a>
					</li>
					<li>
						<a href='#awards'>
							<span class='underline-on-hover'>awards & acknowledgements</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default CompanyNavBar

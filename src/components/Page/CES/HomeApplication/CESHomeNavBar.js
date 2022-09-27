import React from 'react'

function CESHomeNavBar() {
	return (
		<div class='catalog-navbar bg-white'>
			<nav class=''>
				<ul class='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li class='me-md-auto'>
						<span class='text-secondary'>CES 2022 </span>
					</li>
					<li>
						<a href='#'>
							<span class='underline-on-hover text-primary'>
								PRODUCT LINEUP
							</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span class='underline-on-hover text-secondary'>ULED</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span class='underline-on-hover text-secondary'>LASER</span>
						</a>
					</li>
					<li class='px-3'>
						<a href='#' target='_blank'>
							<span class='underline-on-hover text-primary'>
								HOME APPLIANCES
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default CESHomeNavBar

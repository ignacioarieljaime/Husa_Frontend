import React from 'react'

function PDPNavBar() {
	return (
		<div class='catalog-navbar bg-black'>
			<nav class=''>
				<ul class='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li class='py-6 px-15'>
						<a href='#overview'>
							<span class='underline-on-hover text-uppercase text-center fw-light fs-m5'>
								Overview
							</span>
						</a>
					</li>
					<li class='py-6 px-15'>
						<a href='#specs'>
							<span class='underline-on-hover text-uppercase text-center fw-light fs-m5'>
								TECH SPECS
							</span>
						</a>
					</li>
					<li class='py-6 px-15'>
						<a href='/src/pages/support/index.html' target='_blank'>
							<span class='underline-on-hover text-uppercase text-center fw-light fs-m5'>
								Support
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default PDPNavBar

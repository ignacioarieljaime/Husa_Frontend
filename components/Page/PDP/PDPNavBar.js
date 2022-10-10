import React from 'react'

function PDPNavBar() {
	return (
		<div className='catalog-navbar bg-black'>
			<nav className=''>
				<ul className='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li className='py-6 px-15'>
						<a href='#overview'>
							<span className='underline-on-hover text-uppercase text-center fw-light fs-m5'>
								Overview
							</span>
						</a>
					</li>
					<li className='py-6 px-15'>
						<a href='#specs'>
							<span className='underline-on-hover text-uppercase text-center fw-light fs-m5'>
								TECH SPECS
							</span>
						</a>
					</li>
					<li className='py-6 px-15'>
						<a href='/pages/support/index.html' target='_blank'>
							<span className='underline-on-hover text-uppercase text-center fw-light fs-m5'>
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

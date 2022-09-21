import Link from 'next/link'
import React from 'react'

function ProductCategoryBox() {
	return (
		<div className='catalog-navbar bg-dark'>
			<nav className=''>
				<ul className='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li className='me-md-auto'>
						<span>65U8G</span>
					</li>
					<li>
						<Link href='#overview'>
							<a>
								<span className='underline-on-hover'> Overview</span>
							</a>
						</Link>
					</li>
					<li>
						<a href='#features-video'>
							<span className='underline-on-hover'> Features</span>
						</a>
					</li>
					<li>
						<a href='#specs'>
							<span className='underline-on-hover'> Specifications</span>
						</a>
					</li>
					<li>
						<a href='/src/pages/support/index.html' target='_blank'>
							<span className='underline-on-hover'> Support</span>
						</a>
					</li>
					<li>
						<button className='btn-primary' onclick='toggleWhereToBuyDrawer()'>
							Where To Buy
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default ProductCategoryBox

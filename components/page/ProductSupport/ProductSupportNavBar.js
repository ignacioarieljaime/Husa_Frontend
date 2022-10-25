import Link from 'next/link'
import React from 'react'

function ProductSupportNavBar({ pim, data }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='catalog-navbar bg-black py-3'>
			<nav className='container'>
				<ul className='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li className='me-md-auto'>
						<span className='text-secondary'>{pim?.model}</span>
					</li>
					{structure?.tags?.value.map((item, index) => (
						<li>
							<Link href={item?.target?.value}>
								<a>
									<span className='underline-on-hover'>
										{item?.title?.value}
									</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default ProductSupportNavBar

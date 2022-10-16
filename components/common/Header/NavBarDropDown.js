import Link from 'next/link'
import React from 'react'

function NavBarDropDown({ data }) {
	return (
		<li className='nav-item dropdown-list-toggle me-4 me-xl-6'>
			<Link href={data.url}>
				<a className='nav-link'>
					<span className='underline-on-hover'>{data.name}</span>
				</a>
			</Link>
			<div className='nav-dropdown-list'>
				<div className='container-fluid'>
					<div className='row align-items-center'>
						<div className='col-5'>
							<h3>{data.name}</h3>
							<div className='row'>
								{data.columns.map((columns, index) => (
									<div className='col-6'>
										{/* <h4>
											<a href='#'>
												<span className='underline-on-hover'>TELEVISIONS</span>
											</a>
										</h4> */}
										<ul>
											{columns.map((colum, index) => (
												<li key={`colum-${index}`}>
													<Link href={colum.url}>
														<a>
															<span className='underline-on-hover'>
																{colum.name}
															</span>
														</a>
													</Link>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
						{data.products.length !== 0 && (
							<div className='col-7'>
								<div className='row'>
									{data.products.map((product, index) => (
										<Link href={product.url}>
											<a className={`col-${12 / data.products.length }`}>
												<img
													src={product.image}
													width='100%'
													alt='featured image'
												/>
											</a>
										</Link>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</li>
	)
}

export default NavBarDropDown

import Link from 'next/link'
import React from 'react'
import CustomImage from '../CustomImage'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
function NavBarDropDown({ data }) {
	return (
		<li className='nav-item dropdown-list-toggle me-4 me-xl-6'>
			{!data.url || data.url === '' ? (
				<a style={{ cursor: 'default' }} className='nav-link'>
					<span className='underline-on-hover'>{data.name}</span>
				</a>
			) : (
				<Link
					target={data?.target ? data?.target : '_self'}
					href={data.url ? data.url : ''}>
					<a className='nav-link'>
						<span className='underline-on-hover'>{data.name}</span>
						{data?.target === '_blank' && (
							<img style={{ marginLeft: '10px' }} src={OpenPageOnNewTab.src} />
						)}
					</a>
				</Link>
			)}

			{data.columns.length !== 0 && (
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
														<Link
															target={colum?.target ? colum?.target : '_self'}
															href={colum.url ? colum.url : ''}>
															<a>
																<span className='underline-on-hover'>
																	{colum.name}
																</span>
																{colum?.target === '_blank' && (
																	<img
																		style={{ marginLeft: '10px' }}
																		src={OpenPageOnNewTab.src}
																	/>
																)}
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
									<div className='row align-items-stretch '>
										{data.products.map((product, index) => (
											<Link
												target={product?.target ? product?.target : '_self'}
												href={product.url ? product.url : ''}>
												<a className={`col-${12 / data.products.length}`}>
													<CustomImage
														src={product.image}
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
			)}
		</li>
	)
}

export default NavBarDropDown

import Link from 'next/link'
import React, { useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function NavBarDropDownSublist({ data }) {
	const [show, setShow] = useState(-1)
	return (
		<>
			<div className='col-6'>
				<ul>
					{data.childs.map((child, index) => (
						<li onMouseEnter={() => setShow(index)} key={`colum-${index}`}>
							<Link
								target={child.header?.target ? child.header?.target : '_self'}
								href={child.header.value ? child.header.value : ''}>
								<a
									target={
										child.header?.target ? child.header?.target : '_self'
									}>
									<span className='underline-on-hover'>
										{child.header.title}
									</span>
									{child.header?.target === '_blank' && (
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
			{data.childs.length > 0 && (
				<div className='col-6' style={{ transform: 'translateY(-73px)' }}>
					{data.childs.map((col, index) => {
						if (
							show === index &&
							col.childs.some(item => item.value.length && item.title.length)
						)
							return (
								<>
									<h3>{col.header.title}</h3>
									<ul>
										{col.childs.map((child, index) => (
											<li key={`colum-${index}`}>
												<Link
													target={
														child.header?.target
															? child.header?.target
															: '_self'
													}
													href={child.header.value ? child.header.value : ''}>
													<a
														target={
															child.header?.target
																? child.header?.target
																: '_self'
														}>
														<span className='underline-on-hover'>
															{child.header.title}
														</span>
														{child.header?.target === '_blank' && (
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
								</>
							)
					})}
				</div>
			)}
		</>
	)
}

export default NavBarDropDownSublist

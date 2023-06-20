import Link from 'next/link'
import React, { useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function NavBarDropDownSublist({ data }) {
	// const [show, setShow] = useState(-1)
	return (
		<>
			<div className='col-12'>
				<ul>
					{data.childs.map((child, index) => (
						<li
						// onMouseEnter={() => setShow(index)} key={`colum-${index}`}
						>
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
							{child.childs.length > 0 && (
								<ul className='header_dropdown_sublist sublist'>
									{child.childs.map((item, _index) => (
										<li key={`colum-${_index}`} className='py-0 item'>
											<Link
												target={item?.target ? item?.target : '_self'}
												href={item.url ? item.url : ''}>
												<a target={item?.target ? item?.target : '_self'}>
													<span className='underline-on-hover'>
														{item.name}
													</span>
													{item?.target === '_blank' && (
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
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default NavBarDropDownSublist

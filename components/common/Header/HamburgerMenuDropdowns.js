import React, { useState } from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const HamburgerMenuDropdowns = ({ columns, asideHandler }) => {
	const [show, setShow] = useState(false)
	const [showSub, setShowSub] = useState(-1)

	return (
		<li className='nav-item dropdown'>
			{columns.childs.length === 0 ? (
				<Link
					target={columns.header?.target ? columns.header?.target : '_self'}
					href={columns.header.value ? columns.header.value : ''}>
					<a
						target={columns.header?.target ? columns.header?.target : '_self'}
						className='nav-link dropdown-toggle lh-base p-1 px-3 m-2 underline-on-hover'>
						{columns.header.title}
						{columns.header?.target === '_blank' && (
							<img style={{ marginLeft: '10px' }} src={OpenPageOnNewTab.src} />
						)}
					</a>
					{/* <FontAwesomeIcon icon={faChevronDown} /> */}
				</Link>
			) : (
				<button
					className='nav-link dropdown-toggle lh-base p-1 px-3 m-2'
					role='button'
					onClick={() => setShow(show => !show)}>
					<span className='underline-on-hover'>{columns.header.title}</span>
					{/* <FontAwesomeIcon icon={faChevronDown} /> */}
				</button>
			)}

			{columns.childs.length !== 0 && (
				<div
					className={`dropdown-menu py-1 ps-6 pe-4 ${
						show ? 'd-block' : 'd-none'
					}`}
					aria-labelledby='tv-audio-dropdown'>
					{columns.childs.map((colum, index) => {
						if (Array.isArray(colum))
							return (
								<>
									{colum.map((item, _index) => (
										<Link
											key={_index}
											href={item.header.value ? item.header.value : ''}>
											<a
												target={
													item.header?.target ? item.header?.target : '_self'
												}
												onClick={() => asideHandler(false)}
												className='dropdown-item'>
												<span className='underline-on-hover'>
													{item.header.title}
												</span>
												{/* <FontAwesomeIcon icon={faChevronLeft} size='sm' /> */}
												{item.header?.target === '_blank' && (
													<img
														style={{ marginLeft: '10px' }}
														src={OpenPageOnNewTab.src}
													/>
												)}
											</a>
										</Link>
									))}
								</>
							)
						else
							return (
								<React.Fragment key={index}>
									<Link href={colum.header.value ? colum.header.value : ''}>
										<a
											target={
												colum.header?.target ? colum.header?.target : '_self'
											}
											onClick={() => {
												if (colum.childs.length > 0) setShowSub(index)
												else asideHandler(false)
											}}
											className={`dropdown-item ${
												showSub === index ? 'hover' : ''
											}`}>
											<span className='underline-on-hover'>
												{colum.header.title}
											</span>
											{/* <FontAwesomeIcon icon={faChevronLeft} size='sm' /> */}
											{colum.header?.target === '_blank' && (
												<img
													style={{ marginLeft: '10px' }}
													src={OpenPageOnNewTab.src}
												/>
											)}
										</a>
									</Link>
									{showSub === index && colum.childs.length > 0 && (
										<ul className='header_dropdown_sublist sublist hamburger'>
											{colum.childs.map(col => (
												<li className='item ps-4'>
													<Link href={col.url ? col.url : ''}>
														<a
															target={col?.target ? col?.target : '_self'}
															onClick={() => asideHandler(false)}
															className='dropdown-item'>
															<span className='underline-on-hover'>
																{col.name}
															</span>
															{/* <FontAwesomeIcon icon={faChevronLeft} size='sm' /> */}
															{col?.target === '_blank' && (
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
								</React.Fragment>
							)
					})}
				</div>
			)}
		</li>
	)
}

export default HamburgerMenuDropdowns

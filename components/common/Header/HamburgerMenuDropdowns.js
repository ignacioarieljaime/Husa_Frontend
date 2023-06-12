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
					className={`dropdown-menu ps-6 pe-4 ${show ? 'd-block' : 'd-none'}`}
					aria-labelledby='tv-audio-dropdown'>
					{columns.childs.map((colum, index) => {
						if (Array.isArray(colum))
							return (
								<>
									{colum.map(item => (
										<Link href={item.header.value ? item.header.value : ''}>
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
								<>
									<Link href={colum.header.value ? colum.header.value : ''}>
										<a
											target={
												colum.header?.target ? colum.header?.target : '_self'
											}
											onMouseEnter={() => setShowSub(index)}
											onClick={() => asideHandler(false)}
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
									{showSub === index && (
										<div style={{ transform: 'translateX(24px)' }}>
											{colum.childs.map(col => (
												<Link href={col.header.value ? col.header.value : ''}>
													<a
														target={
															col.header?.target ? col.header?.target : '_self'
														}
														onClick={() => asideHandler(false)}
														className='dropdown-item'>
														<span className='underline-on-hover'>
															{col.header.title}
														</span>
														{/* <FontAwesomeIcon icon={faChevronLeft} size='sm' /> */}
														{col.header?.target === '_blank' && (
															<img
																style={{ marginLeft: '10px' }}
																src={OpenPageOnNewTab.src}
															/>
														)}
													</a>
												</Link>
											))}
										</div>
									)}
								</>
							)
					})}
				</div>
			)}
		</li>
	)
}

export default HamburgerMenuDropdowns

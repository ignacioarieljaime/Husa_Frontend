import React, { useState } from 'react'
import Link from 'next/link'

const HamburgerMenuDropdowns = ({ columns }) => {
	const [show, setShow] = useState(false)

	return (
		<li className='nav-item dropdown'>
			<Link href={columns.url ? columns.url : ''}>
				<button
					className='nav-link dropdown-toggle lh-base p-1 px-3 m-2'
					role='button'
					onClick={() => setShow(show => !show)}>
					<span className='underline-on-hover'>{columns.name}</span>
					{/* <FontAwesomeIcon icon={faChevronDown} /> */}
				</button>
			</Link>
			<div
				className={`dropdown-menu ps-6 pe-4 ${show ? 'd-block' : 'd-none'}`}
				aria-labelledby='tv-audio-dropdown'>
				{columns.columns.map(colum => (
					<>
						{colum.map(item => (
							<Link href={item.url ? item.url : ''}>
								<a className='dropdown-item'>
									<span className='underline-on-hover'>{item.name}</span>
									{/* <FontAwesomeIcon icon={faChevronLeft} size='sm' /> */}
								</a>
							</Link>
						))}
					</>
				))}
			</div>
		</li>
	)
}

export default HamburgerMenuDropdowns

import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function HamburgerMenu({ data: { widgets }, asideMenu }) {
	let menus = [...widgets.centerOption, ...widgets.rightOption]
	return (
		<nav
			className={`navbar navbar-expand-xxxl navbar-bg side-nav fixed-top ${
				!asideMenu && 'hidden'
			}`}>
			<ul className='navbar-nav d-flex d-lg-none'>
				{menus.map((columns, index) => (
					<li key={`hamburger-menu-${index}`} className='nav-item dropdown'>
						<Link href={columns.url ? columns.url : ''}>
							<a
								className='nav-link dropdown-toggle p-3 m-2'
								id='tv-audio-dropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								<span>{columns.name}</span>
								{/* <FontAwesomeIcon icon={faChevronDown} /> */}
							</a>
						</Link>
						<div
							className='dropdown-menu ps-6 pe-4'
							aria-labelledby='tv-audio-dropdown'>
							{columns.columns.map(colum => (
								<>
									{colum.map(item => (
										<Link href={item.url ? item.url : ''}>
											<a className='dropdown-item'>
												<span>{item.name}</span>
												{/* <FontAwesomeIcon icon={faChevronLeft} size='sm' /> */}
											</a>
										</Link>
									))}
								</>
							))}
						</div>
					</li>
				))}
			</ul>
			<ul
				style={{ paddingRight: '30%' }}
				className='navbar-nav col-lg-6 offset-lg-6 position-relative my-lg-auto'>
				{widgets.hamburger.map((menu, index) => (
					<li key={`menu-${index}`} className='nav-item my-1'>
						<Link href={menu.url ? menu.url : ''}>
							<a className='nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3'>
								<span className='underline-on-hover'>{menu.name}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default HamburgerMenu

import Link from 'next/link'
import React from 'react'
import HamburgerMenuDropdowns from './HamburgerMenuDropdowns'

import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function HamburgerMenu({ data: { widgets }, asideMenu, asideHandler }) {
	let menus = [...widgets.center.childs, ...widgets.right.childs]
	return (
		<nav
			className={`navbar navbar-expand-xxxl navbar-bg side-nav fixed-top ${
				!asideMenu && 'hidden'
			}`}>
			<ul className='navbar-nav d-flex d-lg-none'>
				{menus.map((columns, index) => (
					<HamburgerMenuDropdowns
						key={`hamburger-menu-${index}`}
						columns={columns}
						asideHandler={asideHandler}
					/>
				))}
			</ul>
			<ul
				style={{ paddingRight: '30%' }}
				className='navbar-nav col-lg-6 offset-lg-6 position-relative my-lg-auto mb-20 mb-md-0'>
				{widgets.hamburger.map((menu, index) => (
					<li key={`menu-${index}`} className='nav-item my-md-1'>
						<Link
							target={menu?.target ? menu?.target : '_self'}
							href={menu.url ? menu.url : ''}>
							<a
								target={menu?.target ? menu?.target : '_self'}
								onClick={() => asideHandler(false)}
								className='nav-link mx-md-2 my-md-1  fw-bolder-700'>
								<span className='underline-on-hover'>{menu.name}</span>
								{menu?.target === '_blank' && (
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
		</nav>
	)
}

export default HamburgerMenu

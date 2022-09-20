import React from 'react'

function HamburgerMenu({ asideMenu }) {
	return (
		<nav
			className={`navbar navbar-expand-xxxl navbar-bg side-nav fixed-top ${
				!asideMenu && 'hidden'
			}`}>
			<ul className='navbar-nav d-flex d-lg-none'>
				<li className='nav-item dropdown'>
					<a
						className='nav-link dropdown-toggle p-3 m-2'
						href='#'
						id='tv-audio-dropdown'
						role='button'
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'>
						<span>TV + AUDIO</span>
						<i className='fa-solid fa-chevron-down'></i>
					</a>
					<div
						className='dropdown-menu ps-6 pe-4'
						aria-labelledby='tv-audio-dropdown'>
						<span className='dropdown-item'>LEARN MORE</span>
						<a className='dropdown-item' href='#'>
							<span>LASER TV</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>4K ULED</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>4K UHD</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a
							className='dropdown-item'
							href='/src/pages/tv-and-audio/tv/smart-tv-platforms/index.html'>
							<span>SMART TV PLATFORMS</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a
							className='dropdown-item'
							href='/src/pages/tv-and-audio/tv/all-tvs/index.html'>
							<span>ALL TVs</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<span className='dropdown-item'>SHOP TVs</span>
						<a
							className='dropdown-item'
							href='/src/pages/tv-and-audio/tv/all-tvs/index.html'>
							<span>ALL TVs</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
					</div>
				</li>
				<li className='nav-item dropdown'>
					<a
						className='nav-link dropdown-toggle p-3 m-2'
						href='#'
						id='home-appliances-dropdown'
						role='button'
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'>
						<span>HOME APPLIANCES</span>
						<i className='fa-solid fa-chevron-down'></i>
					</a>
					<div
						className='dropdown-menu ps-6 pe-4'
						aria-labelledby='tv-audio-dropdown'>
						<span className='dropdown-item'>SHOP REFRIGERATORS</span>
						<a className='dropdown-item' href='#'>
							<span>FULL SIZE</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>COMPACT</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>FREEZERS</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>ALL BEVERAGE + WINE COOLERS</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>ALL REFRIGERATORS</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
					</div>
				</li>
				<li className='nav-item dropdown'>
					<a
						className='nav-link dropdown-toggle p-3 m-2'
						href='#'
						id='air-products-dropdown'
						role='button'
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'>
						<span>AIR PRODUCTS</span>
						<i className='fa-solid fa-chevron-down'></i>
					</a>
					<div
						className='dropdown-menu ps-6 pe-4'
						aria-labelledby='tv-audio-dropdown'>
						<span className='dropdown-item'>LEARN MORE </span>
						<a className='dropdown-item' href='#'>
							<span>AIR PRODUCTS</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<span className='dropdown-item'>SHOP AIR PRODUCTS</span>
						<a className='dropdown-item' href='#'>
							<span>AIR PURIFIER</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>DEHUMIDIFIERS</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>PORTABLE AIR CONDITIONER</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>WINDOW AC</span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
						<a className='dropdown-item' href='#'>
							<span>ALL AIR PRODUCTS </span>
							<i className='fa-solid fa-sm fa-chevron-left'></i>
						</a>
					</div>
				</li>
			</ul>
			<ul
				style={{ paddingRight: '30%' }}
				className='navbar-nav col-lg-6 offset-lg-6 position-relative my-lg-auto'>
				<li className='nav-item my-1'>
					<a
						className='nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3'
						href='/src/pages/company/index.html'>
						<span className='underline-on-hover'>COMPANY</span>
					</a>
				</li>
				<li className='nav-item my-1'>
					<a
						className='nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3'
						href='/src/pages/commercial/index.html'>
						<span className='underline-on-hover'>COMMERCIAL</span>
					</a>
				</li>
				<li className='nav-item my-1'>
					<a
						className='nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3'
						href='/src/pages/support/index.html'>
						<span className='underline-on-hover'>SUPPORT</span>
					</a>
				</li>
				<li className='nav-item my-1'>
					<a
						className='nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3'
						href='/src/pages/support/register/index.html'>
						<span className='underline-on-hover'>REGISTER</span>
					</a>
				</li>
				<li className='nav-item my-1'>
					<a
						className='nav-link mx-2 my-1 my-lg-5 fw-bolder-700 p-3'
						href='/src/pages/contact/index.html'>
						<span className='underline-on-hover'>CONTACT</span>
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default HamburgerMenu

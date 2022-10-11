import React, { useEffect, useState } from 'react'

// component
import HamburgerMenu from './HamburgerMenu'

// image
import ImageOne from 'public/assets/images/dropdown-tv-audio-1.png'
import ImageTwo from 'public/assets/images/dropdown-tv-audio-2.png'
import ImageThree from 'public/assets/images/dropdown-home-appliance-1.png'
import ImageFour from 'public/assets/images/dropdown-home-appliance-2.png'
import ImageFive from 'public/assets/images/dropdown-air-products-1.png'
import ImageSix from 'public/assets/images/dropdown-air-products-2.png'
import ImageSeven from 'public/assets/images/dropdown-air-products-3.png'

// icon
import HamburgerMenuIcon from 'components/icons/HamburgerMenuIcon'
import Logo from 'components/icons/Logo'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import SubMenuHeader from './SubMenuHeader'

function Header({ themeCondition = false, isBlog = false }) {
	const [asideMenu, setAsideMenu] = useState(false)
	const [topNavCondition, setTopNavCondition] = useState(false)
	const [searchInputCondition, setSearchInputCondition] = useState(false)

	useEffect(() => {
		if (!searchInputCondition) {
			setTimeout(() => {
				setTopNavCondition(true)
			}, 800)
		} else {
			setTopNavCondition(false)
		}
	}, [searchInputCondition])

	return (
		<header>
			<nav
				style={{ transitionDelay: '2s' }}
				className={`navbar navbar-expand justify-content-center  ${
					themeCondition ? 'theme-light' : ' theme-light'
				} top-nav py-4 px-sm-4 fixed-top flex-wrap ${
					!topNavCondition && 'search-mode'
				} ${asideMenu || searchInputCondition ? 'hidden' : ''}`}>
				<div className='container-fluid'>
					<div className='row justify-content-between align-items-center w-100 m-auto'>
						<a
							href='/pages/landing/index.html'
							className='navbar-brand m-0 col-xl-4 text-start'>
							<Logo />
						</a>
						<h1>Hisense</h1>
						<ul className='navbar-nav col-xl-4 d-none d-lg-flex justify-content-center p-0'>
							<li className='nav-item dropdown-list-toggle me-4 me-xl-6'>
								<a className='nav-link' href='#'>
									<span className='underline-on-hover'>TV + AUDIO</span>
								</a>
								<div className='nav-dropdown-list'>
									<div className='container-fluid'>
										<div className='row align-items-center'>
											<div className='col-5'>
												<h3>TV + AUDIO</h3>
												<div className='row'>
													<div className='col-6'>
														<h4>
															<a href='#'>
																<span className='underline-on-hover'>
																	TELEVISIONS
																</span>
															</a>
														</h4>
														<ul>
															<li>
																<a href='#'>
																	<span className='underline-on-hover'>
																		LASER TV
																	</span>
																</a>
															</li>
															<li>
																<a href='#'>
																	<span className='underline-on-hover'>
																		4K ULED
																	</span>
																</a>
															</li>
															<li>
																<a href='#'>
																	<span className='underline-on-hover'>
																		4K UHD
																	</span>
																</a>
															</li>
															<li>
																<a href='/pages/tv-and-audio/tv/smart-tv-platforms/index.html'>
																	<span className='underline-on-hover'>
																		SMART TV PLATFORMS
																	</span>
																</a>
															</li>
															<li>
																<a href='/pages/tv-and-audio/tv/all-tvs/index.html'>
																	<span className='underline-on-hover fw-bolder-700'>
																		ALL TVs
																	</span>
																</a>
															</li>
														</ul>
													</div>
													<div className='col-6'>
														<h4>
															<a href='#'>
																<span className='underline-on-hover'>
																	HOME AUDIO
																</span>
															</a>
														</h4>
														<ul>
															<li>
																<a href='#'>
																	<span className='underline-on-hover'>
																		2.0 CH SOUNDBARS
																	</span>
																</a>
															</li>
															<li>
																<a href='#'>
																	<span className='underline-on-hover'>
																		2.1 CH SOUNDBARS
																	</span>
																</a>
															</li>
															<li>
																<a href='#'>
																	<span className='underline-on-hover'>
																		3.1 CH SOUNDBARS
																	</span>
																</a>
															</li>
															<li>
																<a href='#'>
																	<span className='underline-on-hover fw-bolder-700'>
																		ALL HOME AUDIO
																	</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className='col-7'>
												<div className='row'>
													<a href='#' className='col-6'>
														<img
															src={ImageOne.src}
															width='100%'
															alt='featured image'
														/>
													</a>
													<a href='#' className='col-6'>
														<img
															src={ImageTwo.src}
															width='100%'
															alt='featured image'
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className='nav-item dropdown-list-toggle mx-4 mx-xl-6'>
								<a className='nav-link' href='#'>
									<span className='underline-on-hover'>HOME APPLIANCES</span>
								</a>
								<div className='nav-dropdown-list'>
									<div className='container-fluid'>
										<div className='row align-items-center'>
											<div className='col-5 mb-8'>
												<h3>HOME APPLIANCES</h3>
												<div>
													<h4>
														<a href='#'>
															<span className='underline-on-hover'>
																EXPLORE HOME APPLIANCES
															</span>
														</a>
													</h4>
													<ul>
														<li>
															<a href='#'>
																<span className='underline-on-hover'>
																	DISHWASHERS
																</span>
															</a>
														</li>
														<li>
															<a href='#'>
																<span className='underline-on-hover'>
																	BEVERAGE + WINE COOLERS
																</span>
															</a>
														</li>
														<li>
															<a href='#'>
																<span className='underline-on-hover'>
																	REFRIGERATORS
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className='col-7'>
												<div className='row'>
													<a href='#' className='col-6'>
														<img
															src={ImageThree.src}
															width='100%'
															alt='featured image'
														/>
													</a>
													<a href='#' className='col-6'>
														<img
															src={ImageFour.src}
															width='100%'
															alt='featured image'
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className='nav-item dropdown-list-toggle mx-4 mx-xl-6'>
								<a className='nav-link' href='#'>
									<span className='underline-on-hover'>AIR PRODUCTS</span>
								</a>
								<div className='nav-dropdown-list'>
									<div className='container-fluid'>
										<div className='row align-items-center'>
											<div className='col-5'>
												<h3>AIR PRODUCTS</h3>
												<div>
													<h4>
														<a href='#'>
															<span className='underline-on-hover'>
																EXPLORE AIR PRODUCTS
															</span>
														</a>
													</h4>
													<ul>
														<li>
															<a href='#'>
																<span className='underline-on-hover'>
																	WINDOW AC
																</span>
															</a>
														</li>
														<li>
															<a href='#'>
																<span className='underline-on-hover'>
																	PORTABLE AC
																</span>
															</a>
														</li>
														<li>
															<a href='#'>
																<span className='underline-on-hover'>
																	DEHUMIDIFIERS
																</span>
															</a>
														</li>
														<li>
															<a href='#'>
																<span className='underline-on-hover'>
																	AIR PURIFIER
																</span>
															</a>
														</li>
														<li>
															<a href='#'>
																<span className='underline-on-hover fw-bolder-700'>
																	ALL AIR PRODUCTS
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className='col-7'>
												<div className='row'>
													<a href='#' className='col-4'>
														<img
															src={ImageFive.src}
															width='100%'
															alt='featured image'
														/>
													</a>
													<a href='#' className='col-4'>
														<img
															src={ImageSix.src}
															width='100%'
															alt='featured image'
														/>
													</a>
													<a href='#' className='col-4'>
														<img
															src={ImageSeven.src}
															width='100%'
															alt='featured image'
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
						<ul className='navbar-nav align-items-center justify-content-end p-0 col-4'>
							<li className='nav-item dropdown-list-toggle me-4 me-xl-6'>
								<a className='nav-link' href='/pages/commercial/index.html'>
									<span className='underline-on-hover'>COMMERCIAL</span>
								</a>
								<div className='nav-dropdown-list'>
									<div className='container-fluid'>
										<div className='row align-items-center'>
											<div className='col-5'>
												<h3>COMMERCIAL</h3>
												<div className='row'>
													<div className='col-6'>
														<ul>
															<li>
																<a href='https://www.hisense-b2b.com'>
																	<span className='underline-on-hover'>
																		Commercial Displays
																	</span>
																</a>
															</li>
															<li>
																<a href='/pages/commercial/index.html'>
																	<span className='underline-on-hover'>
																		Commercial Refrigerators
																	</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className='nav-item dropdown-list-toggle me-4 me-xl-6'>
								<a className='nav-link' href='/pages/support/index.html'>
									<span className='underline-on-hover'>SUPPORT</span>
								</a>
								<div className='nav-dropdown-list'>
									<div className='container-fluid'>
										<div className='row align-items-center'>
											<div className='col-5'>
												<h3>SUPPORT</h3>
												<div className='row'>
													<div className='col-6'>
														<ul>
															<li>
																<a href='/pages/support/register/index.html'>
																	<span className='underline-on-hover'>
																		Register
																	</span>
																</a>
															</li>
															<li>
																<a href='/pages/support/video-tutorials/index.html'>
																	<span className='underline-on-hover'>
																		Video Tutorials
																	</span>
																</a>
															</li>
														</ul>
													</div>
													<div className='col-6'>
														<h4>
															<a href='/pages/support/faq/index.html'>
																<span className='underline-on-hover'>FAQ</span>
															</a>
														</h4>
														<ul>
															<li>
																<a href='#'>
																	<span className='underline-on-hover'>
																		TV Products
																	</span>
																</a>
															</li>
															<li>
																<a href='#'>
																	<span className='underline-on-hover'>
																		Air Conditioners
																	</span>
																</a>
															</li>
															<li>
																<a href='#'>
																	<span className='underline-on-hover'>
																		Dehumidifiers
																	</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className='nav-item-button' data-button='search'>
								<button
									className={`btn search-icon p-2  ${
										searchInputCondition && 'open'
									}`}
									onClick={() => setSearchInputCondition(!searchInputCondition)}
									aria-label='search'>
									<MagnifierIcon />
								</button>
							</li>
							<li className='nav-item-button' data-button='menu'>
								<button
									className={`btn hamburger-icon p-2 ${
										asideMenu || searchInputCondition ? 'close' : ''
									}`}
									onClick={() =>
										searchInputCondition
											? setSearchInputCondition(false)
											: setAsideMenu(!asideMenu)
									}
									aria-label='hamburger menu toggler'>
									<HamburgerMenuIcon />
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div className='container-fluid'>
					<form
						className={`search-form col-12 col-sm-7 ${
							searchInputCondition && 'visible'
						}`}>
						<button className='btn py-0' type='button' aria-label='search item'>
							<MagnifierIcon />
						</button>
						<input placeholder='SEARCH' className='search-box' type='text' />
					</form>
				</div>
				{/* <SubMenuHeader /> */}
			</nav>

			{/* <div className='container-fluid home-top-advertisement'>
				<a href='https://www.hisense-usa.com/product-safety-recall'>
					Recall Information: French Door Refrigerator
				</a>
			</div> */}
			<HamburgerMenu asideMenu={asideMenu} />
		</header>
	)
}

export default Header

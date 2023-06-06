import React from "react";

const PlaceholderHeader = () => {
	return (
		<header>
			<nav
				className="navbar navbar-expand justify-content-center
					theme-dark
				 top-nav py-3 px-sm-4 fixed-top flex-wrap false ">
				<div className="container-fluid">
					<div className="row justify-content-between align-items-center w-100 m-auto">
						<div className="m-0 col-xl-4 py-1">
							<a className="navbar-brand m-0 text-start" href="/">
								<svg
									width="135"
									height="21"
									viewBox="0 0 135 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_2_10)">
										<path
											d="M47.4331 11.7297C50.3796 13.0351 53.4224 14.2838 52.9602 17.1216C52.4595 20.2054 47.8567 20.7919 44.0821 20.7919H43.177C37.9965 20.6595 35.3967 20.2432 35.3967 20.2432L35.6085 16.8946C35.6085 16.8946 39.1906 17.5378 42.58 17.6514C44.5058 17.7081 45.9117 17.6135 45.9502 16.9514C45.9887 16.3649 45.0258 16.0622 42.9844 15.2676L41.1934 14.5676C39.0365 13.6973 35.5122 12.4297 35.6856 9.51622C35.8589 6.67838 39.3446 5.78919 41.4245 5.50541C42.6378 5.33514 43.9088 5.27838 45.6806 5.2973C49.5707 5.33514 52.8446 6.03514 52.8446 6.03514L52.5365 9.15676C52.5365 9.15676 49.07 8.41892 45.5843 8.41892C43.3696 8.41892 42.6185 8.66486 42.503 9.04324C42.2911 9.70541 43.5236 10.1784 45.1413 10.8027L47.4331 11.7297ZM60.6634 14.3595V14.4162C60.6634 15.4378 61.5878 17.6324 66.1713 17.8027H66.4794C69.7726 17.8027 72.7961 17.1595 73.2968 17.0649C73.1235 18.1243 72.9117 19.5054 72.7961 20.1676C71.7754 20.4514 69.4067 21 65.6898 21C55.5985 21 54.366 16.2703 54.6356 13.073C54.9245 9.55405 58.3717 5.2973 65.2469 5.35405C65.9017 5.35405 66.5179 5.41081 67.0764 5.48649C68.6171 5.71351 75.1649 7.13243 73.8553 14.3784L60.6634 14.3595ZM68.6941 11.5027C68.6941 11.5027 68.9445 8.32432 65.0928 8.28649C62.4545 8.30541 61.2027 9.91351 60.9138 11.5027H68.6941ZM121.654 14.3595V14.4162C121.654 15.4378 122.579 17.6324 127.162 17.8027H127.47C130.763 17.8027 133.787 17.1595 134.288 17.0649C134.114 18.1243 133.902 19.5054 133.787 20.1676C132.766 20.4514 130.378 21 126.681 21C116.589 21 115.357 16.2703 115.626 13.073C115.915 9.55405 119.343 5.2973 126.218 5.35405C126.873 5.35405 127.489 5.41081 128.048 5.48649C129.589 5.71351 136.117 7.13243 134.827 14.3784L121.654 14.3595ZM129.685 11.5027C129.685 11.5027 129.935 8.32432 126.084 8.28649C123.445 8.30541 122.193 9.91351 121.905 11.5027H129.685ZM88.5493 10.7838C88.376 13.4514 87.9138 20.6595 87.9138 20.6595H93.9609L94.6156 10.6324C94.9045 6.07297 91.6306 5.73243 89.4545 5.52432C89.3004 5.50541 88.1642 5.41081 86.585 5.41081C86.1806 5.41081 85.7376 5.41081 85.2947 5.42973C81.5393 5.56216 76.7633 6.11081 76.7633 6.11081L75.8196 20.6405H81.8475L82.5793 8.85405C82.5793 8.85405 84.7362 8.55135 86.4309 8.62703C87.0087 8.64595 88.6841 8.62703 88.5493 10.7838ZM32.5272 0H27.5008L27.1927 3.95405H33.6635C33.6635 3.95405 33.8368 1.7027 33.856 1.32432C33.9331 0.435135 33.5672 0 32.5272 0V0ZM108.501 11.7297L106.19 10.7838C104.572 10.1405 103.34 9.66757 103.551 9.00541C103.667 8.64595 104.418 8.4 106.633 8.38108C110.118 8.38108 113.585 9.11892 113.585 9.11892L113.893 5.9973C113.893 5.9973 110.619 5.31622 106.729 5.25946C104.957 5.24054 103.686 5.2973 102.473 5.46757C100.412 5.75135 96.9074 6.64054 96.7341 9.47838C96.5607 12.373 100.085 13.6405 102.242 14.5297L104.033 15.2297C106.074 16.0243 107.037 16.327 106.999 16.9135C106.96 17.5568 105.554 17.6703 103.628 17.6135C100.239 17.5 96.657 16.8568 96.657 16.8568L96.4452 20.2054C96.4452 20.2054 99.045 20.6027 104.225 20.7541C104.534 20.7541 104.842 20.773 105.131 20.773C108.905 20.773 113.508 20.1865 114.009 17.1027C114.452 14.2838 111.447 13.0351 108.501 11.7297ZM17.7947 0L17.2169 7.22703H7.74191L8.22337 1.32432C8.24263 0.0567568 7.14491 0 6.60568 0H1.7141L0.0771484 20.6784H6.70197L7.43378 11.5216H16.9088L16.177 20.6784H22.7826L24.4003 0H17.7947ZM27.0579 5.63784L25.8831 20.6784H32.3539L33.5479 5.63784H27.0579Z"
											fill="#fff"></path>
									</g>
									<defs>
										<clipPath id="clip0_2_10">
											<rect width="135" height="21" fill="#fff"></rect>
										</clipPath>
									</defs>
								</svg>
							</a>
						</div>
						<ul className="navbar-nav col-xl-4 d-none d-lg-flex justify-content-center p-0">
							<li className="nav-item dropdown-list-toggle ps-4 ps-xl-6">
								<a target="_self" className="nav-link" href="/televisions">
									<span className="underline-on-hover">TELEVISIONS</span>
								</a>
							</li>
							<li className="nav-item dropdown-list-toggle ps-4 ps-xl-6">
								<a target="_self" className="nav-link" href="/audio">
									<span className="underline-on-hover">AUDIO</span>
								</a>
							</li>
							<li className="nav-item dropdown-list-toggle ps-4 ps-xl-6">
								<a target="_self" className="nav-link" href="/home-appliance">
									<span className="underline-on-hover">APPLIANCES</span>
								</a>
							</li>
							<li className="nav-item dropdown-list-toggle ps-4 ps-xl-6">
								<a target="_self" className="nav-link" href="/air-products">
									<span className="underline-on-hover">AIR PRODUCTS</span>
								</a>
							</li>
						</ul>
						<ul className="navbar-nav align-items-center justify-content-end p-0 col-4">
							<li className="nav-item dropdown-list-toggle ps-4 ps-xl-6">
								<a target="_self" className="nav-link" href="/commercial-air">
									<span className="underline-on-hover">Commercial</span>
								</a>
							</li>
							<li className="nav-item dropdown-list-toggle ps-4 ps-xl-6">
								<a target="_self" className="nav-link" href="/support">
									<span className="underline-on-hover">Support</span>
								</a>
							</li>
							<li className="nav-item dropdown-list-toggle ps-4 ps-xl-6">
								<a target="_self" className="nav-link" href="/company">
									<span className="underline-on-hover">Company</span>
								</a>
							</li>
							<li className="nav-item-button" data-button="search">
								<button
									className="btn search-icon p-2  false"
									aria-label="search">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
											stroke="#000"
											strokeWidth="2"
											strokeLinecap="round"></path>
									</svg>
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div className="container-fluid header_search_box">
					<form className="search-form col-12 col-sm-9 false">
						<button
							className="btn py-0 search_button"
							type="button"
							aria-label="search item">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
									strokeWidth="2"
									strokeLinecap="round"></path>
							</svg>
						</button>
						<div className="search-box">
							<input
								placeholder="SEARCH"
								className="search_field"
								type="text"
							/>
							<button
								className="search_close py-0 "
								type="button"
								aria-label="search item">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="xmark"
									className="svg-inline--fa fa-xmark fa-lg text-white"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 320 512">
									<path
										fill="currentColor"
										d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
									/>
								</svg>
							</button>
						</div>
					</form>
				</div>
			</nav>
			<div className="header_background_layout null"></div>
			<div className="position-fixed w-100" style={{ zIndex: 9999 }}></div>
			<nav className="navbar navbar-expand-xxxl navbar-bg side-nav fixed-top hidden">
				<ul className="navbar-nav d-flex d-lg-none">
					<li className="nav-item dropdown">
						<button
							className="nav-link dropdown-toggle lh-base p-1 px-3 m-2"
							role="button">
							<span className="underline-on-hover">TELEVISIONS</span>
						</button>
						<div
							className="dropdown-menu ps-6 pe-4 d-none"
							aria-labelledby="tv-audio-dropdown">
							<a target="_self" className="dropdown-item" href="/televisions">
								<span className="underline-on-hover">EXPLORE TELEVISIONS</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/televisions/laser-tv">
								<span className="underline-on-hover">LASER TV</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/televisions/4k-uled">
								<span className="underline-on-hover">4K ULED</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/televisions/4k-uhd">
								<span className="underline-on-hover">4K UHD</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/televisions/smart-tv-platforms">
								<span className="underline-on-hover">SMART TV PLATFORMS</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/televisions/all-tvs">
								<span className="underline-on-hover">ALL TVs</span>
							</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<button
							className="nav-link dropdown-toggle lh-base p-1 px-3 m-2"
							role="button">
							<span className="underline-on-hover">AUDIO</span>
						</button>
						<div
							className="dropdown-menu ps-6 pe-4 d-none"
							aria-labelledby="tv-audio-dropdown">
							<a
								target="_self"
								className="dropdown-item"
								href="/audio/home-audio">
								<span className="underline-on-hover">
									SOUNDBARS &amp; SUBWOOFERS
								</span>
							</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<button
							className="nav-link dropdown-toggle lh-base p-1 px-3 m-2"
							role="button">
							<span className="underline-on-hover">APPLIANCES</span>
						</button>
						<div
							className="dropdown-menu ps-6 pe-4 d-none"
							aria-labelledby="tv-audio-dropdown">
							<a
								target="_self"
								className="dropdown-item"
								href="/home-appliance">
								<span className="underline-on-hover">
									EXPLORE HOME APPLIANCES
								</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/home-appliance/kitchen-suites">
								<span className="underline-on-hover">KITCHEN SUITE</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/home-appliance/refrigerators/all-refrigerators">
								<span className="underline-on-hover">REFRIGERATORS</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/home-appliance/cooking-range">
								<span className="underline-on-hover">RANGES</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/home-appliance/dishwashers/all-dishwashers">
								<span className="underline-on-hover">DISHWASHERS</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/home-appliance/microwave-ovens/all-microwave-ovens">
								<span className="underline-on-hover">MICROWAVE OVENS</span>
							</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<button
							className="nav-link dropdown-toggle lh-base p-1 px-3 m-2"
							role="button">
							<span className="underline-on-hover">AIR PRODUCTS</span>
						</button>
						<div
							className="dropdown-menu ps-6 pe-4 d-none"
							aria-labelledby="tv-audio-dropdown">
							<a target="_self" className="dropdown-item" href="/air-products">
								<span className="underline-on-hover">EXPLORE AIR PRODUCTS</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/air-products/all-air-products?filter=%5B%7B%22id%22%3A15%2C%22type%22%3A%22CF%22%2C%22values%22%3A%5B%22Window%20Air%20Conditioner%22%5D%7D%5D">
								<span className="underline-on-hover">WINDOW AC</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/air-products/all-air-products?filter=%5B%7B%22id%22%3A15%2C%22type%22%3A%22CF%22%2C%22values%22%3A%5B%22Portable%20Air%20Conditioner%22%5D%7D%5D">
								<span className="underline-on-hover">PORTABLE AC</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/air-products/all-air-products?filter=%5B%7B%22id%22%3A15%2C%22type%22%3A%22CF%22%2C%22values%22%3A%5B%22Dehumidifier%22%5D%7D%5D">
								<span className="underline-on-hover">DEHUMIDIFIERS</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/air-products/all-air-products">
								<span className="underline-on-hover">ALL AIR PRODUCTS</span>
							</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<button
							className="nav-link dropdown-toggle lh-base p-1 px-3 m-2"
							role="button">
							<span className="underline-on-hover">Commercial</span>
						</button>
						<div
							className="dropdown-menu ps-6 pe-4 d-none"
							aria-labelledby="tv-audio-dropdown">
							<a
								target="_self"
								className="dropdown-item"
								href="http://www.hisense-b2b.com/">
								<span className="underline-on-hover">Commercial Displays</span>
							</a>
							<a target="_self" className="dropdown-item" href="/commercial">
								<span className="underline-on-hover">
									Commercial Refrigerators
								</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/commercial-air">
								<span className="underline-on-hover">Commercial HVAC</span>
							</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<button
							className="nav-link dropdown-toggle lh-base p-1 px-3 m-2"
							role="button">
							<span className="underline-on-hover">Support</span>
						</button>
						<div
							className="dropdown-menu ps-6 pe-4 d-none"
							aria-labelledby="tv-audio-dropdown">
							<a target="_self" className="dropdown-item" href="/support">
								<span className="underline-on-hover">Product Support</span>
							</a>
							<a target="_self" className="dropdown-item" href="/support/faq">
								<span className="underline-on-hover">FAQ</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/support/register">
								<span className="underline-on-hover">Register Product</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/extended-service-plan">
								<span className="underline-on-hover">Extended Warranty</span>
							</a>
							<a
								target="_blank"
								className="dropdown-item"
								href="https://hisense.encompass.com/">
								<span className="underline-on-hover">
									Parts &amp; Accessories
								</span>
								<img
									src="https://hisense-usa.com/_next/static/media/OpenNewPageIcon.2189d560.png"
									style={{ marginLeft: "10px" }}
								/>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/televisions/laser-tv/installation-request">
								<span className="underline-on-hover">
									Request Laser TV Installation
								</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/product-safety-recall">
								<span className="underline-on-hover">Recall Information</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/support/firmware-download">
								<span className="underline-on-hover">Firmware Download</span>
							</a>
							<a target="_self" className="dropdown-item" href="/contact">
								<span className="underline-on-hover">Contact Us</span>
							</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<button
							className="nav-link dropdown-toggle lh-base p-1 px-3 m-2"
							role="button">
							<span className="underline-on-hover">Company</span>
						</button>
						<div
							className="dropdown-menu ps-6 pe-4 d-none"
							aria-labelledby="tv-audio-dropdown">
							<a target="_self" className="dropdown-item" href="/company">
								<span className="underline-on-hover">About Hisense</span>
							</a>
							<a target="_self" className="dropdown-item" href="/blog">
								<span className="underline-on-hover">Blog</span>
							</a>
							<a
								target="_self"
								className="dropdown-item"
								href="/authorized-retailers">
								<span className="underline-on-hover">Authorized Retailers</span>
							</a>
							<a target="_self" className="dropdown-item" href="/careers">
								<span className="underline-on-hover">Careers</span>
							</a>
						</div>
					</li>
				</ul>
				<ul
					className="navbar-nav col-lg-6 offset-lg-6 position-relative my-lg-auto mb-20 mb-md-0"
					style={{ paddingRight: "30%" }}></ul>
			</nav>
		</header>
	);
};

export default PlaceholderHeader;

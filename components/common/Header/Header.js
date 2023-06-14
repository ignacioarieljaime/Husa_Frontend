import React, { useEffect, useState } from 'react'

// component
import HamburgerMenu from './HamburgerMenu'

// icon
import HamburgerMenuIcon from 'components/icons/HamburgerMenuIcon'
import Logo from 'components/icons/Logo'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import axios from 'axios'
// import { setHeaderData } from 'redux/slices/layout'
import NavBarDropDown from './NavBarDropDown'
import Link from 'next/link'
import HeaderSearchBox from './HeaderSearchBox'
import HeaderNotification from './HeaderNotification'
import { useWindowSize } from 'hooks/useWindowSize'
import { useSelector } from 'react-redux'

function Header({ data: { structure }, notification }) {
	const { headerData: headerRedux } = useSelector(state => state.layoutData)
	const [width] = useWindowSize()
	const [headerData, setHeaderData] = useState()
	const [asideMenu, setAsideMenu] = useState(false)
	const [topNavCondition, setTopNavCondition] = useState(false)
	const [searchInputCondition, setSearchInputCondition] = useState(false)
	const [dropDown, setDropDown] = useState(null)
	useEffect(() => {
		if (sessionStorage.getItem('headerData')) {
			setHeaderData(
				{
					id: 12,
					title: 'header-menu',
					widgets: {
						right: {
							childs: [
								{
									childs: [
										{
											childs: [],
											header: {
												title: 'Commercial Displays',
												value: 'http://www.hisense-b2b.com/'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Commercial Refrigerators',
												value: '/commercial'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Commercial HVAC',
												value: '/commercial-air'
											},
											products: []
										}
									],
									header: {
										title: 'Commercial',
										value: '/commercial-air',
										static: false
									},
									products: [
										{
											url: '/',
											image:
												'https://assets.hisense-usa.com/assets/PageMenuImage/169/f982c6d16b/Hisense-Commercial-header-menu_-Recovered__ScaleMaxWidthWzY0MF0.png',
											title: 'Product Name 1'
										}
									]
								},
								{
									childs: [
										{
											childs: [],
											header: {
												title: 'Product Support',
												value: '/support',
												target: '_self'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'FAQ',
												value: '/support/faq',
												target: '_self'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Register Product',
												value: '/support/register'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Extended Warranty',
												value: '/extended-service-plan'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Parts & Accessories',
												value: 'https://hisense.encompass.com/',
												target: '_blank'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Request Laser TV Installation',
												value: '/televisions/laser-tv/installation-request',
												target: '_self'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Recall Information',
												value: '/product-safety-recall',
												target: '_self'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Firmware Download',
												value: '/support/firmware-download'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Contact Us',
												value: '/contact'
											},
											products: []
										}
									],
									header: {
										title: 'Support',
										value: '/support',
										static: false
									},
									products: []
								},
								{
									childs: [
										{
											childs: [],
											header: {
												title: 'About Hisense',
												value: '/company'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Blog',
												value: '/blog',
												target: '_self'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Authorized Retailers',
												value: '/authorized-retailers',
												target: '_self'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'Careers',
												value: '/careers',
												target: '_self'
											},
											products: []
										}
									],
									header: {
										title: 'Company',
										value: '/company',
										static: false
									},
									products: []
								}
							]
						},
						center: {
							childs: [
								{
									childs: [
										{
											childs: [],
											header: {
												title: 'EXPLORE TELEVISIONS',
												value: '/televisions',
												target: '_self'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'LASER TV',
												value: '/televisions/laser-tv'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: '4K ULED',
												value: '/televisions/4k-uled'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: '4K UHD',
												value: '/televisions/4k-uhd'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'SMART TV PLATFORMS',
												value: '/televisions/smart-tv-platforms'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'ALL TVs',
												value: '/televisions/all-tvs'
											},
											products: []
										}
									],
									header: {
										title: 'TELEVISIONS',
										value: '/televisions',
										static: false
									},
									products: [
										{
											url: '/televisions/55u6h-hisense-55-inch-u6h-series-quantum-uled-4k-smart-google-tv-2022',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/436/ccc5d70642/u6h__ScaleMaxWidthWzY0MF0.png',
											title: 'Product Name 1'
										},
										{
											url: '/televisions/55u8h-hisense-55-mini-led-uled-4k-smart-google-tv-2022',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/448/f5c88a7895/u8h__ScaleMaxWidthWzY0MF0.png',
											title: 'Product Name 2'
										}
									]
								},
								{
									childs: [
										{
											childs: [],
											header: {
												title: 'SOUNDBARS & SUBWOOFERS',
												value: '/audio/home-audio',
												target: '_self'
											},
											products: []
										}
									],
									header: {
										title: 'AUDIO',
										value: '/audio',
										static: false,
										target: '_self'
									},
									products: [
										{
											url: '/audio/hs205-hisense-hs205-2-0-channel-soundbar',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/239/a580528d99/HS205-1-min__ScaleMaxHeightWzc1MF0.png',
											title: 'Hisense HS205 2.0 Channel Soundbar'
										},
										{
											url: '/audio/hs312-hisense-hs312-3-1-ch-soundbar-with-wireless-subwoofer',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/368/3367a12b32/HS312_Front__ScaleMaxHeightWzc1MF0.png',
											title:
												'Hisense HS312 3.1 Ch Soundbar with wireless subwoofer'
										}
									]
								},
								{
									childs: [
										{
											childs: [],
											header: {
												title: 'EXPLORE HOME APPLIANCES',
												value: '/home-appliance'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'KITCHEN SUITE',
												value: '/home-appliance/kitchen-suites'
											},
											products: []
										},
										{
											childs: [
												{
													childs: [],
													header: {
														title: 'EXPLORE HOME APPLIANCES',
														value: '/home-appliance'
													},
													products: []
												},
												{
													childs: [],
													header: {
														title: 'KITCHEN SUITE',
														value: '/home-appliance/kitchen-suites'
													},
													products: []
												},
												{
													childs: [],
													header: {
														title: 'REFRIGERATORS',
														value:
															'/home-appliance/refrigerators/all-refrigerators'
													},
													products: []
												},
												{
													childs: [],
													header: {
														title: 'RANGES',
														value: '/home-appliance/cooking-range',
														target: '_self'
													},
													products: []
												},
												{
													childs: [],
													header: {
														title: 'DISHWASHERS',
														value: '/home-appliance/dishwashers/all-dishwashers'
													},
													products: []
												},
												{
													childs: [],
													header: {
														title: 'MICROWAVE OVENS',
														value:
															'/home-appliance/microwave-ovens/all-microwave-ovens'
													},
													products: []
												}
											],
											header: {
												title: 'REFRIGERATORS',
												value: '/home-appliance/refrigerators/all-refrigerators'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'RANGES',
												value: '/home-appliance/cooking-range',
												target: '_self'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'DISHWASHERS',
												value: '/home-appliance/dishwashers/all-dishwashers'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'MICROWAVE OVENS',
												value:
													'/home-appliance/microwave-ovens/all-microwave-ovens'
											},
											products: []
										}
									],
									header: {
										title: 'APPLIANCES',
										value: '/home-appliance',
										static: false
									},
									products: [
										{
											url: '/home-appliance/refrigerators/hwd46029ss-46-bottle-freestanding-or-built-in-stainless-steel-wine-cooler',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/274/e4489e1ec0/Front-min__ScaleMaxWidthWzY0MF0.png',
											title: 'Product Name 1'
										},
										{
											url: '/home-appliance/microwave-ovens/hmvz173ss-1-7-cu-ft-over-the-range-microwave',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/471/596d3db992/micro-closed_ScaleMaxHeightWzc1MF0__ScaleMaxWidthWzY0MF0.png',
											title: 'Product Name 2'
										},
										{
											url: '/home-appliance/refrigerators/hrf254n6dse-hisense-25-4-cu-ft-french-door-refrigrator-with-dual-ice-maker-energy-star',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/158/7051a421d1/Carousel-5-min__ScaleMaxWidthWzY0MF0.png',
											title: 'Product Name 3'
										}
									]
								},
								{
									childs: [
										{
											childs: [],
											header: {
												title: 'EXPLORE AIR PRODUCTS',
												value: '/air-products'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'WINDOW AC',
												value:
													'/air-products/all-air-products?filter=%5B%7B%22id%22%3A15%2C%22type%22%3A%22CF%22%2C%22values%22%3A%5B%22Window%20Air%20Conditioner%22%5D%7D%5D'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'PORTABLE AC',
												value:
													'/air-products/all-air-products?filter=%5B%7B"id"%3A15%2C"type"%3A"CF"%2C"values"%3A%5B"Portable%20Air%20Conditioner"%5D%7D%5D'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'DEHUMIDIFIERS',
												value:
													'/air-products/all-air-products?filter=%5B%7B%22id%22%3A15%2C%22type%22%3A%22CF%22%2C%22values%22%3A%5B%22Dehumidifier%22%5D%7D%5D'
											},
											products: []
										},
										{
											childs: [],
											header: {
												title: 'ALL AIR PRODUCTS',
												value: '/air-products/all-air-products'
											},
											products: []
										}
									],
									header: {
										title: 'AIR PRODUCTS',
										value: '/air-products',
										static: false
									},
									products: [
										{
											url: '/air-products/aw0822cw1w-hisense-8000-btu-window-ac-wifi',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/397/761648fb97/AW0822CW1W-front__ScaleMaxWidthWzY0MF0.png',
											title: 'Product Name 1'
										},
										{
											url: '/air-products/dh5022k1w-hisense-35-pint-2-speed-dehumidifier-energy-star',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/400/386becd4f1/DH5022K1W-front__ScaleMaxWidthWzY0MF0.png',
											title: 'Product Name 2'
										},
										{
											url: '/air-products/ap1022tw1gd-hisense-550-sf-dual-hose-inverter-portable-ac',
											image:
												'https://assets.hisense-usa.com/assets/GalleryImages/Product/396/2d8dfdfe04/1-front-AP1022TW1GD-1__ScaleMaxWidthWzY0MF0.png',
											title: 'Product Name 3'
										}
									]
								}
							]
						},
						hamburger: []
					},
					brand_id: 3
				}
				// ...JSON.parse(sessionStorage.getItem('headerData'))
			)
		}
	}, [headerRedux])

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
				className={`navbar navbar-expand justify-content-center  
					theme-${structure.theme.value}
				 top-nav py-3 px-sm-4 fixed-top flex-wrap ${
						!topNavCondition && 'search-mode'
					} ${asideMenu || searchInputCondition ? 'hidden' : ''}`}
				style={asideMenu || searchInputCondition ? { zIndex: 1000 } : null}>
				<div className='container-fluid'>
					<div className='row justify-content-between align-items-center w-100 m-auto'>
						<div className='m-0 col-xl-4 py-1'>
							<Link href='/'>
								<a className='navbar-brand m-0 text-start'>
									<Logo
										color={structure.theme.value === 'light' ? '#000' : '#fff'}
									/>
								</a>
							</Link>
						</div>
						<ul className='navbar-nav col-xl-4 d-none d-lg-flex justify-content-center p-0'>
							{headerData?.widgets?.center.childs.map((item, index) => (
								<NavBarDropDown
									status={dropDown}
									handler={setDropDown}
									key={`right-${index}`}
									data={item}
								/>
							))}
						</ul>
						<ul className='navbar-nav align-items-center justify-content-end p-0 col-4'>
							{headerData?.widgets?.right.childs.map((item, index) => (
								<NavBarDropDown
									status={dropDown}
									handler={setDropDown}
									key={`right-${index}`}
									data={item}
								/>
							))}

							<li className='nav-item-button' data-button='search'>
								<button
									className={`btn search-icon p-2  ${
										searchInputCondition && 'open'
									}`}
									onClick={() => setSearchInputCondition(!searchInputCondition)}
									aria-label='search'>
									<MagnifierIcon
										stroke={structure.theme.value === 'light' ? '#000' : '#fff'}
									/>
								</button>
							</li>
							{headerData?.widgets?.hamburger.length || width > 992 ? null : (
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
										<HamburgerMenuIcon
											color={
												structure.theme.value === 'light' ? '#000' : '#fff'
											}
										/>
									</button>
								</li>
							)}
						</ul>
					</div>
				</div>
				<HeaderSearchBox
					theme={structure.theme.value}
					searchInputCondition={searchInputCondition}
					setSearchInputCondition={setSearchInputCondition}
				/>

				{/* <SubMenuHeader /> */}
			</nav>
			<div className={`header_background_layout ${dropDown && 'active'}`}></div>

			{notification && (
				<div className={'position-fixed w-100'} style={{ zIndex: 999 }}>
					{notification.map(item => (
						<HeaderNotification data={item} />
					))}
				</div>
			)}

			{headerData && (
				<HamburgerMenu
					data={headerData}
					asideHandler={setAsideMenu}
					asideMenu={asideMenu}
				/>
			)}
		</header>
	)
}

export default Header

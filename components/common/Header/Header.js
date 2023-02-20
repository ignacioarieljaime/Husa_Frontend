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

function Header({ data: { structure }, notification }) {
	// const { headerData } = useSelector(state => state.layoutData)
	const [width] = useWindowSize()
	const [headerData, setHeaderData] = useState()
	const [asideMenu, setAsideMenu] = useState(false)
	const [topNavCondition, setTopNavCondition] = useState(false)
	const [searchInputCondition, setSearchInputCondition] = useState(false)
	useEffect(() => {
		if (sessionStorage.getItem('headerData')) {
			setHeaderData(JSON.parse(sessionStorage.getItem('headerData')))
		}
		getMenu()
	}, [])

	useEffect(() => {
		if (!searchInputCondition) {
			setTimeout(() => {
				setTopNavCondition(true)
			}, 800)
		} else {
			setTopNavCondition(false)
		}
	}, [searchInputCondition])

	const getMenu = async () => {
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getMenus`
			)
			let headerData = response.data.data.find(item => item.title === 'header')

			if (
				!sessionStorage.getItem('headerData') ||
				(sessionStorage.getItem('headerData') &&
					sessionStorage.getItem('headerData') !== JSON.stringify(headerData))
			) {
				sessionStorage.setItem('headerData', JSON.stringify(headerData))
				setHeaderData(headerData)
			}
		} catch (error) {
			console.log(error)
		}
	}

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
							{headerData?.widgets?.centerOption.map((item, index) => (
								<NavBarDropDown key={`right-${index}`} data={item} />
							))}
						</ul>
						<ul className='navbar-nav align-items-center justify-content-end p-0 col-4'>
							{headerData?.widgets?.rightOption.map((item, index) => (
								<NavBarDropDown key={`right-${index}`} data={item} />
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
				/>

				{/* <SubMenuHeader /> */}
			</nav>
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

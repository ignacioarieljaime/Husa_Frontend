import React, {useEffect, useState} from 'react'

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

function Header({isBlog = false, data: {structure}}) {
    // const { headerData } = useSelector(state => state.layoutData)
    const [headerData, setHeaderData] = useState()
    const [asideMenu, setAsideMenu] = useState(false)
    const [topNavCondition, setTopNavCondition] = useState(false)
    const [searchInputCondition, setSearchInputCondition] = useState(false)
    useEffect(() => {
        sessionStorage.getItem('headerData')
            ? setHeaderData(JSON.parse(sessionStorage.getItem('headerData')))
            : getMenu()
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
            setHeaderData(response.data.data.find(item => item.title === 'header'))
            sessionStorage.setItem(
                'headerData',
                JSON.stringify(response.data.data.find(item => item.title === 'header'))
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header>
            <nav
                style={{transitionDelay: '2s'}}
                className={`navbar navbar-expand justify-content-center  
					theme-${structure.theme.value}
				 top-nav py-3 px-sm-4 fixed-top flex-wrap ${
                    !topNavCondition && 'search-mode'
                } ${asideMenu || searchInputCondition ? 'hidden' : ''}`}>
                <div className='container-fluid'>
                    <div className='row justify-content-between align-items-center w-100 m-auto'>
                        <Link href='/'>
                            <a className='navbar-brand m-0 col-xl-4 text-start'>
                                <Logo/>
                            </a>
                        </Link>
                        <h1>Hisense</h1>
                        <ul className='navbar-nav col-xl-4 d-none d-lg-flex justify-content-center p-0'>
                            {headerData?.widgets?.centerOption.map((item, index) => (
                                <NavBarDropDown key={`right-${index}`} data={item}/>
                            ))}
                        </ul>
                        <ul className='navbar-nav align-items-center justify-content-end p-0 col-4'>
                            {headerData?.widgets?.rightOption.map((item, index) => (
                                <NavBarDropDown key={`right-${index}`} data={item}/>
                            ))}

                            <li className='nav-item-button' data-button='search'>
                                <button
                                    className={`btn search-icon p-2  ${
                                        searchInputCondition && 'open'
                                    }`}
                                    onClick={() => setSearchInputCondition(!searchInputCondition)}
                                    aria-label='search'>
                                    <MagnifierIcon/>
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
                                    <HamburgerMenuIcon/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <HeaderSearchBox
                    theme={structure.theme.value}
                    searchInputCondition={searchInputCondition}
                />

                {/* <SubMenuHeader /> */}
            </nav>

            {/* <div className='container-fluid home-top-advertisement'>
				<a href='https://www.hisense-usa.com/product-safety-recall'>
					Recall Information: French Door Refrigerator
				</a>
			</div> */}
            {headerData && <HamburgerMenu data={headerData} asideMenu={asideMenu}/>}
        </header>
    )
}

export default Header

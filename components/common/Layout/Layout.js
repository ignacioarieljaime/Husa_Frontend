import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CompareModal from 'components/page/Product/CompareModal'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Suspense, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getSettingApi } from 'services/cxm'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useWindowSize } from 'hooks/useWindowSize'
import axios from 'axios'
import { setHeaderAndFooterData } from 'redux/slices/layout'
import { useDispatch } from 'react-redux'

function Layout({ children, meta, title, header }) {
	const [compareRoute, setCompareRoute] = useState()
	const [width] = useWindowSize()
	const dispatch = useDispatch()
	const [showGoTop, setShowGoTop] = useState(false)
	const router = useRouter()
	const [showChild, setShowChild] = useState(false)

	useEffect(() => {
		checkIsAdmin()
		AOS.init()
		setInterval(() => {
			AOS.refresh()
		}, 5000)
		setShowChild(true)
		getSetting()
		window.addEventListener('scroll', () => listenToScroll(window.innerHeight))
		return () => window.removeEventListener('scroll', () => listenToScroll(0))
	}, [])

	useEffect(() => {
		getMenu()
	}, [router.pathname])

	const getMenu = async () => {
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getMenus`
			)
			let headerData = response.data.data.find(
				item => item.title === 'header-menu'
			)
			let footerData = response.data.data.find(
				item => item.title === 'footer-menu'
			)

			sessionStorage.setItem('headerData', JSON.stringify(headerData))
			sessionStorage.setItem('footerData', JSON.stringify(footerData))
			dispatch(setHeaderAndFooterData(response.data.data))
		} catch (error) {
			console.log(error)
		}
	}

	const checkIsAdmin = () => {
		if (process.env.NEXT_PUBLIC_APP_LOCATION !== 'production') {
			if (
				!localStorage.getItem('isLogin') &&
				!router.pathname.includes('preview')
			) {
				let password = prompt('please enter your password')
				if (password === 'husaOne') {
					localStorage.setItem('isLogin', 'true')
				} else {
					window.location = `https://www.hisense-usa.com${router.pathname}`
				}
			}
		}
	}

	const listenToScroll = _screenHeight => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop
		if (_screenHeight <= winScroll) {
			setShowGoTop(true)
		} else {
			setShowGoTop(false)
		}
	}

	const getSetting = async () => {
		try {
			let response = await getSettingApi()

			setCompareRoute(
				response.data.data.find(item => item.key === 'CompareRoute')
			)
		} catch (error) {
			console.log(error)
		}
	}

	const goUpHandler = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='viewport' />
				<meta name='og:url' content={router.route} />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='apple-touch-fullscreen' content='yes' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				{meta &&
					meta.map((item, index) =>
						item.rel === 'blank' ? (
							<meta key={index} name={item.name} content={item.content} />
						) : item.rel === 'http-equiv' ? (
							<meta
								key={index}
								http-equiv={item.name}
								content={item.content ? item.content : ''}
							/>
						) : item.name !== 'property="og:image:vertical"' &&
						  item.name !== 'property="og:image:square"' ? (
							<meta
								key={index}
								property={item?.name?.split('=')[1]?.replace(/"/g, '')}
								content={item.content ? item.content : ''}
							/>
						) : null
					)}
			</Head>
			<section className={`layout ${title}-page ${header ? '' : 'no_header'}`}>
				<ToastContainer />

				<> {children}</>
			</section>
			<CompareModal route={compareRoute} />
			{showGoTop && (
				<button
					id='back-to-top-button'
					onClick={goUpHandler}
					style={{ opacity: 1, zIndex: 100 }}>
					<FontAwesomeIcon icon={faChevronUp} />
				</button>
			)}
		</>
	)
}

export default Layout

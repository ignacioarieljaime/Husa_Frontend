import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CompareModal from 'components/page/Product/CompareModal'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getSettingApi } from 'services/cxm'

function Layout({ children, meta, title }) {
	const [compareRoute, setCompareRoute] = useState()
	const [showGoTop, setShowGoTop] = useState(false)
	const router = useRouter()

	useEffect(() => {
		getSetting()
		window.addEventListener('scroll', () => listenToScroll(window.innerHeight))
		return () => window.removeEventListener('scroll', () => listenToScroll(0))
	}, [])

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
					meta.map(item =>
						item.rel === 'blank' ? (
							<meta name={item.name} content={item.content} />
						) : (
							<meta property={`og:${item.name}`} content={item.content} />
						)
					)}
			</Head>
			<section className={`layout ${title}`}>
				<ToastContainer />
				<> {children}</>
			</section>
			{showGoTop && (
				<button
					id='back-to-top-button'
					onClick={goUpHandler}
					style={{ opacity: 1, zIndex: 100 }}>
					<FontAwesomeIcon icon={faChevronUp} />
				</button>
			)}

			<CompareModal route={compareRoute} />
		</>
	)
}

export default Layout

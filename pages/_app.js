// component
import ErrorBoundary from 'components/common/ErrorBoundary/ErrorBoundary'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// redux
import { Provider } from 'react-redux'
import { store } from 'redux/store'

// style
import 'styles/App.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
	const [showChild, setShowChild] = useState(false)
	useEffect(() => {
		AOS.init()
		AOS.refresh()
		setShowChild(true)
	}, [])

	if (!showChild) {
		return null
	}

	if (typeof window === 'undefined') {
		return <></>
	} else {
		return (
			<ErrorBoundary>
				<Provider store={store}>
					<Script id='google-tag-manager' strategy='afterInteractive'>
						{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-WBPC7RT');`}
					</Script>
					<Component {...pageProps} />
				</Provider>
			</ErrorBoundary>
		)
	}

	// return (
	// 	<Provider store={store}>
	// 		<Component {...pageProps} />
	// 	</Provider>
	// )
}

export default MyApp
